import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['breast-aesthetic-surgery-singapore'];
const heroImage = article.heroImage!;

export const metadata: Metadata = {
  title: 'Breast Aesthetic Surgery Singapore',
  description: article.description,
  alternates: { canonical: '/breast-aesthetic-surgery-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/breast-aesthetic-surgery-singapore',
    type: 'article',
    images: [{ url: heroImage.src, alt: heroImage.alt }]
  },
  twitter: {
    card: 'summary_large_image',
    title: article.title,
    description: article.description,
    images: [heroImage.src]
  },
  keywords: article.keywords
};

export default function BreastAestheticSurgerySingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
