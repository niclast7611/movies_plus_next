/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MOVIES_API_KEY: process.env.MOVIES_API_KEY,
  },
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
