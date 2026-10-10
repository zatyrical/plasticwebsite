import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['trauma-lacerations-singapore'];
const socialImage = '/images/reconstructive-tiles/trauma-lacerations.jpg';
const socialImageAlt = 'Illustrative face image representing trauma, laceration repair and scar care';

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: '/trauma-lacerations-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/trauma-lacerations-singapore',
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

export default function TraumaLacerationsSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
