import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['mommy-makeover-singapore'];

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: '/mommy-makeover-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/mommy-makeover-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function MommyMakeoverSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
