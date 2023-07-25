import Head from "next/head";
import { useState, useEffect } from "react";
import { PrismicText, PrismicRichText, PrismicLink, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { Layout } from "../../components/Layout";

import { dateFormatter } from "../../lib/dateFormatter";
import  readingTime  from "../../lib/readingTime";
import { getExcerpt } from "../../lib/getExcerpt";

const Article = ({ article, navigation, settings }) => {
  const [mounted, setMounted] = useState(false);
  const date = prismicH.asDate(
    article.data.published_on
  );
  const excerpt = getExcerpt(prismicH.asText(article.data.content));
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null; // return this null to avoid hydration errors
  }
  const schema = {
    "@context": "https://schema.org",
    "type": "BlogPosting",
    "headline": prismicH.asText(article.data.title),
    "datePublished": article.data.published_on,
    "genre": article.data.category,
    "text": excerpt,
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
          {prismicH.asText(article.data.title)} | Blog | {prismicH.asText(settings.data.siteTitle)}
        </title>
        <meta itemprop="name" content={prismicH.asText(article.data.title)}/>
        <meta itemprop="description" content={excerpt}/>
        <meta property="og:title" content={prismicH.asText(article.data.title)}/>
        <meta name="description" content={excerpt}/>
        <meta property="og:description" content={excerpt}/>
        <meta name="twitter:title" content={prismicH.asText(article.data.title)}/>
        <meta name="twitter:description" content={excerpt}/>
        <link rel="archives" href="https://blazedlabs.com/blog/"/>
        <link rel="index" href="https://blazedlabs.com/blog/"/>
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
        <article className="space-y-8 dark:text-gray-50">
            <div className="space-y-6">
                <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
                    <PrismicText field={article.data.title} />
                </h1>
                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
                    <div className="flex items-center md:space-x-2">
                        <svg className="w-4 h-4 dark:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                        </svg>
                        <p className="text-sm select-none pl-1">
                            <time>
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
    revalidate: 10,
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
