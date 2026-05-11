const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  images: {},
  transpilePackages: ['react-icons', 'sanity', 'next-sanity', '@sanity/ui', '@sanity/icons', 'styled-components'],
  outputFileTracingRoot: path.join(__dirname),
  eslint: {
    ignoreDuringBuilds: true,
  },
};
