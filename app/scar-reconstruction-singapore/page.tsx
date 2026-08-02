import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['scar-reconstruction-singapore'];

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: '/scar-reconstruction-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/scar-reconstruction-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function ScarReconstructionSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
