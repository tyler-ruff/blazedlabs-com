import Head from "next/head";
import Script from "next/script";
import { useRouter } from 'next/router';

import * as prismicH from "@prismicio/helpers";

import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ navigation, settings, children }) => {
  const router = useRouter();
  const pageUrl = "https://blazedlabs.com" + router.asPath;
  return (
    <div id="Top" className="text-slate-800">
      <Head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-3CRR9C662E" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-3CRR9C662E');
          `}
        </Script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
        <meta name="google" content="nositelinkssearchbox"/>
        <meta name="robots" content="index,follow"/>
        <meta name="googlebot" content="index,follow"/>
        <meta name="apple-mobile-web-app-title" content={prismicH.asText(settings.data.siteTitle)}/>
        <meta name="application-name" content={prismicH.asText(settings.data.siteTitle)}/>
        <meta name="theme-color" content={settings.data.theme_color} />
        <link rel="icon" href="https://blazed.sirv.com/logo/Beaker-Dark.png?w=192&h=192"/>
        <link rel="apple-touch-icon" href="https://blazed.sirv.com/logo/Beaker-Dark.png?w=180&h=180"/>
        <link rel="apple-touch-startup-image" href="https://blazed.sirv.com/logo/Beaker-Dark.png?w=180&h=180"/>
        <link rel="me" href="mailto:hello@blazed.space"/>
        <link rel="author" href="https://blazed.company/"/>
        <link rel="publisher" href="https://blazed.xyz/"/>
        <meta property="fb:app_id" content="503698127531557"/>
        <meta property="og:url" content={pageUrl}/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://blazed.sirv.com/logo/Lockscreen-Beaker.png"/>
        <meta property="og:image:alt" content="We will constantly strive to innovate and stay ahead of the curve in the rapidly changing world of technology. We are dedicated to providing our customers with the best products and services available so that they can remain competitive and successful."/>
        <meta property="og:site_name" content={prismicH.asText(settings.data.siteTitle)}/>
        <meta property="og:locale" content="en_US"/>
        <meta property="article:author" content="Blazed Labs LLC"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@BlazedLabs"/>
        <meta name="twitter:creator" content="@TylerRuffDev"/>
        <meta name="twitter:url" content={pageUrl}/>
        <meta name="twitter:image" content="https://blazed.sirv.com/logo/Lockscreen-Beaker.png"/>
        <meta name="twitter:image:alt" content="We will constantly strive to innovate and stay ahead of the curve in the rapidly changing world of technology. We are dedicated to providing our customers with the best products and services available so that they can remain competitive and successful."/>
        <meta itemprop="image" content="https://blazed.sirv.com/logo/Lockscreen-Beaker.png"/>
      </Head>
      <Header navigation={navigation} settings={settings} />
      <main>{children}</main>
      <Footer settings={settings}></Footer>
    </div>
  );
};
