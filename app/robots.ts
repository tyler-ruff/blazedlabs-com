import type { MetadataRoute } from 'next';
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/*',
        '/success',
        '/*/search',
        '/blog/*'
      ],
    },
    sitemap: 'https://blazedlabs.com/sitemap.xml',
  }
}