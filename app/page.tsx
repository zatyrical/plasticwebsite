import Image from 'next/image';
import ContactForm from './ContactForm';
import Navigation from './Navigation';

const aesthetic = [
  { title: 'Body contouring & liposuction', text: 'Abdominoplasty, arm/thigh/trunk contouring, post-bariatric body contouring and high-definition liposuction techniques, informed by international aesthetic body-contouring training.', href: '' },
  { title: 'Breast aesthetic surgery', text: 'Breast augmentation, reduction mammoplasty and mastopexy, including training exposure to rapid-recovery breast augmentation and advanced breast shaping approaches.', href: '' },
  { title: 'Asian rhinoplasty', text: 'Asian rhinoplasty and structural rib rhinoplasty training with surgeons in South Korea, Japan and Los Angeles.', href: '' },
  { title: 'Eyelid surgery', text: 'Asian blepharoplasty training with Korean and Japanese plastic/aesthetic surgeons.', href: '' },
  { title: 'Facial rejuvenation', text: 'Sub-SMAS and deep-plane facelift concepts from international facelift training in the USA, Italy and Türkiye.', href: '' },
  { title: 'Lymphedema surgery', text: 'Dedicated lymphatic surgery care including LVA, lymphatic reconstruction and complex lymphedema assessment.', href: '/lymphedema-surgery-singapore' }
];

const reconstruction = [
  { text: 'Breast reconstruction, including implant-based reconstruction, free DIEP flap reconstruction and the reconstruction component for Singapore’s first robotic mastectomy', href: '' },
  { text: 'Gender-affirming chest reconstruction / FTM top surgery experience in Singapore', href: '' },
  { text: 'Lower limb reconstruction using bespoke flap planning, SCIP flap expertise, authorship of a SCIP flap book chapter and keynote lecture experience on lower-limb subunit reconstruction at the European Federation of Societies for Microsurgery meeting in 2024', href: '' },
  { text: 'Head and neck reconstruction, including tongue, maxillary, mandibular and pharyngeal reconstruction, with observership exposure at MD Anderson Cancer Center', href: '' },
  { text: 'Facial, chest wall and limb trauma reconstruction including lacerations, nerves, soft tissue and facial fracture fixation', href: '' },
  { text: 'Microsurgical reconstruction and perforator flap surgery including SCIP and anteromedial thigh flap work', href: '' },
  { text: 'Lymphedema surgery, supported by dedicated Tokyo lymphatic surgery training and invited speaker experience at local and international conferences', href: '/lymphedema-surgery-singapore' }
];

