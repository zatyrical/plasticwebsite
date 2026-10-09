import type { MetadataRoute } from 'next';
import { procedureArticleList } from './procedureArticles';
import { procedurePagePresentation } from './procedurePagePresentation';

const baseUrl = 'https://www.drjeremysun.com';
const updatedAt = '2026-10-03';
const latestModifiedPaths = new Map([
  ['/plastic-surgery-overseas-safety-singapore', '2026-10-09'],
  ['/blog', '2026-10-09'],
  ['', '2026-10-09'],
  ['/aesthetic-surgery', '2026-10-07'],
  ['/reconstructive-surgery', '2026-10-07'],
  ['/breast-reconstruction-singapore', '2026-10-07'],
  ['/asian-eyelid-surgery-singapore', '2026-10-09'],
  ['/lymphedema-surgery-singapore', '2026-10-08'],
  ['/lymphovenous-bypass-lva-surgery-singapore', '2026-10-07'],
  ['/st-lukes-eldercare-symposium-lymphoedema-wound-care-2026', '2026-10-07'],
  ['/media', '2026-10-07'],
  ['/24-hour-rapid-recovery-breast-augmentation-singapore', '2026-10-09'],
  ['/asian-rhinoplasty-singapore', '2026-10-09'],
  ['/rib-rhinoplasty-singapore', '2026-10-09'],
  ['/breast-augmentation-singapore', '2026-10-09'],
  ['/body-contouring-liposuction-singapore', '2026-10-06'],
  ['/tummy-tuck-singapore', '2026-10-09'],
  ['/face-neck-lift-singapore', '2026-10-06'],
  ['/mommy-makeover-singapore', '2026-10-07'],
  ['/plastic-surgeon-singapore', '2026-10-07'],
  ['/publications', '2026-10-07'],
  ['/training-and-fellowships', '2026-10-04'],
  ['/eyebag-removal-lower-blepharoplasty-singapore', '2026-10-04'],
  ['/llms.txt', '2026-10-07'],
]);
const updatedPaths = new Set([
  '', '/aesthetic-surgery', '/reconstructive-surgery',
  '/asian-eyelid-surgery-singapore', '/eyebag-removal-lower-blepharoplasty-singapore',
  ...Object.keys(procedurePagePresentation).map((slug) => `/${slug}`)
]);

const coreRoutes = [
  { path: '/plastic-surgery-overseas-safety-singapore', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/plastic-surgeon-singapore', priority: 0.94, changeFrequency: 'monthly' as const },
  { path: '/how-to-choose-lymphedema-surgeon-singapore', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/journey-to-lymphedema-surgery-japan', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/aesthetic-surgery', priority: 0.86, changeFrequency: 'monthly' as const },
  { path: '/compression-foam-lymphatic-massage-after-liposuction', priority: 0.84, changeFrequency: 'monthly' as const },
  { path: '/breast-implant-illness-singapore-evidence', priority: 0.84, changeFrequency: 'monthly' as const },
  { path: '/breast-augmentation-singapore', priority: 0.94, changeFrequency: 'weekly' as const },
  { path: '/mommy-makeover-singapore', priority: 0.94, changeFrequency: 'weekly' as const },
  { path: '/tummy-tuck-singapore', priority: 0.94, changeFrequency: 'weekly' as const },
  { path: '/asian-rhinoplasty-singapore', priority: 0.94, changeFrequency: 'weekly' as const },
  { path: '/rib-rhinoplasty-singapore', priority: 0.94, changeFrequency: 'weekly' as const },
  { path: '/body-contouring-liposuction-singapore', priority: 0.94, changeFrequency: 'weekly' as const },
  { path: '/face-neck-lift-singapore', priority: 0.94, changeFrequency: 'weekly' as const },
  { path: '/24-hour-rapid-recovery-breast-augmentation-singapore', priority: 0.84, changeFrequency: 'monthly' as const },
  { path: '/reconstructive-surgery', priority: 0.86, changeFrequency: 'monthly' as const },
  { path: '/lymphedema-surgery-singapore', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/lymphovenous-bypass-lva-surgery-singapore', priority: 0.95, changeFrequency: 'weekly' as const },
  { path: '/breast-reconstruction-singapore', priority: 0.85, changeFrequency: 'monthly' as const },
  { path: '/asian-eyelid-surgery-singapore', priority: 0.85, changeFrequency: 'monthly' as const },
  { path: '/training-and-fellowships', priority: 0.75, changeFrequency: 'monthly' as const },
  { path: '/media', priority: 0.73, changeFrequency: 'monthly' as const },
  { path: '/st-lukes-eldercare-symposium-lymphoedema-wound-care-2026', priority: 0.71, changeFrequency: 'monthly' as const },
  { path: '/publications', priority: 0.72, changeFrequency: 'monthly' as const },
  { path: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/llms.txt', priority: 0.4, changeFrequency: 'monthly' as const }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const procedureRoutes = procedureArticleList.map((article) => ({
    url: `${baseUrl}/${article.slug}`,
    lastModified: latestModifiedPaths.get(`/${article.slug}`) ?? updatedAt,
    changeFrequency: 'monthly' as const,
    priority: article.backHref.includes('aesthetic') ? 0.82 : 0.8
  }));

  const routes: MetadataRoute.Sitemap = [
    ...coreRoutes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      ...(latestModifiedPaths.has(route.path)
        ? { lastModified: latestModifiedPaths.get(route.path) }
        : updatedPaths.has(route.path) ? { lastModified: updatedAt } : {}),
      changeFrequency: route.changeFrequency,
      priority: route.priority
    })),
    ...procedureRoutes
  ];

  return Array.from(new Map(routes.map((route) => [route.url, route])).values());
}
