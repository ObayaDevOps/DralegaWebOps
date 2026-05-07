const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  images: {},
  transpilePackages: ['react-icons'],
  outputFileTracingRoot: path.join(__dirname),
};
