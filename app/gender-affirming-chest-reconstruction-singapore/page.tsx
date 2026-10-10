import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['gender-affirming-chest-reconstruction-singapore'];
const socialImage = '/images/reconstructive-tiles/gender-affirming-chest-reconstruction.jpg';
const socialImageAlt = 'Chest binder image representing gender-affirming chest reconstruction consultation in Singapore';

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: '/gender-affirming-chest-reconstruction-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/gender-affirming-chest-reconstruction-singapore',
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

export default function GenderAffirmingChestReconstructionSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
