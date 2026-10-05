import { procedurePagePresentation } from '../procedurePagePresentation';
import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['body-contouring-liposuction-singapore'];
const heroImage = article.heroImage!;

export const metadata: Metadata = {
  title: procedurePagePresentation['body-contouring-liposuction-singapore'].title,
  description: procedurePagePresentation['body-contouring-liposuction-singapore'].description,
  alternates: { canonical: '/body-contouring-liposuction-singapore' },
  openGraph: {
    title: article.title,
    description: procedurePagePresentation['body-contouring-liposuction-singapore'].description,
    url: '/body-contouring-liposuction-singapore',
    type: 'article',
    images: [{ url: heroImage.src, alt: heroImage.alt }]
  },
  twitter: {
    card: 'summary_large_image',
    title: article.title,
    description: procedurePagePresentation['body-contouring-liposuction-singapore'].description,
    images: [heroImage.src]
  },
  keywords: article.keywords
};

export default function BodyContouringLiposuctionSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
