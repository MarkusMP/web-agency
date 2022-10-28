import type { NextPage } from "next";
import { getClient } from "../../lib/sanity.server";
import { NextSeo } from "next-seo";
import Layout from "../../components/Layout";
import { urlFor, usePreviewSubscription } from "../../lib/sanity";
import {
  QUERY_FOOTER,
  QUERY_HEADER,
  QUERY_HOME,
  QUERY_SETTINGS,
} from "../../data";
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

export async function getStaticProps({ params, preview = false }: any) {
  const client = await getClient(preview);

  const query = QUERY_HOME;
  const queryParams = { language: "sv-se" };
  const data = await client.fetch(query, queryParams);

  if (!data) return { notFound: true };

  if (data.length === 0) {
    return { notFound: true };
  } else {
    const { header, footer, settings }: any = await client.fetch(
      `{
      "header": ${QUERY_HEADER},
      "footer": ${QUERY_FOOTER},
      "settings": ${QUERY_SETTINGS},
    }`,
      queryParams
    );

    const page = filterDataToSingleItem(data, preview);

    return {
      props: {
        preview,
        header,
        footer,
        settings,
        data: { page, query, queryParams },
      },
      revalidate: 60,
    };
  }
}
const Home: NextPage = ({ data, preview, header, settings, footer }: any) => {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data?.page,
    enabled: preview,
  });

  const page = filterDataToSingleItem(previewData, preview);

  const url = page?.ogImage && (urlFor(page.ogImage).url() as string);

  return (
    <>
      <NextSeo
        title={page?.titleSEO}
        description={page?.descriptionSEO}
        canonical={`${settings?.url}/sv`}
        openGraph={{
          url: `${settings?.url}/sv`,
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

export default Home;
