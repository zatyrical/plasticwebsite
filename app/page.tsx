import Image from 'next/image';
import ContactForm from './ContactForm';
import Navigation from './Navigation';

const aesthetic = [
  { title: 'Body contouring & liposuction', href: '' },
  { title: 'Breast aesthetic surgery', href: '' },
  { title: 'Asian rhinoplasty', href: '' },
  { title: 'Eyelid surgery', href: '/asian-eyelid-surgery-singapore' },
  { title: 'Facial rejuvenation', href: '' }
];

const reconstruction = [
  { title: 'Breast reconstruction', href: '/breast-reconstruction-singapore' },
  { title: 'Lymphedema surgery', href: '/lymphedema-surgery-singapore' },
  { title: 'Lymphovenous bypass / LVA', href: '/lymphovenous-bypass-lva-surgery-singapore' },
  { title: 'Lower limb reconstruction', href: '' },
  { title: 'Head and neck reconstruction', href: '' },
  { title: 'Trauma and lacerations', href: '' },
  { title: 'Microsurgical reconstruction', href: '' },
  { title: 'Gender-affirming chest reconstruction', href: '' }
];

const publications = [
  'Venous anatomy of the superficial circumflex iliac artery perforator flap: a cadaveric and clinical study. JPRAS, 2024.',
  'Utilizing the subunit concept to achieve better outcomes in lower limb reconstruction. PRS Global Open, 2024.',
  'Current Insights into Post-Traumatic Lymphedema. Trauma Care, 2025.',
  'The 1+X Technique: A Novel Microsurgical Approach for Secondary Lymphedema. JPRAS, 2025 in press.',
  'Lymphovenous shunts in the treatment of lymphedema. Journal of the Chinese Medical Association, 2024.',
  'Primary surgical prevention of lymphedema. Journal of the Chinese Medical Association, 2024.',
  'Genital Elephantiasis: Surgical treatment and reconstruction. Journal of the Chinese Medical Association, 2024.',
  'Vascular anatomy of the anteromedial thigh flap. JPRAS Open, 2017.'
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': 'https://www.drjeremysun.com/#physician',
  name: 'Dr Jeremy Sun',
  url: 'https://www.drjeremysun.com',
  image: 'https://www.drjeremysun.com/images/dr-jeremy-sun-hero.jpg',
  jobTitle: 'Senior Consultant Plastic Surgeon',
  medicalSpecialty: ['PlasticSurgery', 'ReconstructiveSurgery'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Singapore',
    addressCountry: 'SG'
  },
  areaServed: {
    '@type': 'Country',
    name: 'Singapore'
  },
  knowsAbout: [
    'Aesthetic surgery',
    'Reconstructive microsurgery',
    'Lymphedema surgery',
    'Lymphatic surgery',
    'Body contouring',
    'Breast surgery',
    'Rhinoplasty',
    'Eyelid surgery',
    'Facial rejuvenation'
  ],
  affiliation: [
    { '@type': 'Organization', name: 'Changi General Hospital' },
    { '@type': 'CollegeOrUniversity', name: 'Duke-NUS Medical School' }
  ]
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />

      <section className="hero mobile-screen">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Senior Consultant Plastic, Reconstructive & Aesthetic Surgeon • Singapore</div>
            <h1>Precision surgery with an academic foundation.</h1>
            <p className="lead">Aesthetic surgery, reconstructive microsurgery and lymphatic surgery in Singapore.</p>
            <div className="hero-actions">
              <a href="#aesthetic-surgery" className="btn btn-primary">Explore procedures</a>
              <a href="#about" className="btn btn-ghost">About Dr Sun</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="portrait-wrap">
              <Image src="/images/dr-jeremy-sun-hero.jpg" alt="Portrait of Dr Jeremy Sun, plastic surgeon in Singapore" width={896} height={1280} priority />
              <div className="credential-strip">
                <div className="metric"><strong>MOH specialist</strong><span>Plastic, reconstructive and aesthetic surgery</span></div>
                <div className="metric"><strong>Aesthetic surgery fellowship</strong><span>American Society for Aesthetic Plastic Surgery travelling fellowship</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section mobile-screen">
        <div className="container about-grid">
          <div className="about-image-card">
            <Image src="/images/dr-jeremy-sun-surgery.jpg" alt="Dr Jeremy Sun operating in a surgical theatre" width={1200} height={1500} />
          </div>
          <div>
            <div className="eyebrow">About Dr Sun</div>
            <h2>Senior Consultant Plastic Surgeon in Singapore.</h2>
            <p className="section-intro">Aesthetic surgery, reconstructive microsurgery and lymphatic surgery — grounded in academic surgical practice.</p>
            <div className="about-highlights compact-highlights">
              <div className="about-stat"><strong>Senior Consultant</strong><span>Plastic Surgery</span></div>
              <div className="about-stat"><strong>Head of Service</strong><span>Changi General Hospital</span></div>
              <div className="about-stat"><strong>Duke-NUS</strong><span>Assistant Clinical Professor</span></div>
              <div className="about-stat"><strong>Tokyo training</strong><span>MOH-accredited lymphatic surgery</span></div>
              <div className="about-stat"><strong>Aesthetic surgery training</strong><span>American Society of Aesthetic Plastic Surgeons</span></div>
              <div className="about-stat"><strong>Chapter Chairman</strong><span>College of Surgeons Singapore</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="aesthetic-surgery" className="section dark mobile-screen">
        <div className="container">
          <div className="eyebrow">Clinical focus areas</div>
          <h2>Aesthetic surgery</h2>
          <p className="section-intro">Focused procedure pages for patients considering aesthetic surgery.</p>
          <div className="grid-3 focus-grid">{aesthetic.map((x) => x.href ? <a className="card linked-card focus-card" href={x.href} key={x.title}><h3>{x.title}</h3><span>View page</span></a> : <div className="card focus-card" key={x.title}><h3>{x.title}</h3></div>)}</div>
        </div>
      </section>

      <section id="training" className="section mobile-screen">
        <div className="container">
          <div className="eyebrow">Training & fellowships</div>
          <h2>Extensive international plastic surgery training.</h2>
          <p className="section-intro">Dr Sun’s plastic surgery training includes Singapore specialist training and focused international fellowship and mentorship exposure across Tokyo, South Korea, Japan, the United States, Italy, Türkiye and Mexico.</p>
          <div className="feature-points">
            <span>Lymphatic surgery</span>
            <span>Aesthetic surgery</span>
            <span>Asian rhinoplasty</span>
            <span>Eyelid surgery</span>
            <span>Body contouring</span>
            <span>Breast surgery</span>
            <span>Facial rejuvenation</span>
          </div>
          <div className="hero-actions">
            <a href="/training-and-fellowships" className="btn btn-primary">View training details and photos</a>
          </div>
        </div>
      </section>

      <section id="reconstructive-surgery" className="section mobile-screen mobile-transition">
        <div className="container">
          <h2>Reconstructive surgery</h2>
          <p className="section-intro">Breast, lymphatic, microsurgical and trauma reconstruction.</p>
          <div className="grid-2 focus-grid">{reconstruction.map((x) => x.href ? <a className="card linked-card focus-card" href={x.href} key={x.title}><h3>{x.title}</h3><span>View page</span></a> : <div className="card focus-card" key={x.title}><h3>{x.title}</h3></div>)}</div>
        </div>
      </section>

      <section className="section dark mobile-transition">
        <div className="container">
          <h2>Selected publications</h2>
          <p className="section-intro">Selected peer-reviewed publications and academic work across microsurgery, perforator flaps, lower-limb reconstruction and lymphedema surgery.</p>
          <ol className="pub-list">{publications.map((p) => <li key={p}>{p}</li>)}</ol>
        </div>
      </section>

      <section id="articles" className="section mobile-transition">
        <div className="container">
          <h2>Educational articles</h2>
          <p className="section-intro">Clear, patient-focused articles on procedure planning, recovery considerations, risks and treatment options in plastic, reconstructive and lymphatic surgery.</p>
          <div className="grid-3">
            <a className="card blog-card linked-card" href="/lymphovenous-bypass-lva-surgery-singapore"><small>LVA surgery</small><h3>Lymphovenous bypass / LVA surgery in Singapore</h3><p>Focused patient information on suitability, imaging, recovery, cellulitis risk and compression after LVA.</p><span>Read page</span></a>
            <a className="card blog-card linked-card" href="/lymphedema-surgery-singapore"><small>Lymphedema</small><h3>Lymphedema surgery in Singapore</h3><p>Educational overview of lymphovenous bypass, assessment, infection risk and recovery.</p><span>Read page</span></a>
            <a className="card blog-card linked-card" href="/breast-reconstruction-singapore"><small>Breast reconstruction</small><h3>Breast reconstruction in Singapore</h3><p>Patient information on implant-based reconstruction, DIEP flap reconstruction, timing, recovery and risks.</p><span>Read page</span></a>
            <a className="card blog-card linked-card" href="/asian-eyelid-surgery-singapore"><small>Asian eyelid surgery</small><h3>Asian eyelid surgery in Singapore</h3><p>Patient information on double eyelid surgery, ptosis assessment, recovery, risks and revision eyelid surgery.</p><span>Read page</span></a>
          </div>
        </div>
      </section>

      <section id="contact" className="section mobile-transition">
        <div className="container grid-2">
          <div>
            <h2>Contact</h2>
            <p className="section-intro">For appointments, clinic enquiries and referral information, please submit the form below. The clinic email address is not displayed publicly to reduce automated spam.</p>
            <ContactForm />
          </div>
          <div className="compliance"><h3>Medical information notice</h3><p>This website provides general information and does not replace consultation with a qualified medical practitioner. Procedure suitability, risks, recovery and outcomes vary between individuals and should be assessed through a formal clinical consultation.</p></div>
        </div>
      </section>

      <footer className="footer"><div className="container"><strong>Dr Jeremy Sun</strong><p>Plastic, Reconstructive & Aesthetic Surgery • Singapore</p></div></footer>
    </main>
  );
}
