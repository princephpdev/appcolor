/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["burst.shopifycdn.com", "localhost:3001"],
  },
};

module.exports = nextConfig;
