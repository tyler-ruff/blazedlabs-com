import Head from "next/head";

import { useState, useEffect } from "react";

import * as prismicH from "@prismicio/helpers";

import { Header } from "./Header";
import { Footer } from "./Footer";

import { NextSeo } from "next-seo";

export const Layout = ({ navigation, settings, children }) => {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    // Register workbox for PWA
    if(process.env.NODE_ENV !== "development"){
      window.workbox.register();
    }
    setDomLoaded(true);
  }, []);

  const baseUrl = process.env.SITE_URL;
  const siteTitle = prismicH.asText(settings.data.siteTitle);
  const siteDesc = "Main website for Blazed Labs."
  const titleTemplate = `${siteTitle} | %s`;
  const twitterHandle = "@BlazedLabs";
  //const favicon = "https://blazed.sirv.com/logo/Beaker-Dark.png";
  
  return (
    <>
      <NextSeo
        titleTemplate={titleTemplate}
        title={siteTitle}
        openGraph={{
          type: "website",
          locale: "en_US",
          title: siteTitle,
          description: siteDesc,
          images: [
            {
              url: "https://blazed.sirv.com/logo/Lockscreen-Beaker.png?w=1200&h=630",
              width: 1200,
              height: 630,
              alt: "We turn Dreams into Reality."
            },
          ],
          siteName: siteTitle
        }}
        twitter={{
          handle: twitterHandle,
          site: twitterHandle,
          cardType: "summary_large_image"
        }}
        additionalMetaTags={[
          {
            name: "theme-color",
            content: settings.data.theme_color
          },
          {
            name: "apple-mobile-web-app-title",
            content: siteTitle
          },
          {
            name: "application-name",
            content: siteTitle
          },
          {
            name: "msapplication-TileColor",
            content: "#b91d47"
          },
          {
            name: "msapplication-TileImage",
            content: `${baseUrl}icons/mstile-144x144.png`
          },
          {
            name: "msapplication-config",
            content: `${baseUrl}browserconfig.xml`
          },
          {
            name: "mobile-web-app-capable",
            content: "yes"
          },
          {
            name: "apple-mobile-web-app-capable",
            content: "yes"
          },
          {
            name: "robots",
            content: "index,follow"
          },
          {
            name: "googlebot",
            content: "index,follow"
          },
          {
            name: "norton-safeweb-site-verification",
            content: "9t3044tfylil9y5gann6iwirsri30cdy7pa819q2cwg82r-8gc3h64xtzwvdcj744nrrg0yzhnqetwo-ryzn2gryr6h6v785f2kjothp5j9d3a1np4atkh46bj7hetvx"
          }
        ]}
        additionalLinkTags={[
          {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: `${baseUrl}icons/apple-touch-icon.png`
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: `${baseUrl}icons/favicon-32x32.png`
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: `${baseUrl}icons/favicon-16x16.png`
          },
          {
            rel: "manifest",
            href: `${baseUrl}manifest.json`
          },
          {
            rel: "mask-icon",
            href: `${baseUrl}icons/safari-pinned-tab.svg`,
            color: "#992323"
          },
          {
            rel: "shortcut icon",
            href: `${baseUrl}icons/favicon.ico`
          }
        ]}
        />
      { domLoaded && (
        <div id="Top">
          <Head>

          </Head>
          <Header navigation={navigation} settings={settings} />
          <main>
            {children}
          </main>
          <Footer settings={settings} />
        </div>
      )}
    </>
  );
};
