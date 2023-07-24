import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { components } from "../slices";
import { Layout } from "../components/Layout";

const Page = ({ page, navigation, settings }) => {
  const schema = {
    "@context": "https://schema.org",
    "type": "Article",
    "headline": "Blazed Labs Main Website",
    "author": [
      {
        "@type": "Person",
        "name": "Tyler Ruff",
        "url": "https://tyler-ruff.com/"
      },
      {
        "@type": "Organization",
        "name": "Blazed Labs",
        "url": "https://blazed.company/"
      }
    ],
    "publisher": {
      "name": "Blazed Publishing",
      "url": "https://blazed.xyz/"
    }
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

export default Page;

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", params.uid, { lang: locale });
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

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page", { lang: "*" });

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
        locale: page.lang,
      };
    }),
    fallback: false,
  };
}
