/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["cdn.sanity.io"],
    dangerouslyAllowSVG: true,
  },
  i18n: {
    locales: ["en", "sv"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
