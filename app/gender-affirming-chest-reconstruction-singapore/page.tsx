import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['gender-affirming-chest-reconstruction-singapore'];

export const metadata: Metadata = {
  title: article.title + ' | Dr Jeremy Sun',
  description: article.description,
  alternates: { canonical: '/gender-affirming-chest-reconstruction-singapore' },
  openGraph: {
    title: article.title + ' | Dr Jeremy Sun',
    description: article.description,
    url: '/gender-affirming-chest-reconstruction-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function GenderAffirmingChestReconstructionSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
