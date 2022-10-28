import type { NextPage } from "next";
import { getClient } from "../lib/sanity.server";
import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import { QUERY_FOOTER, QUERY_HEADER } from "../data";
import { groq } from "next-sanity";
import { urlFor, usePreviewSubscription } from "../lib/sanity";
import RenderSections from "../components/RenderSections";

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

export async function getStaticProps({ params, preview = false }: any) {
  const client = await getClient(preview);

  const query = groq`*[_type == "notFound" && _id == $id]`;
  const queryParams = { id: "notFound" };
  const data = await client.fetch(query, queryParams);
  const { header, footer }: any = await client.fetch(
    `{
    "header": ${QUERY_HEADER},
    "footer": ${QUERY_FOOTER},
  }`,
    { language: "en-us" }
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
const NotFound: NextPage = ({
  data,
  preview,
  header,
  footer,
  settings,
}: any) => {
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

  const url = page?.ogImage && (urlFor(page.ogImage).url() as string);

  return (
    <>
      <NextSeo
        title={page?.titleSEO}
        description={page?.descriptionSEO}
        openGraph={{
          url: `${settings?.url}/`,
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
};

export default NotFound;
