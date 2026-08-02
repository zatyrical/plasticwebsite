import type { Metadata } from 'next';
import Navigation from '../Navigation';
import { procedureArticleList } from '../procedureArticles';

const existingArticles = [
  {
    title: 'Lymphovenous bypass / LVA surgery in Singapore',
    href: '/lymphovenous-bypass-lva-surgery-singapore',
    category: 'LVA surgery',
    description: 'Patient information on suitability, imaging, recovery, cellulitis risk and compression after LVA.'
  },
  {
    title: 'Lymphedema surgery in Singapore',
    href: '/lymphedema-surgery-singapore',
    category: 'Lymphedema',
    description: 'Educational overview of lymphovenous bypass, assessment, infection risk and recovery.'
  },
  {
    title: 'Breast reconstruction in Singapore',
    href: '/breast-reconstruction-singapore',
    category: 'Breast reconstruction',
    description: 'Patient information on implant-based reconstruction, DIEP flap reconstruction, timing, recovery and risks.'
  },
  {
    title: 'Asian eyelid surgery in Singapore',
    href: '/asian-eyelid-surgery-singapore',
    category: 'Asian eyelid surgery',
    description: 'Patient information on double eyelid surgery, ptosis assessment, recovery, risks and revision eyelid surgery.'
  }
];

const newArticles = procedureArticleList.map((article) => ({
  title: article.title,
  href: `/${article.slug}`,
  category: article.eyebrow,
  description: article.lead
}));

const articles = [...existingArticles, ...newArticles];

export const metadata: Metadata = {
  title: 'Educational Articles',
  description: 'Patient education articles on aesthetic, reconstructive and lymphatic surgery by Dr Jeremy Sun, Plastic, Reconstructive and Aesthetic Surgeon in Singapore.',
  alternates: {
    canonical: '/blog'
  }
};

export default function BlogIndex() {
  return (
    <main className="article-page">
      <Navigation />
      <section className="article-hero">
        <div className="container article-hero-grid">
          <div>
            <div className="eyebrow">Patient education</div>
            <h1>Educational articles.</h1>
            <p className="lead">Procedure and condition information for patients considering aesthetic, reconstructive and lymphatic surgery in Singapore.</p>
          </div>
          <aside className="article-summary-card">
            <h2>Topics</h2>
            <ul>
              <li>Aesthetic surgery</li>
              <li>Reconstructive surgery</li>
              <li>Lymphatic surgery</li>
              <li>Recovery, risks and consultation planning</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section article-content">
        <div className="container">
          <p className="notice-text">These articles provide general medical information and do not replace consultation with a qualified medical practitioner. Suitability, risks, recovery and outcomes vary between individuals.</p>
          <div className="grid-3">
            {articles.map((article) => (
              <a className="card blog-card linked-card" href={article.href} key={article.href}>
                <small>{article.category}</small>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <span>Read page</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
