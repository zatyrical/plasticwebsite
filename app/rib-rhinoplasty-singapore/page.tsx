import { procedurePagePresentation } from '../procedurePagePresentation';
import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['rib-rhinoplasty-singapore'];
const heroImage = article.heroImage!;

export const metadata: Metadata = {
  title: procedurePagePresentation['rib-rhinoplasty-singapore'].title,
  description: procedurePagePresentation['rib-rhinoplasty-singapore'].description,
  alternates: { canonical: '/rib-rhinoplasty-singapore' },
  openGraph: {
    title: article.title,
    description: procedurePagePresentation['rib-rhinoplasty-singapore'].description,
    url: '/rib-rhinoplasty-singapore',
    type: 'article',
    images: [{ url: heroImage.src, alt: heroImage.alt }]
  },
  twitter: {
    card: 'summary_large_image',
    title: article.title,
    description: procedurePagePresentation['rib-rhinoplasty-singapore'].description,
    images: [heroImage.src]
  },
  keywords: article.keywords
};

export default function RibRhinoplastySingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
