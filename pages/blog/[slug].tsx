import React from "react";
import { groq } from "next-sanity";
import { urlFor, usePreviewSubscription } from "../../lib/sanity";
import { getClient } from "../../lib/sanity.server";
import { QUERY_BLOG, QUERY_FOOTER, QUERY_HEADER, QUERY_HOME } from "../../data";
import Layout from "../../components/Layout";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import RenderSections from "../../components/RenderSections";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

function filterDataToSingleItem(data: any, preview: any) {
  if (!Array.isArray(data)) {
    return data;
  }

  if (data.length === 1) {
    return data[0];
  }

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0];
  }

  return data[0];
}

export async function getStaticPaths(preview = false) {
  const allSlugsQuery = groq`*[defined(slug.current) && __i18n_lang == "en-us"][].slug.current`;
  const pages = await getClient(preview).fetch(allSlugsQuery);

  return {
    paths: pages
      .filter((slug: any) => slug.includes("blog/"))
      .map((slug: any) => `/${slug}`),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params, preview = false }: any) {
  const client = await getClient(preview);

  const query = QUERY_BLOG;
  const queryParams = { language: "en-us", slug: `blog/${params.slug}` };
  const data = await client.fetch(query, queryParams);

  if (data.length === 0) {
    return { notFound: true };
  } else if (data.length > 0) {
    const { header, footer }: any = await client.fetch(
      `{
          "header": ${QUERY_HEADER},
          "footer": ${QUERY_FOOTER}
        }`,
      queryParams
    );

    // Helper function to reduce all returned documents down to just one
    const page = filterDataToSingleItem(data, preview);

    return {
      props: {
        // Pass down the "preview mode" boolean to the client-side
        preview,
        header,
        footer,

        // Pass down the initial content, and our query
        data: { page, query, queryParams },
      },
      revalidate: 60,
    };
  }
}

export default function Page({ data, preview, header, footer }: any) {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    // The hook will return this on first render
    // This is why it's important to fetch *draft* content server-side!
    initialData: data?.page,
    // The passed-down preview context determines whether this function does anything
    enabled: preview,
  });

  // Client-side uses the same query, so we may need to filter it down again
  const page = filterDataToSingleItem(previewData, preview);

  // Notice the optional?.chaining conditionals wrapping every piece of content?
  // This is extremely important as you can't ever rely on a single field
  // of data existing when Editors are creating new documents.
  // It'll be completely blank when they start!

  const myPortableTextComponents = {
    marks: {
      link: ({ children, value }: any) => {
        return (
          <a
            href={value.href}
            rel={"noreferrer noopener"}
            target="_blank"
            className="text-primary"
          >
            {children}
          </a>
        );
      },
    },
  };

  const url = page?.ogImage && (urlFor(page.ogImage).url() as string);

  const router = useRouter();
  if (router.isFallback) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <>
      <NextSeo
        title={page?.titleSEO}
        description={page?.descriptionSEO}
        // canonical={`${settings?.url}/${page.slug}`}
        openGraph={{
          //   url: `${settings?.url}/`,
          title: page?.titleSEO,
          description: page?.descriptionSEO,
          images: [
            {
              url: url,
              width: 1200,
              height: 630,
              alt: "Logo of webbtopia",
            },
          ],
        }}
      />
      <Layout header={header} footer={footer}>
        <section className="pt-[80px] bg-black">
          <div className="max-w-2xl mx-auto py-12 container px-6">
            <Link href={`/blogg`}>
              <button className="px-4 py-2 mb-4 bg-white text-black rounded">
                Go back
              </button>
            </Link>
            <h1 className="text-3xl font-bold pb-4 text-white">
              {page?.title && page.title}
            </h1>

            {page?.mainImage && (
              <Image
                className="image rounded"
                loader={() => urlFor(page?.mainImage && page?.mainImage).url()}
                src={urlFor(page?.mainImage && page?.mainImage).url()}
                alt={page?.title}
                unoptimized={true}
                width="100%"
                height="0"
                objectFit="contain"
                priority
              />
            )}

            <div className="prose prose-invert pt-4 text-white">
              {page?.body && (
                <PortableText
                  value={page?.body}
                  components={myPortableTextComponents}
                />
              )}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
