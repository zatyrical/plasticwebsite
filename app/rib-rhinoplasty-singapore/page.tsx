import { procedurePagePresentation } from '../procedurePagePresentation';
import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['rib-rhinoplasty-singapore'];

export const metadata: Metadata = {
  title: procedurePagePresentation['rib-rhinoplasty-singapore'].title,
  description: procedurePagePresentation['rib-rhinoplasty-singapore'].description,
  alternates: { canonical: '/rib-rhinoplasty-singapore' },
  openGraph: {
    title: article.title,
    description: procedurePagePresentation['rib-rhinoplasty-singapore'].description,
    url: '/rib-rhinoplasty-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function RibRhinoplastySingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
