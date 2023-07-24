import Head from "next/head";
import { useRouter } from 'next/router';

import { useState, useEffect } from "react";

import * as prismicH from "@prismicio/helpers";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { NextSeo } from "next-seo";

export const Layout = ({ navigation, settings, children }) => {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const router = useRouter();

  const pageUrl = router.pathname;
  const siteTitle = prismicH.asText(settings.data.siteTitle);
  const siteDesc = "Main website for Blazed Labs."
  const titleTemplate = `${siteTitle} | %s`;
  const twitterHandle = "@BlazedLabs";
  const favicon = "https://blazed.sirv.com/logo/Beaker-Dark.png";

  return (
    <>
      <NextSeo
        titleTemplate={titleTemplate}
        title="Blazed Labs"
        canonical={pageUrl}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: pageUrl,
          title: "Blazed Labs",
          description: siteDesc,
          images: [
            {
              url: "https://blazed.sirv.com/logo/Lockscreen-Beaker.png?w=1200&h=630",
              width: 1200,
              height: 630,
              alt: "We turn Dreams into Reality."
            },
          ],
          siteName: "Blazed Labs"
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
          }
        ]}
        additionalLinkTags={[
          {
            rel: "icon",
            href: `${favicon}?w=192&h=192`
          },
          {
            rel: "apple-touch-icon",
            href: `${favicon}?w=180&h=180`
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
