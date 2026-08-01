import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['lasers-injectables-singapore'];

export const metadata: Metadata = {
  title: article.title + ' | Dr Jeremy Sun',
  description: article.description,
  alternates: { canonical: '/lasers-injectables-singapore' },
  openGraph: {
    title: article.title + ' | Dr Jeremy Sun',
    description: article.description,
    url: '/lasers-injectables-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function LasersInjectablesSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
