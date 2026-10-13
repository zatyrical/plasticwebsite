import type { Metadata } from 'next';
import Image from 'next/image';
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
    type: 'website',
    images: [
      {
        url: '/images/aesthetic-ai/body-contouring-consultation.webp',
        width: 1145,
        height: 1374,
        alt: 'Patient and clinician reviewing an aesthetic surgery assessment worksheet during consultation planning'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aesthetic Surgery Treatments in Singapore',
    description: 'A focused overview of aesthetic surgery treatment pages by Dr Jeremy Sun in Singapore.',
    images: ['/images/aesthetic-ai/body-contouring-consultation.webp']
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.drjeremysun.com/aesthetic-surgery#webpage',
      url: 'https://www.drjeremysun.com/aesthetic-surgery',
      name: 'Aesthetic Surgery Treatments in Singapore',
      description: metadata.description,
      inLanguage: 'en-SG',
      dateModified: '2026-10-13',
      breadcrumb: { '@id': 'https://www.drjeremysun.com/aesthetic-surgery#breadcrumb' },
      mainEntity: aestheticTreatments.map((treatment) => ({
        '@type': 'MedicalWebPage',
        name: treatment.title,
        url: `https://www.drjeremysun.com${treatment.href}`
      }))
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.drjeremysun.com/aesthetic-surgery#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.drjeremysun.com/' },
        { '@type': 'ListItem', position: 2, name: 'Aesthetic surgery', item: 'https://www.drjeremysun.com/aesthetic-surgery' }
      ]
    }
  ]
};

export default function AestheticSurgeryPage() {
  return (
    <main className="article-page treatment-listing-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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

      <section className="section treatment-pathway-section">
        <div className="container">
          <div className="eyebrow">Start with your concern</div>
          <h2>Which guide should you read first?</h2>
          <p className="section-intro">A procedure name is not always the best starting point. These pathways organise the existing guides by the area or decision you want to understand before consultation.</p>
          <div className="grid-3">
            <a className="card linked-card" href="/asian-rhinoplasty-singapore"><small>Nose shape or structure</small><h3>Start with rhinoplasty planning</h3><p>Compare implant, septal, ear and rib-cartilage considerations, including when revision planning changes the discussion.</p><span>Read the nose-surgery guide</span></a>
            <a className="card linked-card" href="/eyebag-removal-lower-blepharoplasty-singapore"><small>Upper or lower eyelids</small><h3>Separate eyelid concerns</h3><p>Begin with the lower-eyelid guide for eyebags and tear-trough concerns, with a separate route to upper-eyelid planning.</p><span>Read the lower-eyelid guide</span></a>
            <a className="card linked-card" href="/face-neck-lift-singapore#assessment"><small>Face and neck changes</small><h3>Begin with an anatomy-led assessment</h3><p>Review how volume loss, tissue descent and skin changes are separated before comparing lifting, fat grafting, threads or skin treatments.</p><span>Read the face and neck guide</span></a>
            <a className="card linked-card" href="/breast-aesthetic-surgery-singapore"><small>Breast shape, volume or position</small><h3>Compare breast-surgery options</h3><p>Start with the overview before moving to implant planning, lift, reduction, asymmetry or recovery-specific information.</p><span>Read the breast-surgery overview</span></a>
            <a className="card linked-card" href="/body-contouring-liposuction-singapore"><small>Abdomen or body contour</small><h3>Compare skin, fat and muscle concerns</h3><p>Use the body-contouring guide before comparing liposuction, tummy tuck or combined post-pregnancy planning.</p><span>Read the body-contouring guide</span></a>
            <a className="card linked-card" href="/plastic-surgeon-singapore#consultation"><small>Preparing for consultation</small><h3>Check credentials and questions</h3><p>Review specialist-registration, safety and consultation questions before seeking personalised advice.</p><span>Read the consultation guide</span></a>
          </div>
          <div className="section-actions">
            <a className="btn btn-primary" href="/#contact">Request a private consultation</a>
          </div>
          <p className="hub-location-note">Private consultation enquiries are handled through Astrid Plastic Surgery at Paragon Medical, 290 Orchard Road, #09-01/02, Singapore 238859.</p>
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
