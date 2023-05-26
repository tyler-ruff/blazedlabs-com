import Head from "next/head";
import { PrismicText, PrismicLink, SliceZone, PrismicImage } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";

const Project = ({ project, navigation, settings }) => {
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
          {prismicH.asText(project.data.name)} | Projects |
          {prismicH.asText(settings.data.siteTitle)}
        </title>
        <meta name="apple-mobile-web-app-title" content={settings.data.siteTitle}/>
        <meta name="application-name" content={settings.data.siteTitle}/>
        <meta name="theme-color" content="#2E3138"/>
        <link rel="icon" sizes="192x192" href="https://blazed.sirv.com/logo/Beaker-Dark.png?w=192&h=192"/>
        <link rel="apple-touch-icon" href="https://blazed.sirv.com/logo/Beaker-Dark.png?w=180&h=180"/>
        <link rel="apple-touch-startup-image" href="https://blazed.sirv.com/logo/Beaker-Dark.png?w=180&h=180"/>
      </Head>
      <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
            <div className="text-sm breadcrumbs inline-flex">
                <ul>
                    <li>
                        <PrismicLink href="/">
                            Home
                        </PrismicLink>
                    </li> 
                    <li>
                        <PrismicLink href="/projects">
                            Projects
                        </PrismicLink>
                    </li> 
                    <li>
                        View Project
                    </li>
                </ul>
            </div>
        <article className="space-y-8 dark:bg-gray-800 dark:text-gray-50">
            <PrismicImage field={project.data.image} alt={project.data.name} />
            <div className="space-y-6">
                <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
                    <PrismicText field={project.data.name} />
                </h1>
                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
                    <div className="flex items-center md:space-x-2">
                        <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                        <p className="text-sm">Leroy Jenkins • July 19th, 2021</p>
                    </div>
                    <p className="flex-shrink-0 mt-3 text-sm md:mt-0">4 min read • 1,570 views</p>
                </div>
            </div>
            <div className="dark:text-gray-100">
                <p>
                    <PrismicText field={project.data.description} />
                </p>
            </div>
        </article>
        <div>
            <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed dark:border-gray-400">
                <PrismicLink target="repo" rel="noopener noreferrer" href={project.data.repo.url} className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900">
                    View Repo
                </PrismicLink>
                <PrismicLink target="demo" rel="noopener noreferrer" href={project.data.website.url} className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900">
                    View Demo
                </PrismicLink>
            </div>
            <div className="space-y-2">
                <h4 className="text-lg font-semibold">Related posts</h4>
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

export default Project;

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });

  const project = await client.getByUID("projects", params.uid);
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
      project,
      navigation,
      settings,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const projects = await client.getAllByType("projects", { lang: "*" });

  return {
    paths: projects.map((project) => {
      return {
        params: { uid: project.uid }
      };
    }),
    fallback: false,
  };
}
