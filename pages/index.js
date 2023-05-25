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
        <title>Blazed Labs | {prismicH.asText(page.data.title)}</title>
        <meta property="og:title" content={page.data.meta_title} />
        <meta property="og:url" content="https://www.blazedlabs.com" />
        <meta property="og:description" content="We are dedicated to using technology to empower our customers and to help them realize their full potential. We strive to create products and services that are reliable, secure and cost-effective, allowing our customers to get more out of their technology." />
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@BlazedLabs"/>
        <meta name="twitter:title" content="Blazed Labs"/>
        <meta name="twitter:description" content="We turn dreams into reality."/>
        <meta name="twitter:image" content="https://blazed.sirv.com/logo/Beaker-Dark.png?w=500&h=500"/>
        <meta name="twitter:image:alt" content="Photo by Erol Ahmed on Unsplash"/>
        <meta property="fb:app_id" content="503698127531557"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://blazed.sirv.com/logo/Beaker-Dark.png?w=500&h=500"/>
        <meta property="og:image:alt" content="Photo by Erol Ahmed on Unsplash"/>
        <meta property="og:site_name" content="Blazed Labs"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="article:author" content="Blazed Labs LLC"/>
        <meta itemprop="name" content="Blazed Labs"/>
        <meta itemprop="description" content="We turn dreams into reality."/>
        <meta itemprop="image" content="https://blazed.sirv.com/logo/Beaker-Dark.png?w=180&h=180"/>
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
