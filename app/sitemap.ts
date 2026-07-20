import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.drjeremysun.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: `${baseUrl}/lymphedema-surgery-singapore`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/lymphovenous-bypass-lva-surgery-singapore`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7
    }
  ];
}
