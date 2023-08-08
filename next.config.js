const withPlugins = require('next-compose-plugins');

const prod = process.env.NODE_ENV === 'production';

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  experimental:{
    appDir: true,
    serverComponentsExternalPackages: ["@prisma/client"],
    mdxRs: true,
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-us'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-us',
  },
  env: {
    SITE_URL: process.env.SITE_URL,
  },
    
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: prod ? false : true,
  register: false,
  buildExcludes: [
    /middleware-manifest\.json$/,
    /_middleware\.js$/,
    /_middleware\.js\.map$/,
    /middleware-runtime\.js$/,
    /middleware-runtime\.js\.map$/,
    /middleware.*manifest\.js$/,
    /\/*server\/middleware-chunks\/[0-9]*[a-z]*[A-Z]*\.js$/,
    /middleware-manifest\.json$/,
    /middleware-runtime\.js$/,
    /_middleware\.js$/,
    /^.+\\_middleware\.js$/,
  ],
});

module.exports = async (phase, { defaultConfig }) => {
  delete defaultConfig['webpackDevMiddleware'];
  delete defaultConfig['configOrigin'];
  return withPlugins([
    withMDX, 
    withPWA
  ], nextConfig)
};