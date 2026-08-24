import type { Metadata } from 'next';
import Image from 'next/image';
import Navigation from '../Navigation';
import { aestheticTreatments } from '../treatmentTiles';

export const metadata: Metadata = {
  title: 'Aesthetic Surgery Treatments in Singapore',
  description: 'Aesthetic surgery treatment overview by Dr Jeremy Sun in Singapore, including breast aesthetic surgery, face and neck lift, abdominoplasty, rhinoplasty, eyelid surgery, body contouring, lasers, injectables, fat grafting and thread lifting.',
  keywords: ['aesthetic surgery Singapore', 'plastic surgeon Singapore', 'breast augmentation Singapore', 'face and neck lift Singapore', 'abdominoplasty Singapore', 'mommy makeover Singapore'],
  alternates: { canonical: '/aesthetic-surgery' },
  openGraph: {
    title: 'Aesthetic Surgery Treatments in Singapore',
    description: 'A focused overview of aesthetic surgery treatment pages by Dr Jeremy Sun in Singapore.',
    url: '/aesthetic-surgery',
    type: 'website'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://www.drjeremysun.com/aesthetic-surgery#webpage',
  url: 'https://www.drjeremysun.com/aesthetic-surgery',
  name: 'Aesthetic Surgery Treatments in Singapore',
  description: metadata.description,
  inLanguage: 'en-SG',
  mainEntity: aestheticTreatments.map((treatment) => ({
    '@type': 'MedicalWebPage',
    name: treatment.title,
    url: `https://www.drjeremysun.com${treatment.href}`
  }))
};

export default function AestheticSurgeryPage() {
  return (
    <main className="article-page treatment-listing-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <section className="article-hero">
        <div className="container article-hero-grid">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>Aesthetic surgery</span></nav>
            <div className="eyebrow">Aesthetic surgery</div>
            <h1>Aesthetic surgery treatments.</h1>
            <p className="lead">A full overview of Dr Sun’s aesthetic surgery treatment pages, presented as a treatment menu for patients who want to explore beyond the signature procedures on the homepage.</p>
          </div>
          <aside className="article-summary-card">
            <h2>Signature focus</h2>
            <ul>
              <li><a href="/breast-aesthetic-surgery-singapore">Breast augmentation, reduction & lift</a></li>
              <li><a href="/face-neck-lift-singapore">Face and neck lift</a></li>
              <li><a href="/tummy-tuck-singapore">Tummy tuck / abdominoplasty</a></li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section dark segment-aesthetic treatment-listing-section">
        <div className="container">
          <div className="eyebrow">Full treatment list</div>
          <h2>Aesthetic treatment pages</h2>
          <p className="section-intro">Each tile links to patient-focused information on planning, suitability, recovery, risks and realistic limitations.</p>
          <div className="grid-3 focus-grid aesthetic-photo-grid treatment-listing-grid">{aestheticTreatments.map((x) => (
            <a className="card linked-card focus-card aesthetic-photo-card" href={x.href} key={x.title}>
              <Image src={x.image} alt={x.alt} width={720} height={720} />
              <div className="aesthetic-photo-overlay"><h3>{x.title}</h3><span>View page</span></div>
            </a>
          ))}</div>
        </div>
      </section>
    </main>
  );
}
