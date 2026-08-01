import Image from 'next/image';
import ContactForm from './ContactForm';
import Navigation from './Navigation';

const aesthetic = [
  { title: 'Body contouring & liposuction', href: '', image: '/images/aesthetic-ai/body-contouring.jpg', alt: 'Asian-focused body contouring image showing waist and abdominal contour' },
  { title: 'Breast aesthetic surgery', href: '', image: '/images/aesthetic-ai/breast-aesthetic.jpg', alt: 'Tasteful inframammary fold and upper abdomen concept image for breast aesthetic surgery' },
  { title: 'Asian rhinoplasty', href: '', image: '/images/aesthetic-ai/asian-rhinoplasty.jpg', alt: 'Asian side-profile nose image for rhinoplasty' },
  { title: 'Eyelid surgery', href: '/asian-eyelid-surgery-singapore', image: '/images/aesthetic-ai/eyelid-surgery.jpg', alt: 'Asian eyelid image with surgical planning markings' },
  { title: 'Face and neck lift', href: '', image: '/images/aesthetic-ai/face-neck-lift.jpg', alt: 'Asian lower face, jawline and neck image for face and neck lift' },
  { title: 'Lasers and injectables', href: '', image: '/images/aesthetic-ai/lasers-injectables.jpg', alt: 'Asian facial skin image with aesthetic laser handpiece' },
  { title: 'Fat grafting', href: '', image: '/images/aesthetic-ai/fat-grafting.jpg', alt: 'Clinical tray image representing fat grafting precision' },
  { title: 'Thread lifting', href: '', image: '/images/aesthetic-ai/thread-lifting.jpg', alt: 'Asian cheek and jawline image with subtle thread lift guide lines' }
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
    'Face and neck lift',
    'Lasers and injectables',
    'Fat grafting',
    'Thread lifting'
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
          <div className="grid-3 focus-grid aesthetic-photo-grid">{aesthetic.map((x) => {
            const content = <><Image src={x.image} alt={x.alt} width={720} height={720} /><div className="aesthetic-photo-overlay"><h3>{x.title}</h3>{x.href ? <span>View page</span> : null}</div></>;
            return x.href ? <a className="card linked-card focus-card aesthetic-photo-card" href={x.href} key={x.title}>{content}</a> : <div className="card focus-card aesthetic-photo-card" key={x.title}>{content}</div>;
          })}</div>
        </div>
      </section>

      <section id="reconstructive-surgery" className="section mobile-screen mobile-transition">
        <div className="container">
          <h2>Reconstructive surgery</h2>
          <p className="section-intro">Breast, lymphatic, microsurgical and trauma reconstruction.</p>
          <div className="grid-2 focus-grid">{reconstruction.map((x) => x.href ? <a className="card linked-card focus-card" href={x.href} key={x.title}><h3>{x.title}</h3><span>View page</span></a> : <div className="card focus-card" key={x.title}><h3>{x.title}</h3></div>)}</div>
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
            <span>Face and neck lift</span>
          </div>
          <div className="hero-actions">
            <a href="/training-and-fellowships" className="btn btn-primary">View training details and photos</a>
          </div>
        </div>
      </section>

      <section id="media" className="section media-home-section mobile-transition">
        <div className="container">
          <div className="eyebrow">Media & public education</div>
          <h2>Selected media and education features.</h2>
          <p className="section-intro">Dr Jeremy Sun has contributed to public education and expert commentary on plastic, reconstructive and lymphatic surgery topics through selected media features, interviews and professional platforms.</p>
          <div className="grid-3 media-home-grid">
            <a className="card linked-card media-card media-visual-card" href="https://www.channelnewsasia.com/singapore/plastic-surgery-beauty-enhancements-botched-jobs-younger-addiction-5295756" target="_blank" rel="noreferrer"><div className="media-card-image"><Image src="/images/media/cna-plastic-surgery-feature.jpg" alt="CNA feature image on plastic surgery trends" width={1200} height={676} /></div><small>CNA</small><h3>Plastic surgery trends in Singapore</h3><p>CNA feature on younger patients, cosmetic procedures and safety considerations in Singapore.</p><span>Read feature</span></a>
            <a className="card linked-card media-card media-visual-card" href="https://www.straitstimes.com/singapore/health/new-surgical-procedure-shown-to-improve-symptoms-of-moderate-alzheimers-disease" target="_blank" rel="noreferrer"><div className="media-card-image"><Image src="/images/media/straits-times-alzheimers-feature.webp" alt="The Straits Times feature image on lymphatic bypass research" width={1140} height={760} /></div><small>The Straits Times</small><h3>Clinical commentary on lymphatic bypass research</h3><p>Quoted as a clinical co-investigator on lymphatic bypass principles and brain waste-clearance research.</p><span>Read feature</span></a>
            <a className="card linked-card media-card media-visual-card" href="https://www.singhealthdukenus.com.sg/conference/sdc2025/our-speakers/Jeremy-Sun" target="_blank" rel="noreferrer"><div className="media-card-image portrait-media-image"><Image src="/images/media/singhealth-speaker-jeremy-sun.jpg" alt="Dr Jeremy Sun speaker profile photograph for SingHealth Duke-NUS Scientific Congress" width={295} height={354} /></div><small>Invited speaker</small><h3>Professional speaker profile</h3><p>Speaker profile covering Dr Sun’s plastic, reconstructive, aesthetic and lymphatic surgery work.</p><span>View profile</span></a>
          </div>
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
