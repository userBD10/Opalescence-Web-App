const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  cacheStartUrl: false,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
}

module.exports = withPWA(nextConfig)
