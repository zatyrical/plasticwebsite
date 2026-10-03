import { procedurePagePresentation } from '../procedurePagePresentation';
import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['breast-augmentation-singapore'];

export const metadata: Metadata = {
  title: procedurePagePresentation['breast-augmentation-singapore'].title,
  description: procedurePagePresentation['breast-augmentation-singapore'].description,
  alternates: { canonical: '/breast-augmentation-singapore' },
  openGraph: {
    title: article.title,
    description: procedurePagePresentation['breast-augmentation-singapore'].description,
    url: '/breast-augmentation-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function BreastAugmentationSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
