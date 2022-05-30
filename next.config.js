/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["api.daily.dev", "dev.to", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
