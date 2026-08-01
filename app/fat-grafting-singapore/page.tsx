import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['fat-grafting-singapore'];

export const metadata: Metadata = {
  title: article.title + ' | Dr Jeremy Sun',
  description: article.description,
  alternates: { canonical: '/fat-grafting-singapore' },
  openGraph: {
    title: article.title + ' | Dr Jeremy Sun',
    description: article.description,
    url: '/fat-grafting-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function FatGraftingSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
