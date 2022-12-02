/** @type {import('next').NextConfig} */

const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
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
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new DuplicatePackageCheckerPlugin());
    return config;
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
