import Head from "next/head";
import { useRouter } from "next/router";
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
  const pageSize = 3;
  const totalPages = Math.ceil(blog.length / pageSize);
  const router = useRouter();
  let { page = 1 } = router.query;
  const blog_sliced = blog.slice((page*pageSize)-pageSize, page*pageSize);
  return (
    <Layout navigation={navigation} settings={settings}>
      <Head>
        <title>
          Browse Posts | Blog | {prismicH.asText(settings.data.siteTitle)}
        </title>
        <meta itemprop="name" content="Blazed Labs Blog."/>
        <meta itemprop="description" content="Blazed Labs company blog. Browse all posts."/>
        <meta property="og:title" content="Blazed Labs Blog."/>
        <meta name="description" content="Blazed Labs company blog. Browse all posts."/>
        <meta property="og:description" content="Blazed Labs company blog. Browse all posts."/>
        <meta name="twitter:title" content="Blazed Labs Blog."/>
        <meta name="twitter:description" content="Blazed Labs company blog. Browse all posts."/>
        <link rel="archives" href="https://blazedlabs.com/blog/"/>
      </Head>
      <div className="text-center pb-3">
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
      <hr />
      <p className="text-center py-5 text-gray-500 select-none">
        Showing {pageSize} of {blog.length} posts
      </p>
      <div className="p-5 lg:px-20 grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
        {blog_sliced.map(post => (
            <Article key={post.uid} article={post}/>
        ))}
      </div>
      <div className="py-10 text-center">
        <Pagination totalPages={totalPages} />
      </div>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  //const blog = await client.getAllByType("blog_post");
  const blog = await client.getAllByType("blog_post", {
    orderings: {
      field: "document.published_on",
      direction: "desc"
    },

  });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
      blog,
      navigation,
      settings,
    },
    revalidate: 10,
  };
}


