import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['thread-lifting-singapore'];

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: '/thread-lifting-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/thread-lifting-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function ThreadLiftingSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
