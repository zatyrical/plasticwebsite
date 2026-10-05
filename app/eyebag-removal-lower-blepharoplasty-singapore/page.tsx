import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['eyebag-removal-lower-blepharoplasty-singapore'];
const socialImage = '/images/orbital-fat-repositioning-surface-landmarks.webp';
const socialImageAlt = 'Educational illustration of eye-bag and tear-trough anatomy with orbital fat repositioning arrows';

export const metadata: Metadata = {
  title: 'Eyebag Removal & Lower Blepharoplasty Singapore',
  description: article.description,
  alternates: { canonical: '/eyebag-removal-lower-blepharoplasty-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/eyebag-removal-lower-blepharoplasty-singapore',
    type: 'article',
    images: [{ url: socialImage, alt: socialImageAlt }]
  },
  twitter: {
    card: 'summary_large_image',
    title: article.title,
    description: article.description,
    images: [socialImage]
  },
  keywords: article.keywords
};

export default function LowerBlepharoplastySingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