const trainingMentorship = [
  {
    area: 'Lymphatic surgery',
    mentor: 'Dr Takumi Yamamoto and Dr Akitatsu Hayashi',
    focus: 'MOH-accredited dedicated lymphedema surgery training program in Tokyo, focused specifically on lymphovenous bypass, lymphatic reconstruction and complex lymphedema care.',
    note: 'Structured subspecialty lymphatic surgery training, distinct from broader microsurgical fellowships where lymphedema may be only one component of training.',
    photos: [
      { src: '/images/mentors/takumi-yamamoto-lymphatic-group.jpg', alt: 'Dr Jeremy Sun with Dr Takumi Yamamoto during lymphatic surgery training in Tokyo', className: 'photo-takumi-yamamoto' },
      { src: '/images/mentors/akitatsu-hayashi.jpg', alt: 'Dr Jeremy Sun with Dr Akitatsu Hayashi during lymphatic surgery training in Tokyo', className: 'photo-akitatsu-hayashi' }
    ]
  },
  {
    area: 'Body contouring & liposuction',
    mentor: 'Dr David Sieber and Mexican body-contouring surgical groups',
    focus: 'High-definition liposuction, abdominoplasty, cosmetic body contouring and breast augmentation principles.',
    note: 'ASAPS travelling fellowship exposure.',
    photos: [
      { src: '/images/mentors/david-sieber.jpg', alt: 'Dr Jeremy Sun with Dr David Sieber during aesthetic surgery training', className: 'photo-david-sieber' }
    ]
  },
  {
    area: 'Breast aesthetic surgery',
    mentor: 'Dr William Adams and Dr Dennis Hammond',
    focus: 'Breast augmentation, rapid-recovery concepts and advanced breast shaping approaches.',
    note: 'Mentored international aesthetic surgery training.',
    photos: [
      { src: '/images/mentors/william-adams.jpg', alt: 'Dr Jeremy Sun with Dr William Adams during breast aesthetic surgery training' },
      { src: '/images/mentors/dennis-hammond.jpg', alt: 'Dr Jeremy Sun with Dr Dennis Hammond during breast aesthetic surgery training' }
    ]
  },
  {
    area: 'Asian rhinoplasty',
    mentor: 'Dr Jeong Jae Yong, Dr Charles Lee, Dr Yasushi Sugawara and Dr Kim Taek Kyun',
    focus: 'Asian rhinoplasty, structural rhinoplasty and rib cartilage techniques.',
    note: 'Training exposure across South Korea, Japan and Los Angeles.',
    photos: [
      { src: '/images/mentors/jeong-jae-yong.jpg', alt: 'Dr Jeremy Sun with Dr Jeong Jae Yong during rhinoplasty training' },
      { src: '/images/mentors/charles-lee.jpg', alt: 'Dr Jeremy Sun with Dr Charles Lee during rhinoplasty training', className: 'photo-charles-lee' },
      { src: '/images/mentors/yasushi-sugawara.jpg', alt: 'Dr Jeremy Sun with Dr Yasushi Sugawara during rhinoplasty training', className: 'photo-yasushi-sugawara' },
      { src: '/images/mentors/kim-taek-kyun.jpg', alt: 'Dr Jeremy Sun with Dr Kim Taek Kyun during rhinoplasty training', className: 'photo-kim-taek-kyun' }
    ]
  },
  {
    area: 'Eyelid surgery',
    mentor: 'Dr Moon Seop Choi and Dr Keizo Fukuta',
    focus: 'Asian blepharoplasty and plastic/aesthetic eyelid surgery concepts.',
    note: 'Procedure-specific mentorship and observership exposure.',
    photos: [
      { src: '/images/mentors/moon-seop-choi.jpg', alt: 'Dr Jeremy Sun with Dr Moon Seop Choi during eyelid surgery training', className: 'photo-moon-seop-choi' },
      { src: '/images/mentors/keizo-fukuta.jpg', alt: 'Dr Jeremy Sun with Dr Keizo Fukuta during eyelid surgery training' }
    ]
  },
  {
    area: 'Facial rejuvenation',
    mentor: 'Dr Tim Martyn, Dr Giovanni Botti and Dr Zekeriya Kul',
    focus: 'Sub-SMAS and deep-plane facelift concepts, facial rejuvenation and aesthetic facial surgery.',
    note: 'International facelift training exposure in the USA, Italy and Türkiye.',
    photos: [
      { src: '/images/mentors/tim-martyn.jpg', alt: 'Dr Jeremy Sun with Dr Tim Martyn during facial rejuvenation training', className: 'photo-tim-martyn' }
    ]
  }
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

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Senior Consultant Plastic, Reconstructive & Aesthetic Surgeon • Singapore</div>
            <h1>Precision surgery with an academic foundation.</h1>
            <p className="lead">Dr Jeremy Sun is a Senior Consultant plastic surgeon in Singapore with expertise across aesthetic surgery, microsurgical reconstruction and lymphatic surgery. This site provides factual information on his training, clinical focus areas and educational articles for patients.</p>
            <div className="hero-actions">
              <a href="#procedures" className="btn btn-primary">Explore procedures</a>
              <a href="#about" className="btn btn-ghost">About Dr Sun</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="portrait-wrap">
              <Image src="/images/dr-jeremy-sun-hero.jpg" alt="Portrait of Dr Jeremy Sun, plastic surgeon in Singapore" width={896} height={1280} priority />
              <div className="credential-strip">
                <div className="metric"><strong>MOH Accredited</strong><span>Dedicated lymphatic surgery training program in Tokyo</span></div>
                <div className="metric"><strong>American Society for Aesthetic Plastic Surgery</strong><span>Annual travelling fellowship awarded to one international plastic surgeon</span></div>
                <div className="metric"><strong>Duke-NUS</strong><span>Assistant Clinical Professor</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2>About Dr Jeremy Sun</h2>
          <p className="section-intro">Dr Sun is a Senior Consultant plastic surgeon. He graduated from the Yong Loo Lin School of Medicine at the National University of Singapore in 2007 and completed six years of residency training in Plastic, Reconstructive and Aesthetic Surgery. His clinical foundation is in microsurgical reconstruction, with experience in complex head and neck, breast and lower limb reconstruction.</p>
          <div className="grid-3">
            <div className="card"><h3>Leadership</h3><p>Head of Plastic, Reconstructive and Aesthetic Surgery Service at Changi General Hospital; Chairman, Chapter of Plastic Reconstructive and Aesthetic Surgeons, College of Surgeons, Academy of Medicine Singapore.</p></div>
            <div className="card"><h3>Education</h3><p>Core faculty of the SingHealth Plastic Surgery Residency Program, clinical teacher at Lee Kong Chian School of Medicine and Assistant Clinical Professor at Duke-NUS.</p></div>
            <div className="card"><h3>Subspecialty focus</h3><p>Aesthetic surgery, microsurgical reconstruction, lymphatic surgery and complex reconstructive surgery for breast, lower limb, head and neck, and trauma cases.</p></div>
          </div>
        </div>
      </section>

      <section className="section surgical-feature">
        <div className="container surgical-feature-grid">
          <div className="surgical-image-card">
            <Image src="/images/dr-jeremy-sun-surgery.jpg" alt="Dr Jeremy Sun operating in a surgical theatre" width={1200} height={1500} />
            <div className="surgical-image-caption">Operative focus across aesthetic, reconstructive microsurgery and lymphatic surgery.</div>
          </div>
          <div className="surgical-feature-copy">
            <div className="eyebrow">Surgical practice</div>
            <h2>Precision, planning and microsurgical discipline.</h2>
            <p className="section-intro">Dr Sun’s surgical approach is grounded in careful assessment, detailed operative planning and a microsurgical foundation developed through aesthetic, reconstructive and lymphatic surgery practice.</p>
            <div className="feature-points">
              <span>Microsurgical foundation</span>
              <span>Structured operative planning</span>
              <span>Academic surgical practice</span>
            </div>
          </div>
        </div>
      </section>

      <section id="procedures" className="section dark">
        <div className="container">
          <div className="eyebrow">Clinical focus areas</div>
          <h2>Aesthetic surgery</h2>
          <p className="section-intro">Dr Sun’s aesthetic surgery practice includes body contouring, breast surgery, Asian rhinoplasty, eyelid surgery, facial rejuvenation and lymphedema surgery, informed by international fellowship and mentorship exposure.</p>
          <div className="grid-3">{aesthetic.map((x) => x.href ? <a className="card linked-card" href={x.href} key={x.title}><h3>{x.title}</h3><p>{x.text}</p><span>Learn more</span></a> : <div className="card" key={x.title}><h3>{x.title}</h3><p>{x.text}</p></div>)}</div>
        </div>
      </section>

      <section id="training" className="section">
        <div className="container">
          <div className="eyebrow">Training gallery</div>
          <h2>International training & mentorship</h2>
          <p className="section-intro">Dr Sun has pursued focused international training across lymphatic surgery, aesthetic surgery and facial procedures, with mentorship from surgeons and surgical units in Tokyo, South Korea, Japan, the United States, Italy, Türkiye and Mexico.</p>
          <div className="mentor-grid">
            {trainingMentorship.map((x) => (
              <article className="mentor-card" key={x.area}>
                <div className={`mentor-collage collage-${Math.min(x.photos.length, 4)}`}>
                  {x.photos.length > 0 ? x.photos.map((photo) => (
                    <Image key={photo.src} src={photo.src} alt={photo.alt} className={photo.className} width={640} height={520} />
                  )) : <span>Mentor photo</span>}
                </div>
                <div className="mentor-content">
                  <small>{x.area}</small>
                  <h3>{x.mentor}</h3>
                  <p>{x.focus}</p>
                  <span className="mentor-note">{x.note}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reconstruction" className="section">
        <div className="container">
          <h2>Reconstructive surgery</h2>
          <p className="section-intro">Dr Sun’s reconstructive practice spans breast, lower limb, lymphatic, head and neck, and trauma reconstruction. His experience includes the reconstruction component for Singapore’s first robotic mastectomy, MD Anderson head-and-neck observership exposure, lower-limb reconstruction academic work and invited lymphedema surgery talks at local and international meetings.</p>
          <div className="grid-2">{reconstruction.map((x) => x.href ? <a className="card linked-card" href={x.href} key={x.text}><h3>{x.text.split(',')[0]}</h3><p>{x.text}</p><span>Learn more</span></a> : <div className="card" key={x.text}><h3>{x.text.split(',')[0]}</h3><p>{x.text}</p></div>)}</div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <h2>Selected publications</h2>
          <p className="section-intro">Selected peer-reviewed publications and academic work across microsurgery, perforator flaps, lower-limb reconstruction and lymphedema surgery.</p>
          <ol className="pub-list">{publications.map((p) => <li key={p}>{p}</li>)}</ol>
        </div>
      </section>

      <section id="articles" className="section">
        <div className="container">
          <h2>Educational articles</h2>
          <p className="section-intro">Clear, patient-focused articles on procedure planning, recovery considerations, risks and treatment options in plastic, reconstructive and lymphatic surgery.</p>
          <div className="grid-3">
            <article className="card blog-card"><small>Body contouring</small><h3>What to know before abdominoplasty</h3><p>A balanced article covering suitability, recovery, scars and risks.</p></article>
            <a className="card blog-card linked-card" href="/lymphedema-surgery-singapore"><small>Lymphedema</small><h3>Lymphedema surgery in Singapore</h3><p>Educational overview of lymphovenous bypass, assessment, infection risk and recovery.</p><span>Read page</span></a>
            <article className="card blog-card"><small>Breast surgery</small><h3>Breast augmentation recovery principles</h3><p>General recovery education without promising specific outcomes.</p></article>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
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
