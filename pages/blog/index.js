import Head from "next/head";
import { useState, useEffect } from "react";
import { PrismicText, PrismicLink, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";

import { Layout } from "../../components/Layout";
import { Article } from "../../components/Article";
import { Pagination } from "../../components/Pagination";

const Blog = ({ blog, navigation, settings }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null; // return this null to avoid hydration errors
  }
  return (
    <Layout navigation={navigation} settings={settings}>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
        <meta name="google" content="nositelinkssearchbox"/>
        <meta name="robots" content="index,follow"/>
        <meta name="googlebot" content="index,follow"/>
        <title>
          Browse Posts | Blog |{" "}
          {prismicH.asText(settings.data.siteTitle)}
        </title>
        <meta name="apple-mobile-web-app-title" content={settings.data.siteTitle}/>
        <meta name="application-name" content={settings.data.siteTitle}/>
        <meta name="theme-color" content="#2E3138"/>
        <link rel="icon" sizes="192x192" href="https://blazed.sirv.com/logo/Beaker-Dark.png?w=192&h=192"/>
        <link rel="apple-touch-icon" href="https://blazed.sirv.com/logo/Beaker-Dark.png?w=180&h=180"/>
        <link rel="apple-touch-startup-image" href="https://blazed.sirv.com/logo/Beaker-Dark.png?w=180&h=180"/>
      </Head>
      <div className="text-center">
        <h2 className="text-3xl">
            Browse Blog
        </h2>
        <div className="text-sm breadcrumbs inline-flex">
            <ul>
                <li>
                    <PrismicLink href="/">
                        Home
                    </PrismicLink>
                </li> 
                <li>
                    Blog
                </li> 
            </ul>
        </div>
      </div>
      <div className="p-5 lg:px-20 grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
        {blog.map(post => (
            <Article key={post.uid} article={post}/>
        ))}
      </div>
      <div className="py-10 text-center">
        <Pagination />
      </div>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const blog = await client.getAllByType("blog_post");
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
      blog,
      navigation,
      settings,
    },
  };
}


