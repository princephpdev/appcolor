/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["appcolor.vercel.app", "localhost:3001"],
  },
};

module.exports = nextConfig;
