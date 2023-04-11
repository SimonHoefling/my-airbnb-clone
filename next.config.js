/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com'],
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoibWFwc2ltb24iLCJhIjoiY2xnYnhkMXN6MGJkNTNrcW01MWhxZnJhMiJ9.MfFvXOrtevBHGxK_uBvfGw'
  }
}

module.exports = nextConfig;
