import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['scar-reconstruction-singapore'];
const socialImage = '/images/reconstructive-tiles/scar-reconstruction.jpg';
const socialImageAlt = 'Keloid scar image representing scar reconstruction and revision';

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: '/scar-reconstruction-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/scar-reconstruction-singapore',
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

export default function ScarReconstructionSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
