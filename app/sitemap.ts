import type { MetadataRoute } from 'next';
import { procedureArticleList } from './procedureArticles';

const baseUrl = 'https://www.drjeremysun.com';

const coreRoutes = [
  { path: '', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/plastic-surgeon-singapore', priority: 0.94, changeFrequency: 'monthly' as const },
  { path: '/top-plastic-surgeon-singapore', priority: 0.93, changeFrequency: 'monthly' as const },
  { path: '/how-to-choose-lymphedema-surgeon-singapore', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/journey-to-lymphedema-surgery-japan', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/aesthetic-surgery', priority: 0.86, changeFrequency: 'monthly' as const },
  { path: '/breast-implant-illness-singapore-evidence', priority: 0.84, changeFrequency: 'monthly' as const },
  { path: '/24-hour-rapid-recovery-breast-augmentation-singapore', priority: 0.84, changeFrequency: 'monthly' as const },
  { path: '/reconstructive-surgery', priority: 0.86, changeFrequency: 'monthly' as const },
  { path: '/lymphedema-surgery-singapore', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/lymphovenous-bypass-lva-surgery-singapore', priority: 0.85, changeFrequency: 'monthly' as const },
  { path: '/breast-reconstruction-singapore', priority: 0.85, changeFrequency: 'monthly' as const },
  { path: '/asian-eyelid-surgery-singapore', priority: 0.85, changeFrequency: 'monthly' as const },
  { path: '/training-and-fellowships', priority: 0.75, changeFrequency: 'monthly' as const },
  { path: '/media', priority: 0.73, changeFrequency: 'monthly' as const },
  { path: '/publications', priority: 0.72, changeFrequency: 'monthly' as const },
  { path: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/llms.txt', priority: 0.4, changeFrequency: 'monthly' as const }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const procedureRoutes = procedureArticleList.map((article) => ({
    url: `${baseUrl}/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: article.backHref.includes('aesthetic') ? 0.82 : 0.8
  }));

  return [
    ...coreRoutes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority
    })),
    ...procedureRoutes
  ];
}
