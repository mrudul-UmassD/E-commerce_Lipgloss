/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['framer-motion'],
  reactStrictMode: true,
  images: {
    domains: ['example.com', 'picsum.photos'],
  },
}

module.exports = nextConfig 