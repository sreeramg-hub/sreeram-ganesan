import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable React strict mode for catching bugs early
  reactStrictMode: true,

  // Image domains (add external image hosts here if needed)
  images: {
    remotePatterns: [],
  },

  // Enable experimental features as needed
  // experimental: {},
}

export default nextConfig
