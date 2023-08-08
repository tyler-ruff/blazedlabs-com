const prismic = require("@prismicio/client");

const sm = require("./sm.json");

const prod = process.env.NODE_ENV === 'production';

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
  ],
});

// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = async () => {
  const client = prismic.createClient(sm.apiEndpoint);

  const repository = await client.getRepository();
  const locales = repository.languages.map((lang) => lang.id);

  return withPWA({
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
      locales: ['en-US'],
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: 'en-US',
    },
    env: {
      SITE_URL: process.env.SITE_URL,
    },
    
  });
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

module.exports = nextConfig;

module.exports = withMDX(nextConfig);
