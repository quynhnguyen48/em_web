/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'vi',
    localeDetection: true,
  },
};

module.exports = nextConfig;
