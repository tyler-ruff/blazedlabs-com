import Head from "next/head";
import { PrismicText, PrismicRichText, PrismicLink, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";

import { dateFormatter } from "../../lib/dateFormatter";
import  readingTime  from "../../lib/readingTime";

const Article = ({ article, navigation, settings }) => {
  const date = prismicH.asDate(
    article.data.published_on
  );
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
          {prismicH.asText(article.data.title)} | Blog |{" "}
          {prismicH.asText(settings.data.siteTitle)}
        </title>
        <meta name="apple-mobile-web-app-title" content={settings.data.siteTitle}/>
        <meta name="application-name" content={settings.data.siteTitle}/>
        <meta name="theme-color" content="#2E3138"/>
        <link rel="icon" sizes="192x192" href="https://blazed.sirv.com/logo/Beaker-Dark.png?w=192&h=192"/>
        <link rel="apple-touch-icon" href="https://blazed.sirv.com/logo/Beaker-Dark.png?w=180&h=180"/>
        <link rel="apple-touch-startup-image" href="https://blazed.sirv.com/logo/Beaker-Dark.png?w=180&h=180"/>
      </Head>
      <div className=" text-center">
        <div className="text-sm breadcrumbs inline-flex">
            <ul>
                <li>
                    <PrismicLink href="/">
                        Home
                    </PrismicLink>
                </li> 
                <li>
                    <PrismicLink href="/blog">
                        Blog
                    </PrismicLink>
                </li> 
                <li>
                    View Post
                </li>
            </ul>
        </div>
      </div>
      <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8 dark:bg-gray-800 dark:text-gray-50">
            <div className="space-y-6">
                <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
                    <PrismicText field={article.data.title} />
                </h1>
                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
                    <div className="flex items-center md:space-x-2">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                        </svg>
                        <p className="text-sm select-none">
                            <time dateTime={date.toUTCString()}>
                                {dateFormatter.format(date)}
                            </time>
                            <span className="px-2">
                                &bull;
                            </span>
                            <span>
                                {readingTime(prismicH.asText(article.data.content))}
                            </span>
                        </p>
                    </div>
                    <p title="Category" className="select-none flex-shrink-0 mt-3 text-sm md:mt-0">
                        <span className="badge">
                            {article.data.category}
                        </span>
                    </p>
                </div>
            </div>
            <div className="divider"></div> 
            <div className="dark:text-gray-100">
                <PrismicRichText field={article.data.content} />
            </div>
        </article>
        <div>
            <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed dark:border-gray-400">

            </div>
            <div className="space-y-2">
                <h4 className="text-lg font-semibold">
                    Related posts
                </h4>
                <ul className="ml-4 space-y-1 list-disc">
                    <li>
                        <a rel="noopener noreferrer" href="#" className="hover:underline">Nunc id magna mollis</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#" className="hover:underline">Duis molestie, neque eget pretium lobortis</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#" className="hover:underline">Mauris nec urna volutpat, aliquam lectus sit amet</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </Layout>
  );
};

export default Article;

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });

  const article = await client.getByUID("blog_post", params.uid);
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
        article,
      navigation,
      settings,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const articles = await client.getAllByType("blog_post", { lang: "*" });

  return {
    paths: articles.map((article) => {
      return {
        params: { uid: article.uid }
      };
    }),
    fallback: false,
  };
}
