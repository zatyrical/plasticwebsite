import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['trauma-lacerations-singapore'];

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: '/trauma-lacerations-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/trauma-lacerations-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function TraumaLacerationsSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
