import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['breast-aesthetic-surgery-singapore'];

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: '/breast-aesthetic-surgery-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/breast-aesthetic-surgery-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function BreastAestheticSurgerySingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
