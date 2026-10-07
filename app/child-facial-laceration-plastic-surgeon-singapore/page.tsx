import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['child-facial-laceration-plastic-surgeon-singapore'];
const heroImage = article.heroImage!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: '/child-facial-laceration-plastic-surgeon-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/child-facial-laceration-plastic-surgeon-singapore',
    type: 'article',
    images: [{ url: heroImage.src, alt: heroImage.alt }]
  },
  twitter: {
    card: 'summary_large_image',
    title: article.title,
    description: article.description,
    images: [heroImage.src]
  },
  keywords: article.keywords
};

export default function ChildFacialLacerationPlasticSurgeonSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
