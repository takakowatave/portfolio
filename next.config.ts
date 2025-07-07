/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.microcms-assets.io"],
  },
  env: {
    BASIC_USER: process.env.BASIC_USER,
    BASIC_PASS: process.env.BASIC_PASS,
  },
};

module.exports = nextConfig;

