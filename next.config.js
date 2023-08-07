const prismic = require("@prismicio/client");

const sm = require("./sm.json");

const withPWA = require('next-pwa')({
  dest: 'public',
  register: false,
  buildExcludes: [
    /middleware-manifest\.json$/,
    /_middleware\.js$/,
    /_middleware\.js\.map$/,
    /middleware-runtime\.js$/,
    /middleware-runtime\.js\.map$/,
  ],
});

/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  const client = prismic.createClient(sm.apiEndpoint);

  const repository = await client.getRepository();
  const locales = repository.languages.map((lang) => lang.id);

  return withPWA({
    reactStrictMode: true,
    experimental:{
      appDir: true,
      serverComponentsExternalPackages: ["@prisma/client"],
    },
    i18n: {
      // These are all the locales you want to support in
      // your application
      locales,
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: locales[0],
    },
    env: {
      SITE_URL: process.env.SITE_URL,
    },
  });
};

module.exports = nextConfig;
