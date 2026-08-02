import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['body-contouring-liposuction-singapore'];

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: '/body-contouring-liposuction-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/body-contouring-liposuction-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function BodyContouringLiposuctionSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
