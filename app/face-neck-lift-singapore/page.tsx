import { procedurePagePresentation } from '../procedurePagePresentation';
import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['face-neck-lift-singapore'];

export const metadata: Metadata = {
  title: procedurePagePresentation['face-neck-lift-singapore'].title,
  description: procedurePagePresentation['face-neck-lift-singapore'].description,
  alternates: { canonical: '/face-neck-lift-singapore' },
  openGraph: {
    title: article.title,
    description: procedurePagePresentation['face-neck-lift-singapore'].description,
    url: '/face-neck-lift-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function FaceNeckLiftSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
