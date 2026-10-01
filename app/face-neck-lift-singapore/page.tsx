import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['face-neck-lift-singapore'];

export const metadata: Metadata = {
  title: 'Facelift & Neck Lift Singapore | Cost, Recovery & Surgery',
  description: article.description,
  alternates: { canonical: '/face-neck-lift-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/face-neck-lift-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function FaceNeckLiftSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
