/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
