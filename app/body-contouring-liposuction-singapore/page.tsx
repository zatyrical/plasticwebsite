import { procedurePagePresentation } from '../procedurePagePresentation';
import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['body-contouring-liposuction-singapore'];

export const metadata: Metadata = {
  title: article.title,
  description: procedurePagePresentation['body-contouring-liposuction-singapore'].description,
  alternates: { canonical: '/body-contouring-liposuction-singapore' },
  openGraph: {
    title: article.title,
    description: procedurePagePresentation['body-contouring-liposuction-singapore'].description,
    url: '/body-contouring-liposuction-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function BodyContouringLiposuctionSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
