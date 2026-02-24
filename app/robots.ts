import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/private/'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
            },
        ],
        sitemap: 'https://altamentis.in/sitemap.xml',
        host: 'https://altamentis.in',
    };
}
