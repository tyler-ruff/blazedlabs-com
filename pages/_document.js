import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html suppressHydrationWarning>
      <Head>
        <link rel="dns-prefetch" href="//blazed.sirv.com/" />
        <link rel="preconnect" href="https://blazed.sirv.com/" />
        <link rel="dns-prefetch" href="//static.cdn.prismic.io/" />
        <link rel="preconnect" href="https://static.cdn.prismic.io/" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="author" href="https://blazedlabs.com/humans.txt"/>
      </Head>
      <body className="overflow-x-hidden antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
