/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains:["firebasestorage.googleapis.com"],
  },
  // experimental: {
  //   images: {
  //     unoptimized: true,
  //   },
  // },
}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = {
  compress: true,
}
module.exports = withBundleAnalyzer({})
module.exports = nextConfig
