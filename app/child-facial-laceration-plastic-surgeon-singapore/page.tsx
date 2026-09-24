import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['child-facial-laceration-plastic-surgeon-singapore'];

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: '/child-facial-laceration-plastic-surgeon-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/child-facial-laceration-plastic-surgeon-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function ChildFacialLacerationPlasticSurgeonSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
