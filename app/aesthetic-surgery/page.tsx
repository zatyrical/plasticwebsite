import type { Metadata } from 'next';
import Image from 'next/image';
import Navigation from '../Navigation';
import { aestheticTreatments } from '../treatmentTiles';

export const metadata: Metadata = {
  title: 'Aesthetic Surgery Treatments in Singapore',
  description: 'Aesthetic surgery treatment overview by Dr Jeremy Sun in Singapore, including breast augmentation, mommy makeover, tummy tuck / abdominoplasty, facelift, neck lift, liposuction, rhinoplasty and rib rhinoplasty.',
  keywords: ['aesthetic surgery Singapore', 'plastic surgeon Singapore', 'breast augmentation Singapore', 'mommy makeover Singapore', 'mummy makeover Singapore', 'tummy tuck Singapore', 'abdominoplasty Singapore', 'facelift Singapore', 'neck lift Singapore', 'liposuction Singapore', 'rhinoplasty Singapore', 'rib rhinoplasty Singapore'],
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
  dateModified: '2026-10-06',
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
            <p className="lead">Explore Dr Sun’s aesthetic surgery guides in Singapore, including rhinoplasty and rib rhinoplasty, breast augmentation and recovery planning, eyebag removal and eyelid surgery, facelift and neck lift, liposuction, and tummy tuck / abdominoplasty.</p>
          </div>
          <aside className="article-summary-card">
            <h2>Explore procedure guides</h2>
            <ul>
              <li><a href="/rib-rhinoplasty-singapore">Rib rhinoplasty / rib cartilage nose surgery</a></li>
              <li><a href="/asian-rhinoplasty-singapore">Rhinoplasty / Asian nose surgery</a></li>
              <li><a href="/breast-augmentation-singapore">Breast augmentation and implant planning</a></li>
              <li><a href="/24-hour-rapid-recovery-breast-augmentation-singapore">Rapid recovery breast augmentation: principles and limits</a></li>
              <li><a href="/eyebag-removal-lower-blepharoplasty-singapore">Eyebag removal / lower blepharoplasty</a></li>
              <li><a href="/asian-eyelid-surgery-singapore">Upper eyelid / double eyelid surgery</a></li>
              <li><a href="/face-neck-lift-singapore">Facelift and neck lift</a></li>
              <li><a href="/body-contouring-liposuction-singapore">Body contouring and liposuction</a></li>
              <li><a href="/tummy-tuck-singapore">Tummy tuck / abdominoplasty</a></li>
              <li><a href="/mommy-makeover-singapore">Mommy makeover / post-pregnancy surgery</a></li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section dark segment-aesthetic treatment-listing-section">
        <div className="container">
          <div className="eyebrow">Full treatment list</div>
          <h2>Aesthetic treatment pages</h2>
          <p className="section-intro">Each tile links to patient-focused information on planning, suitability, cost factors, recovery, risks and realistic limitations. To compare procedures, start with <a href="/breast-augmentation-singapore">breast augmentation in Singapore</a>, <a href="/mommy-makeover-singapore">mommy / mummy makeover in Singapore</a>, <a href="/tummy-tuck-singapore">tummy tuck / abdominoplasty in Singapore</a>, <a href="/body-contouring-liposuction-singapore">liposuction and body contouring</a>, <a href="/face-neck-lift-singapore">facelift / neck lift</a>, <a href="/asian-rhinoplasty-singapore">rhinoplasty</a> or <a href="/rib-rhinoplasty-singapore">rib rhinoplasty</a>.</p>
          <div className="grid-3 focus-grid aesthetic-photo-grid treatment-listing-grid">{aestheticTreatments.map((x) => (
            <a className="card linked-card focus-card aesthetic-photo-card" href={x.href} key={x.title}>
              <Image
                src={x.image}
                alt={x.alt}
                width={720}
                height={720}
                sizes="(max-width: 900px) calc(50vw - 27px), 272px"
              />
              <div className="aesthetic-photo-overlay"><h3>{x.title}</h3><span>View page</span></div>
            </a>
          ))}</div>
        </div>
      </section>
    </main>
  );
}
