import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://blazedlabs.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1
        },
        {
            url: 'https://blazedlabs.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9
        },
        {
            url: 'https://blazedlabs.com/solutions',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'https://blazedlabs.com/products',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7
        },
        {
            url: 'https://blazedlabs.com/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6
        },
        {
            url: 'https://blazedlabs.com/terms',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5
        },
        {
            url: 'https://blazedlabs.com/terms/sms',
            lastModified: new Date(),
            changeFrequency: 'yearly'
        },
        {
            url: 'https://blazedlabs.com/terms/use',
            lastModified: new Date(),
            changeFrequency: 'yearly'
        },
        {
            url: 'https://blazedlabs.com/cookies',
            lastModified: new Date(),
            changeFrequency: 'yearly'
        },
        {
            url: 'https://blazedlabs.com/comments',
            lastModified: new Date(),
            changeFrequency: 'yearly'
        },
        {
            url: 'https://blazedlabs.com/disclaimer',
            lastModified: new Date(),
            changeFrequency: 'yearly'
        },
        {
            url: 'https://blazedlabs.com/dmca',
            lastModified: new Date(),
            changeFrequency: 'yearly'
        },
        {
            url: 'https://blazedlabs.com/privacy',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.4
        },
        {
            url: 'https://blazedlabs.com/faq',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3
        },
        {
            url: 'https://blazedlabs.com/contact',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.2
        },
        {
            url: 'https://blazedlabs.com/about/data-security',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.1
        },
        {
            url: 'https://blazedlabs.com/humans',
            lastModified: new Date(),
            changeFrequency: 'yearly'
        },
        {
            url: 'https://blazedlabs.com/brand',
            lastModified: new Date(),
            changeFrequency: 'yearly'
        },
        {
            url: 'https://blazedlabs.com/license',
            lastModified: new Date(),
            changeFrequency: 'yearly'
        }
    ]
}