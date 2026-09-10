import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['ftm-top-surgery-singapore'];

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: '/ftm-top-surgery-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/ftm-top-surgery-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function FtmTopSurgerySingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
