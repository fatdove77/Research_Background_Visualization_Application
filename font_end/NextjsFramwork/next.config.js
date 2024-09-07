/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// const path = require('path')
// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
// }

// next.config.js
module.exports = {
  images: {
    domains: ['scholar.googleusercontent.com'],
  },
};


module.exports = nextConfig
