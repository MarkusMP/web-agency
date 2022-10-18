// Any random string, must match SANITY_PREVIEW_SECRET in the Next.js .env.local file
const previewSecret = "0936d352-e64f-486c-4322-503bfabt4773d";

// Replace `remoteUrl` with your deployed Next.js site
const remoteUrl = `https://web-agency-beta.vercel.app`;
const localUrl = `http://localhost:3000`;

export default function resolveProductionUrl(doc) {
  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;

  const previewUrl = new URL(baseUrl);

  previewUrl.pathname = `/api/preview`;
  previewUrl.searchParams.append(`secret`, previewSecret);
  console.log(doc);

  if (doc._id.endsWith("sv-se")) {
    if (doc?.slug?.current) {
      previewUrl.searchParams.append(`slug`, `/sv/${doc?.slug?.current}`);
    } else {
      previewUrl.searchParams.append(`slug`, `/sv/`);
    }
  } else {
    if (doc?.slug?.current) {
      previewUrl.searchParams.append(`slug`, `/${doc?.slug?.current}`);
    } else {
      previewUrl.searchParams.append(`slug`, `/`);
    }
  }

  return previewUrl.toString();
}
