export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  apiVersion: "2021-10-21",
  useCdn: true,
};
