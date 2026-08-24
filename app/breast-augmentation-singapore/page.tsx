import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['breast-augmentation-singapore'];

export const metadata: Metadata = {
  title: `${article.title} | Breast Implants & Aesthetic Breast Surgery`,
  description: article.description,
  alternates: { canonical: '/breast-augmentation-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/breast-augmentation-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function BreastAugmentationSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
