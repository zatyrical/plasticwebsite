import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['lower-limb-reconstruction-singapore'];

export const metadata: Metadata = {
  title: article.title + ' | Dr Jeremy Sun',
  description: article.description,
  alternates: { canonical: '/lower-limb-reconstruction-singapore' },
  openGraph: {
    title: article.title + ' | Dr Jeremy Sun',
    description: article.description,
    url: '/lower-limb-reconstruction-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function LowerLimbReconstructionSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
