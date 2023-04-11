/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com'],
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoibWFwc2ltb24iLCJhIjoiY2xkeHprNHg4MG1kdzNycDc4a3JmZzl5bCJ9.pOf8DM5Fn5lwGkkn-qf-GA'
  }
}

module.exports = nextConfig;
