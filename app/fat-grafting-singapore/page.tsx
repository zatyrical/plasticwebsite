import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['fat-grafting-singapore'];
const heroImage = article.heroImage!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: '/fat-grafting-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/fat-grafting-singapore',
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

export default function FatGraftingSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
