/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env:{
    API_PATH: process.env.API_PATH
  }
};
module.exports = nextConfig;
