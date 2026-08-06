import type { Metadata } from 'next';
import Image from 'next/image';
import Navigation from '../Navigation';
import { reconstructiveTreatments } from '../treatmentTiles';

export const metadata: Metadata = {
  title: 'Reconstructive Surgery Treatments in Singapore',
  description: 'Reconstructive surgery treatment overview by Dr Jeremy Sun in Singapore, including lymphedema surgery, supermicrosurgical LVA, breast reconstruction, scar reconstruction, laceration repair, lower limb reconstruction and head and neck reconstruction.',
  keywords: ['reconstructive surgery Singapore', 'lymphedema surgery Singapore', 'LVA surgery Singapore', 'breast reconstruction Singapore', 'scar reconstruction Singapore', 'laceration repair Singapore'],
  alternates: { canonical: '/reconstructive-surgery' },
  openGraph: {
    title: 'Reconstructive Surgery Treatments in Singapore',
    description: 'A focused overview of reconstructive, lymphatic and scar surgery treatment pages by Dr Jeremy Sun in Singapore.',
    url: '/reconstructive-surgery',
    type: 'website'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://www.drjeremysun.com/reconstructive-surgery#webpage',
  url: 'https://www.drjeremysun.com/reconstructive-surgery',
  name: 'Reconstructive Surgery Treatments in Singapore',
  description: metadata.description,
  inLanguage: 'en-SG',
  mainEntity: reconstructiveTreatments.map((treatment) => ({
    '@type': 'MedicalWebPage',
    name: treatment.title,
    url: `https://www.drjeremysun.com${treatment.href}`
  }))
};

export default function ReconstructiveSurgeryPage() {
  return (
    <main className="article-page treatment-listing-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <section className="article-hero">
        <div className="container article-hero-grid">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>Reconstructive surgery</span></nav>
            <div className="eyebrow">Reconstructive surgery</div>
            <h1>Reconstructive surgery treatments.</h1>
            <p className="lead">A full overview of Dr Sun’s reconstructive, lymphatic and scar surgery treatment pages, while the homepage remains focused on signature areas.</p>
          </div>
          <aside className="article-summary-card">
            <h2>Signature focus</h2>
            <ul>
              <li><a href="/lymphedema-surgery-singapore">Lymphedema surgery & supermicrosurgical LVA</a></li>
              <li><a href="/breast-reconstruction-singapore">Breast reconstruction</a></li>
              <li><a href="/scar-reconstruction-singapore">Scar & laceration reconstruction</a></li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section segment-reconstructive treatment-listing-section">
        <div className="container">
          <div className="eyebrow">Full treatment list</div>
          <h2>Reconstructive treatment pages</h2>
          <p className="section-intro">Each tile links to patient-focused information on planning, suitability, recovery, risks and realistic limitations.</p>
          <div className="grid-3 focus-grid reconstructive-photo-grid treatment-listing-grid">{reconstructiveTreatments.map((x) => (
            <a className="card linked-card focus-card aesthetic-photo-card reconstructive-photo-card" href={x.href} key={x.title}>
              <Image src={x.image} alt={x.alt} width={720} height={720} loading="eager" sizes="(max-width: 900px) 50vw, 25vw" />
              <div className="aesthetic-photo-overlay reconstructive-photo-overlay"><h3>{x.title}</h3><span>View page</span></div>
            </a>
          ))}</div>
        </div>
      </section>
    </main>
  );
}
