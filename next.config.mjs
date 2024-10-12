/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";
import rehypeExternalLinks from 'rehype-external-links'

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
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

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypeExternalLinks({target: ['_blank']})
    ],
    extension: /\.(md|mdx)$/,
  }
});
//module.exports = withMDX(nextConfig);
export default withMDX(nextConfig);