import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['asian-rhinoplasty-singapore'];

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: '/asian-rhinoplasty-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/asian-rhinoplasty-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function AsianRhinoplastySingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
