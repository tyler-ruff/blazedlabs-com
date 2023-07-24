import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { components } from "../slices/";
import { Layout } from "../components/Layout";

const Index = ({ page, navigation, settings }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "image": [
      "https://blazed.sirv.com/logo/Wallpaper-Beaker.png",
      "https://blazed.sirv.com/logo/Lockscreen-Beaker.png",
      "https://blazed.sirv.com/logo/CityNight-Beaker.png"
    ],
    "logo": "https://blazed.sirv.com/logo/Beaker-Dark.png",
    "name": "Blazed Labs",
    "email": "hello@blazed.space",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1650 Simpson Ave",
      "addressLocality": "New Jersey",
      "addressRegion": "NJ",
      "postalCode": "08226",
      "addressCountry": "US"
    },
    "url": "https://blazedlabs.com/",
    "telephone": "+18557882348",
    "duns": "104328712",
    "taxID": "844261217",
    "naics": "513210",
    "founder": "Tyler Ruff",
    "foundingDate": "2020",
    "publishingPrinciples": "https://blazed.xyz/",
    "unnamedSourcesPolicy": "https://blazed.xyz/",
    "actionableFeedbackPolicy": "https://blazed.xyz/",
    "correctionsPolicy": "https://blazed.xyz/",
    "ethicsPolicy": "https://blazed.city/",
    "ownershipFundingInfo": "https://opencollective.com/blazed-labs",
    "memberOf": {
      "@type": "Organization",
      "name": "Ruff Management",
      "legalName": "Ruff Management Inc.",
      "url": "https://ruff-manage.com/",
      "telephone": "+18338870061"
    },
    "keywords": [
      "blazed", "labs", "space", "ruff", "management", "manage",
      "software", "publishing", "systems", "telecom", "project",
      "dev-ops", "community", "beez"
    ],
    "slogan": "We turn Dreams into Reality.",
    "knowsAbout": "Next.js, Nuxt, Hugo, PHP, Laravel, Astro, Vue, Vite, Socket.io, Firebase, Telecommunications, and Marketing",
    "legalName": "Blazed Labs LLC"
  };
  return (
    <Layout navigation={navigation} settings={settings}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <title>
          {prismicH.asText(page.data.title)} | {prismicH.asText(settings.data.siteTitle)}
        </title>
        <meta itemprop="name" content={prismicH.asText(settings.data.siteTitle)}/>
        <meta itemprop="description" content={prismicH.asText(settings.data.description)}/>
        <meta property="og:title" content={prismicH.asText(settings.data.siteTitle)}/>
        <meta name="description" content={prismicH.asText(settings.data.description)}/>
        <meta property="og:description" content={prismicH.asText(settings.data.description)}/>
        <meta name="twitter:title" content={prismicH.asText(settings.data.siteTitle)}/>
        <meta name="twitter:description" content={prismicH.asText(settings.data.description)}/>
      </Head>
      <article>
        <SliceZone slices={page.data.slices} components={components} />
      </article>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "home", { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
      page,
      navigation,
      settings,
    },
    revalidate: 10,
  };
}