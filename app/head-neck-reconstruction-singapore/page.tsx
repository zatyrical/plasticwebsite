import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['head-neck-reconstruction-singapore'];
const socialImage = '/images/reconstructive-tiles/head-neck-reconstruction.jpg';
const socialImageAlt = 'Illustrative face image representing head and neck reconstruction in Singapore';

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: '/head-neck-reconstruction-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/head-neck-reconstruction-singapore',
    type: 'article',
    images: [{ url: socialImage, width: 900, height: 900, alt: socialImageAlt }]
  },
  twitter: {
    card: 'summary_large_image',
    title: article.title,
    description: article.description,
    images: [socialImage]
  },
  keywords: article.keywords
};

export default function HeadNeckReconstructionSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
