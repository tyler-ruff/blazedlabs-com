/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'blazed.sirv.com',
        'lh3.googleusercontent.com'
      ],
    },
    experimental: {
      mdxRs: true,
      serverActions: true,
    },
    async rewrites() {
      return [
        {
          source: '/auth',
          destination: 'https://blz.one/api/me',
        },
      ]
    },
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)