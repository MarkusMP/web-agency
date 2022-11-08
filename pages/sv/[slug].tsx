import React from "react";
import { groq } from "next-sanity";
import { urlFor, usePreviewSubscription } from "../../lib/sanity";
import { getClient } from "../../lib/sanity.server";
import {
  QUERY_FOOTER,
  QUERY_HEADER,
  QUERY_HOME,
  QUERY_PAGE,
  QUERY_SETTINGS,
} from "../../data";
import Layout from "../../components/Layout";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import RenderSections from "../../components/RenderSections";

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
  const allSlugsQuerySv = groq`*[defined(slug.current) && __i18n_lang == "sv-se"][].slug.current `;
  const pages = await getClient(preview).fetch(allSlugsQuerySv);

  return {
    paths: pages
      .filter((slug: any) => !slug.includes("blogg/" && "#"))
      .map((slug: any) => `/sv/${slug}`),

    fallback: "blocking",
  };
}

export async function getStaticProps({ params, preview = false }: any) {
  const client = await getClient(preview);

  const query = QUERY_PAGE;
  const queryParams = { language: "sv-se" };
  const data = await client.fetch(query, { ...queryParams, slug: params.slug });

  if (data.length === 0) {
    return { notFound: true };
  } else if (data.length > 0) {
    const { header, footer, settings }: any = await client.fetch(
      `{
        "header": ${QUERY_HEADER},
        "footer": ${QUERY_FOOTER},
        "settings": ${QUERY_SETTINGS},
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
        settings,
        // // Pass down the initial content, and our query
        data: { page, query, queryParams },
      },
      revalidate: 60,
    };
  }
}

export default function Page({ data, preview, header, footer, settings }: any) {
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
        canonical={`${settings?.url}/sv/${page.slug}`}
        openGraph={{
          url: `${settings?.url}/sv/${page.slug}`,
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
        {page?.content && <RenderSections sections={page.content} />}
      </Layout>
    </>
  );
}
