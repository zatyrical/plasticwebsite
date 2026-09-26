import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['facial-laceration-repair-singapore'];

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: '/facial-laceration-repair-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/facial-laceration-repair-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function FacialLacerationRepairSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
