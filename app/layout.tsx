import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import { config } from '@/config/app';
import { Providers } from './providers';

import Header from '@/components/header';
import Footer from '@/components/footer';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: `%s | ${config.name}`,
    default: config.name, 
  },
  applicationName: config.name,
  description: config.description,
  keywords: ['blazed', 'labs', 'software', 'solutions', 'company'],
  publisher: 'Blazed Labs LLC',
  icons: {
    icon: [
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png'},
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png'},
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png'}
    ],
    shortcut: '/icons/mstile-150x150.png',
    apple: [
      { url: '/icons/apple-touch-icon.png', type: 'image/png' },
      { url: '/icons/apple-touch-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/icons/apple-touch-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/icons/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/icons/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/icons/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icons/safari-pinned-tab.svg",
        color: "#992323"
      },
      {
        rel: "shortcut icon",
        url: "/favicon.ico"
      }
    ]
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" data-theme="blz" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main role="main" className="bg-white dark:bg-gray-900">
              {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
