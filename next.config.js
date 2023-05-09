/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["fakestoreapi.com"], // <== Domain name
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

module.exports = nextConfig;
