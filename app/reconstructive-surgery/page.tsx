import type { Metadata } from 'next';
import Image from 'next/image';
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
    type: 'website',
    images: [
      {
        url: '/images/reconstructive-tiles/lymphedema-surgery.jpg',
        width: 900,
        height: 900,
        alt: 'Swollen arm image representing the reconstructive and lymphatic surgery treatment collection'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reconstructive Surgery Treatments in Singapore',
    description: 'A focused overview of reconstructive, lymphatic and scar surgery treatment pages by Dr Jeremy Sun in Singapore.',
    images: ['/images/reconstructive-tiles/lymphedema-surgery.jpg']
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.drjeremysun.com/reconstructive-surgery#webpage',
      url: 'https://www.drjeremysun.com/reconstructive-surgery',
      name: 'Reconstructive Surgery Treatments in Singapore',
      description: metadata.description,
      inLanguage: 'en-SG',
      dateModified: '2026-10-13',
      breadcrumb: { '@id': 'https://www.drjeremysun.com/reconstructive-surgery#breadcrumb' },
      mainEntity: reconstructiveTreatments.map((treatment) => ({
        '@type': 'MedicalWebPage',
        name: treatment.title,
        url: `https://www.drjeremysun.com${treatment.href}`
      }))
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.drjeremysun.com/reconstructive-surgery#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.drjeremysun.com/' },
        { '@type': 'ListItem', position: 2, name: 'Reconstructive surgery', item: 'https://www.drjeremysun.com/reconstructive-surgery' }
      ]
    }
  ]
};

export default function ReconstructiveSurgeryPage() {
  return (
    <main className="article-page treatment-listing-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
              <li><a href="/ftm-top-surgery-singapore">Selected chest reconstruction & FTM top surgery</a></li>
              <li><a href="/scar-reconstruction-singapore">Scar & laceration reconstruction</a></li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section treatment-pathway-section">
        <div className="container">
          <div className="eyebrow">Start with the care pathway</div>
          <h2>Which guide should you read first?</h2>
          <p className="section-intro">Reconstructive decisions usually begin with the condition, affected area and treatment sequence rather than a procedure name. These routes connect the existing patient guides without assuming that surgery is appropriate.</p>
          <div className="grid-3">
            <a className="card linked-card" href="/lymphedema-surgery-singapore"><small>Limb swelling or lymphoedema</small><h3>Start with assessment and treatment selection</h3><p>Review diagnosis, conservative care, imaging and the different surgical options before reading the focused LVA guide.</p><span>Read the lymphoedema pathway</span></a>
            <a className="card linked-card" href="/breast-reconstruction-singapore"><small>Breast-cancer treatment or breast loss</small><h3>Understand reconstruction timing and options</h3><p>Begin with the breast-reconstruction guide for coordination, implant-based and own-tissue options, recovery and risks.</p><span>Read the breast-reconstruction guide</span></a>
            <a className="card linked-card" href="/trauma-lacerations-singapore"><small>Recent injury or laceration</small><h3>Use the trauma pathway</h3><p>Start with wound and injury assessment, then follow the relevant route for facial, limb, head-and-neck or scar reconstruction.</p><span>Read the trauma guide</span></a>
            <a className="card linked-card" href="/scar-reconstruction-singapore#assessment"><small>Established scar concern</small><h3>Begin with scar assessment</h3><p>Review how scar type, symptoms, location and treatment history shape the discussion before comparing treatment options.</p><span>Read the scar guide</span></a>
            <a className="card linked-card" href="/ftm-top-surgery-singapore"><small>Chest reconstruction</small><h3>Review chest-surgery planning</h3><p>Read the dedicated guide for assessment, technique considerations, scars, recovery, risks and follow-up.</p><span>Read the chest-reconstruction guide</span></a>
            <a className="card linked-card" href="/plastic-surgeon-singapore#consultation"><small>Preparing for consultation</small><h3>Check credentials and questions</h3><p>Review specialist-registration, relevant training and consultation questions before seeking personalised advice.</p><span>Read the consultation guide</span></a>
          </div>
          <div className="section-actions">
            <a className="btn btn-primary" href="/#contact">Request a private consultation</a>
            <a className="btn btn-ghost" href="https://lymphedasia.com/lymphedema-treatment/">Read the LymphedAsia treatment hub</a>
          </div>
          <p className="hub-location-note">Private consultation enquiries are handled through Astrid Plastic Surgery at Paragon Medical, 290 Orchard Road, #09-01/02, Singapore 238859.</p>
        </div>
      </section>

      <section className="section segment-reconstructive treatment-listing-section">
        <div className="container">
          <div className="eyebrow">Full treatment list</div>
          <h2>Reconstructive treatment pages</h2>
          <p className="section-intro">Each tile links to patient-focused information on planning, suitability, recovery, risks and realistic limitations.</p>
          <div className="grid-3 focus-grid reconstructive-photo-grid treatment-listing-grid">{reconstructiveTreatments.map((x) => (
            <a className="card linked-card focus-card aesthetic-photo-card reconstructive-photo-card" href={x.href} key={x.title}>
              <Image
                src={x.image}
                alt={x.alt}
                width={720}
                height={720}
                sizes="(max-width: 900px) calc(50vw - 27px), 272px"
              />
              <div className="aesthetic-photo-overlay reconstructive-photo-overlay"><h3>{x.title}</h3><span>View page</span></div>
            </a>
          ))}</div>
        </div>
      </section>
    </main>
  );
}
