import Head from "next/head";
import { PrismicText, PrismicLink, PrismicImage, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";

import { Layout } from "../../components/Layout";
import { Pagination } from "../../components/Pagination";

const Projects = ({ projects, navigation, settings }) => {

  return (
    <Layout navigation={navigation} settings={settings}>
      <Head>
        <title>
          Browse Projects | Projects | {prismicH.asText(settings.data.siteTitle)}
        </title>
        <meta itemprop="name" content="Blazed Labs Blog."/>
        <meta itemprop="description" content="Blazed Labs company projects, view our active projects."/>
        <meta property="og:title" content="Blazed Labs Blog."/>
        <meta name="description" content="Blazed Labs company projects, view our active projects."/>
        <meta property="og:description" content="Blazed Labs company projects, view our active projects."/>
        <meta name="twitter:title" content="Blazed Labs Blog."/>
        <meta name="twitter:description" content="Blazed Labs company projects, view our active projects."/>
        <link rel="archives" href="https://blazedlabs.com/projects/"/>
      </Head>
      <div className="text-center">
        <h2 className="text-3xl">
            Browse Projects
        </h2>
        <div className="text-sm breadcrumbs inline-flex">
            <ul>
                <li>
                    <PrismicLink href="/">
                        Home
                    </PrismicLink>
                </li> 
                <li>
                    Projects
                </li> 
            </ul>
        </div>
      </div>
      <div className="p-5 lg:px-20 grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
        {projects.map(project => (
            <div key={project.uid}>
                <a href={"/projects/" + project.uid} className="block group">
                <PrismicImage field={project.data.image} alt={project.data.name} />
                    <div className="mt-3">
                        <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                            <PrismicText field={project.data.name} />
                        </h3>
                        <p className="mt-1.5 max-w-[40ch] text-xs text-gray-500">
                            <PrismicText field={project.data.description} />
                        </p>
                    </div>
                </a>
            </div>
        ))}
      </div>
      <div className="py-10 text-center">
        <Pagination />
      </div>
    </Layout>
  );
};

export default Projects;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const projects = await client.getAllByType("projects");
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
      projects,
      navigation,
      settings,
    },
    revalidate: 10,
  };
}


