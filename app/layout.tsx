import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { NextAuthProvider, NextThemeProvider } from "./providers";

import Header from '@/components/header';
import BlzFooter from '@/components/footer';

import { config } from '@/config/site';

import './styles/globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: `%s | ${config.name}`,
    default: config.name, // a default is required when creating a template
  },
  applicationName: config.name,
  description: 'Main website of Blazed Labs LLC.',
  keywords: ['blazed', 'labs', 'software', 'solutions', 'company'],
  publisher: 'Blazed Labs LLC',
  icons: {
    icon: '/icons/favicon-32x32.png',
    shortcut: '/icons/mstile-150x150.png',
    apple: '/icons/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <NextThemeProvider>
            <header>
              <Header />
            </header>
            <main>
              {children}
            </main>
            <BlzFooter />
          </NextThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
