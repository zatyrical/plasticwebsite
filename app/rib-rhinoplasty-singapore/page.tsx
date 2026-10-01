import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['rib-rhinoplasty-singapore'];

export const metadata: Metadata = {
  title: 'Rib Rhinoplasty Singapore | Rib Cartilage Nose Surgery',
  description: article.description,
  alternates: { canonical: '/rib-rhinoplasty-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/rib-rhinoplasty-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function RibRhinoplastySingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
