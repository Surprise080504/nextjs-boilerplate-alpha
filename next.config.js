/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  // Add the domain for the global storage service that you will be using for images
  images: {
    domains: [],
  },
};

module.exports = nextConfig;
