import { procedurePagePresentation } from '../procedurePagePresentation';
import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['face-neck-lift-singapore'];
const heroImage = article.heroImage!;

export const metadata: Metadata = {
  title: procedurePagePresentation['face-neck-lift-singapore'].title,
  description: procedurePagePresentation['face-neck-lift-singapore'].description,
  alternates: { canonical: '/face-neck-lift-singapore' },
  openGraph: {
    title: article.title,
    description: procedurePagePresentation['face-neck-lift-singapore'].description,
    url: '/face-neck-lift-singapore',
    type: 'article',
    images: [{ url: heroImage.src, alt: heroImage.alt }]
  },
  twitter: {
    card: 'summary_large_image',
    title: article.title,
    description: procedurePagePresentation['face-neck-lift-singapore'].description,
    images: [heroImage.src]
  },
  keywords: article.keywords
};

export default function FaceNeckLiftSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
