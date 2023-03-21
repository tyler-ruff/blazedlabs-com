import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="dns-prefetch" href="//blazed.sirv.com/" />
        <link rel="preconnect" href="https://blazed.sirv.com/" />
        <link rel="icon" sizes="192x192" href="https://blazed.sirv.com/logo/Beaker-Dark.png?w=192&h=192"/>
        <link rel="apple-touch-icon" href="https://blazed.sirv.com/logo/Beaker-Dark.png?w=180&h=180"/>
        <link rel="apple-touch-startup-image" href="https://blazed.sirv.com/logo/Beaker-Dark.png?w=180&h=180"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="theme-color" content="#2E3138"/>
        <meta name="application-name" content="Blazed Labs"/>
        <meta name="apple-mobile-web-app-title" content="Blazed Labs"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
        <meta name="google" content="nositelinkssearchbox"/>
        <meta name="robots" content="index,follow"/>
        <meta name="googlebot" content="index,follow"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@BlazedLabs"/>
        <meta name="twitter:title" content="Blazed Labs"/>
        <meta name="twitter:description" content="We turn dreams into reality."/>
        <meta name="twitter:image" content="https://blazed.sirv.com/logo/Beaker-Dark.png?w=500&h=500"/>
        <meta name="twitter:image:alt" content="Photo by Erol Ahmed on Unsplash"/>
        <meta property="fb:app_id" content="503698127531557"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Blazed Labs"/>
        <meta property="og:image" content="https://blazed.sirv.com/logo/Beaker-Dark.png?w=500&h=500"/>
        <meta property="og:image:alt" content="Photo by Erol Ahmed on Unsplash"/>
        <meta property="og:description" content="We turn dreams into reality."/>
        <meta property="og:site_name" content="Blazed Labs"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="article:author" content="Blazed Labs LLC"/>
        <meta itemprop="name" content="Blazed Labs"/>
        <meta itemprop="description" content="We turn dreams into reality."/>
        <meta itemprop="image" content="https://blazed.sirv.com/logo/Beaker-Dark.png?w=180&h=180"/>
      </Head>
      <body className="overflow-x-hidden antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
