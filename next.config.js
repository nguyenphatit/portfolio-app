/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["api.daily.dev", "dev.to"],
  },
};

module.exports = nextConfig;
