import type { MetadataRoute } from 'next';
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Blazed Labs',
    short_name: 'blazedlabs-com',
    description: 'Blazed is your Source for Innovative Solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#9d6565',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        src: '/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
  }
}