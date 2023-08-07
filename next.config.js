const prismic = require("@prismicio/client");

const sm = require("./sm.json");

const withPWA = require('next-pwa')({
  dest: 'public'
});

/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  const client = prismic.createClient(sm.apiEndpoint);

  const repository = await client.getRepository();
  const locales = repository.languages.map((lang) => lang.id);

  return withPWA({
    reactStrictMode: true,
    pwa: {
      buildExcludes: [/middleware-manifest\.json$/]
    },
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
