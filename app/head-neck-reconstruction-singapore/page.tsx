import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['head-neck-reconstruction-singapore'];

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: '/head-neck-reconstruction-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/head-neck-reconstruction-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function HeadNeckReconstructionSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
