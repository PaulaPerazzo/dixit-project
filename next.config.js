/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
}

// module.exports = {
//   pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
// }

module.exports = nextConfig
