import type { Metadata } from 'next';
import { procedureArticleList } from '../procedureArticles';

const existingArticles = [
  {
    title: 'Thinking of Plastic Surgery in Korea? Read This Before You Book',
    href: '/plastic-surgery-overseas-safety-singapore',
    category: 'Overseas surgery planning',
    description: 'Comparing overseas clinics? Check surgeon credentials, complete costs, anaesthesia arrangements and follow-up after returning to Singapore.'
  },
  {
    title: 'Compression Garments, Foam and Lymphatic Massage After Liposuction',
    href: '/compression-foam-lymphatic-massage-after-liposuction',
    category: 'Liposuction recovery',
    description: 'A patient guide to compression garments, foam padding, short-stretch bandages and gentle lymphatic drainage massage after liposuction.'
  },
  {
    title: 'Breast Implant Illness: Is It Real? What the Evidence Says',
    href: '/breast-implant-illness-singapore-evidence',
    category: 'Breast implant safety',
    description: 'A balanced guide to BII symptoms, regulator safety signals, explantation outcomes and what remains scientifically uncertain.'
  },
  {
    title: '24-hour rapid recovery breast augmentation in Singapore',
    href: '/24-hour-rapid-recovery-breast-augmentation-singapore',
    category: 'Breast augmentation',
    description: 'A patient guide to rapid recovery breast augmentation principles, their published origins, safety, suitability and realistic limitations.'
  },
  {
    title: 'Why I trained in lymphedema surgery in Japan',
    href: '/journey-to-lymphedema-surgery-japan',
    category: 'Lymphedema training',
    description: 'Dr Jeremy Sun’s evolution from clinical skepticism to dedicated HMDP fellowship training in lymphoedema management and lymphatic surgery in Japan.'
  },
  {
    title: 'Choosing a lymphedema surgeon in Singapore',
    href: '/how-to-choose-lymphedema-surgeon-singapore',
    category: 'Lymphedema',
    description: 'Questions patients can ask about dedicated training, ICG lymphography, ultrasound localisation and treatment planning.'
  },
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
  },
  openGraph: {
    title: 'Plastic Surgery Patient Education | Dr Jeremy Sun',
    description: 'Browse patient guides on aesthetic, reconstructive and lymphatic surgery, including suitability, recovery, risks and consultation planning.',
    url: '/blog',
    type: 'website',
    images: [
      {
        url: '/images/dr-jeremy-sun-surgery.jpg',
        width: 1280,
        height: 1600,
        alt: 'Dr Jeremy Sun operating in a surgical theatre'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plastic Surgery Patient Education | Dr Jeremy Sun',
    description: 'Browse patient guides on aesthetic, reconstructive and lymphatic surgery, including suitability, recovery, risks and consultation planning.',
    images: ['/images/dr-jeremy-sun-surgery.jpg']
  }
};

const pageUrl = 'https://www.drjeremysun.com/blog';
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${pageUrl}#webpage`,
  url: pageUrl,
  name: 'Plastic Surgery Patient Education',
  description: metadata.description,
  inLanguage: 'en-SG',
  dateModified: '2026-10-13',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: articles.map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: article.title,
      url: `https://www.drjeremysun.com${article.href}`
    }))
  }
};

export default function BlogIndex() {
  return (
    <main className="article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="article-hero">
        <div className="container article-hero-grid">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>Educational articles</span></nav>
            <div className="eyebrow">Patient education</div>
            <h1>Educational articles.</h1>
            <p className="lead">Procedure and condition information for patients considering aesthetic, reconstructive and lymphatic surgery in Singapore.</p>
          </div>
          <aside className="article-summary-card">
            <h2>Topics</h2>
            <ul>
              <li><a href="/aesthetic-surgery">Aesthetic surgery</a></li>
              <li><a href="/reconstructive-surgery">Reconstructive surgery</a></li>
              <li><a href="/lymphedema-surgery-singapore">Lymphatic surgery</a></li>
              <li><a href="/plastic-surgery-overseas-safety-singapore">Recovery, risks and consultation planning</a></li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section article-content">
        <div className="container">
          <p className="notice-text">These articles provide general medical information and do not replace consultation with a qualified medical practitioner. Suitability, risks, recovery and outcomes vary between individuals.</p>
          <div className="grid-3" id="articles">
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
