import { procedurePagePresentation } from '../procedurePagePresentation';
import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['asian-rhinoplasty-singapore'];

export const metadata: Metadata = {
  title: procedurePagePresentation['asian-rhinoplasty-singapore'].title,
  description: procedurePagePresentation['asian-rhinoplasty-singapore'].description,
  alternates: { canonical: '/asian-rhinoplasty-singapore' },
  openGraph: {
    title: article.title,
    description: procedurePagePresentation['asian-rhinoplasty-singapore'].description,
    url: '/asian-rhinoplasty-singapore',
    type: 'article'
  },
  keywords: article.keywords
};

export default function AsianRhinoplastySingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
