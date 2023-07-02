import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { components } from "../slices/";
import { Layout } from "../components/Layout";

const Index = ({ page, navigation, settings }) => {
  return (
    <Layout navigation={navigation} settings={settings}>
      <Head>
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
      <SliceZone slices={page.data.slices} components={components} />
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
  };
}
