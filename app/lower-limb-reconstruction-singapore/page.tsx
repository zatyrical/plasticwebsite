import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['lower-limb-reconstruction-singapore'];
const socialImage = '/images/reconstructive-tiles/lower-limb-reconstruction.jpg';
const socialImageAlt = 'Illustrative leg image representing lower limb reconstruction in Singapore';

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: '/lower-limb-reconstruction-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/lower-limb-reconstruction-singapore',
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

export default function LowerLimbReconstructionSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
