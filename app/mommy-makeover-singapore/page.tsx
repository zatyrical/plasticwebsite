import type { Metadata } from 'next';
import ProcedureArticlePage from '../ProcedureArticle';
import { procedureArticles } from '../procedureArticles';

const article = procedureArticles['mommy-makeover-singapore'];
const heroImage = article.heroImage!;

export const metadata: Metadata = {
  title: 'Mommy / Mummy Makeover Singapore | Cost, Tummy Tuck & Breast Surgery',
  description: article.description,
  alternates: { canonical: '/mommy-makeover-singapore' },
  openGraph: {
    title: article.title,
    description: article.description,
    url: '/mommy-makeover-singapore',
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

export default function MommyMakeoverSingaporePage() {
  return <ProcedureArticlePage article={article} />;
}
