import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['eyebag-removal-lower-blepharoplasty-singapore'];

export const metadata: Metadata = {
  title: 'Eyebag Removal & Lower Blepharoplasty Singapore',
  description: article.description,
  alternates: { canonical: '/eyebag-removal-lower-blepharoplasty-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/eyebag-removal-lower-blepharoplasty-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function LowerBlepharoplastySingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
