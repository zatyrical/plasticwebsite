import { procedurePagePresentation } from '../procedurePagePresentation';
import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['asian-rhinoplasty-singapore'];
const heroImage = article.heroImage!;

export const metadata: Metadata = {
  title: procedurePagePresentation['asian-rhinoplasty-singapore'].title,
  description: procedurePagePresentation['asian-rhinoplasty-singapore'].description,
  alternates: { canonical: '/asian-rhinoplasty-singapore' },
  openGraph: {
    title: article.title,
    description: procedurePagePresentation['asian-rhinoplasty-singapore'].description,
    url: '/asian-rhinoplasty-singapore',
    type: 'article',
    images: [{ url: heroImage.src, alt: heroImage.alt }]
  },
  twitter: {
    card: 'summary_large_image',
    title: article.title,
    description: procedurePagePresentation['asian-rhinoplasty-singapore'].description,
    images: [heroImage.src]
  },
  keywords: article.keywords
};

export default function AsianRhinoplastySingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
