import { procedurePagePresentation } from '../procedurePagePresentation';
import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['breast-augmentation-singapore'];
const heroImage = article.heroImage!;

export const metadata: Metadata = {
  title: procedurePagePresentation['breast-augmentation-singapore'].title,
  description: procedurePagePresentation['breast-augmentation-singapore'].description,
  alternates: { canonical: '/breast-augmentation-singapore' },
  openGraph: {
    title: article.title,
    description: procedurePagePresentation['breast-augmentation-singapore'].description,
    url: '/breast-augmentation-singapore',
    type: 'article',
    images: [{ url: heroImage.src, alt: heroImage.alt }]
  },
  twitter: {
    card: 'summary_large_image',
    title: article.title,
    description: procedurePagePresentation['breast-augmentation-singapore'].description,
    images: [heroImage.src]
  },
  keywords: article.keywords
};

export default function BreastAugmentationSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
