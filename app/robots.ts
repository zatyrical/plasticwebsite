import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.drjeremysun.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/'
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'OAI-SearchBot', 'PerplexityBot', 'ClaudeBot', 'Claude-User', 'Google-Extended'],
        allow: '/'
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  };
}
