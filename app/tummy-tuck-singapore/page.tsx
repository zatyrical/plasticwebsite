import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['tummy-tuck-singapore'];

export const metadata: Metadata = {
  title: `${article.title} | Abdominoplasty & Diastasis Repair`,
  description: article.description,
  alternates: { canonical: '/tummy-tuck-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/tummy-tuck-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function TummyTuckSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
