import Image from 'next/image';
import Link from 'next/link';

const aesthetic = [
  { title: 'Body contouring & liposuction', text: 'Abdominoplasty, arm/thigh/trunk contouring, post-bariatric body contouring and high-definition liposuction techniques, informed by international aesthetic body-contouring training.' },
  { title: 'Breast aesthetic surgery', text: 'Breast augmentation, reduction mammoplasty and mastopexy, including training exposure to rapid-recovery breast augmentation and advanced breast shaping approaches.' },
  { title: 'Asian rhinoplasty', text: 'Asian rhinoplasty and structural rib rhinoplasty training with surgeons in South Korea, Japan and Los Angeles.' },
  { title: 'Eyelid surgery', text: 'Asian blepharoplasty training with Korean and Japanese oculoplastic/aesthetic surgeons.' },
  { title: 'Facial rejuvenation', text: 'Sub-SMAS and deep-plane facelift concepts from international facelift training in the USA, Italy and Türkiye.' },
  { title: 'Lymphedema surgery', text: 'Lymphatic surgery training through MOH HMDP in Tokyo, with focus on lymphovenous bypass, lymphatic reconstruction and complex lymphedema care.' }
];

const reconstruction = [
  'Breast reconstruction, including implant-based reconstruction and free DIEP flap reconstruction',
  'Gender-affirming chest reconstruction / FTM top surgery experience in Singapore',
  'Lower limb reconstruction using bespoke flap planning and the subunit concept',
  'Head and neck reconstruction, including tongue, maxillary, mandibular and pharyngeal reconstruction',
  'Facial, chest wall and limb trauma reconstruction including lacerations, nerves, soft tissue and facial fracture fixation',
  'Microsurgical reconstruction and perforator flap surgery including SCIP and anteromedial thigh flap work'
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

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="brand">Dr Jeremy Sun</Link>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#procedures">Procedures</a>
            <a href="#training">Training</a>
            <a href="#reconstruction">Reconstruction</a>
            <a href="#articles">Articles</a>
            <a href="#contact" className="btn btn-primary">Enquire</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Plastic, Reconstructive & Aesthetic Surgery • Singapore</div>
            <h1>Precision surgery with an academic foundation.</h1>
            <p className="lead">Dr Jeremy Sun is a Singapore plastic surgeon with expertise across aesthetic surgery, microsurgical reconstruction and lymphatic surgery. This site provides factual information on his training, clinical focus areas and educational articles for patients.</p>
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
                <div className="metric"><strong>American Society for Aesthetic Plastic Surgery</strong><span>International aesthetic surgery fellowship grant</span></div>
                <div className="metric"><strong>Duke-NUS</strong><span>Assistant Clinical Professor</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2>About Dr Jeremy Sun</h2>
          <p className="section-intro">Dr Sun graduated from the Yong Loo Lin School of Medicine at the National University of Singapore in 2007 and completed six years of residency training in Plastic, Reconstructive and Aesthetic Surgery. His clinical foundation is in microsurgical reconstruction, with experience in complex head and neck, breast and lower limb reconstruction.</p>
          <div className="grid-3">
            <div className="card"><h3>Leadership</h3><p>Head of Plastic, Reconstructive and Aesthetic Surgery Service at Changi General Hospital; Chairman, Chapter of Plastic Reconstructive and Aesthetic Surgeons, College of Surgeons, Academy of Medicine Singapore.</p></div>
            <div className="card"><h3>Education</h3><p>Core faculty of the SingHealth Plastic Surgery Residency Program, clinical teacher at Lee Kong Chian School of Medicine and Assistant Clinical Professor at Duke-NUS.</p></div>
            <div className="card"><h3>Subspecialty focus</h3><p>Aesthetic surgery, microsurgical reconstruction, lymphatic surgery and complex reconstructive surgery for breast, lower limb, head and neck, and trauma cases.</p></div>
          </div>
        </div>
      </section>

      <section id="procedures" className="section dark">
        <div className="container">
          <div className="eyebrow">Clinical focus areas</div>
          <h2>Aesthetic surgery</h2>
          <p className="section-intro">Procedure pages should remain educational, balanced and compliance-safe: indications, suitability, alternatives, recovery and risks — without guarantees, superlatives or sensational before-and-after claims.</p>
          <div className="grid-3">{aesthetic.map((x) => <div className="card" key={x.title}><h3>{x.title}</h3><p>{x.text}</p></div>)}</div>
        </div>
      </section>

      <section id="training" className="section">
        <div className="container">
          <h2>International training & mentorship</h2>
          <p className="section-intro">A dedicated training gallery can showcase verified fellowships, observerships and training photographs where permissions are available. The language should be factual: who, where, what area of training.</p>
          <div className="timeline">
            <div className="timeline-item"><h3>ASAPS international fellowship grant</h3><p>Training exposure with aesthetic plastic surgeons in the United States, including body contouring, breast aesthetic surgery and facial aesthetic surgery.</p></div>
            <div className="timeline-item"><h3>MOH HMDP lymphatic surgery training, Tokyo</h3><p>Led a multidisciplinary team to Tokyo to specialise in lymphedema management and lymphatic surgery.</p></div>
            <div className="timeline-item"><h3>Body contouring</h3><p>Training with Mexican body-contouring surgical groups in Tijuana and with Dr David Sieber in San Francisco for cosmetic body contouring, high-definition liposuction, abdominoplasty and breast augmentation.</p></div>
            <div className="timeline-item"><h3>Breast, rhinoplasty, eyelid and facelift training</h3><p>Training exposure with Dr William Adams, Dr Dennis Hammond, Dr Jeong Jae Yong, Dr Charles Lee, Dr Yasushi Sugawara, Dr Moon Seop Choi, Dr Cho In Chang, Dr Keizo Fukuta, Dr Tim Martyn, Dr Giovanni Botti and Dr Zekeriya Kul.</p></div>
          </div>
        </div>
      </section>

      <section id="reconstruction" className="section">
        <div className="container">
          <h2>Reconstructive surgery</h2>
          <p className="section-intro">Dr Sun’s reconstructive practice spans breast, lower limb, lymphatic, head and neck, and trauma reconstruction. These sections can become individual SEO pages with patient-friendly explanations and referral information.</p>
          <div className="grid-2">{reconstruction.map((x) => <div className="card" key={x}><h3>{x.split(',')[0]}</h3><p>{x}</p></div>)}</div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <h2>Selected publications</h2>
          <p className="section-intro">Academic work reinforces credibility without relying on advertising claims.</p>
          <ol className="pub-list">{publications.map((p) => <li key={p}>{p}</li>)}</ol>
        </div>
      </section>

      <section id="articles" className="section">
        <div className="container">
          <h2>Educational articles</h2>
          <p className="section-intro">A blog section for search-optimised, compliance-safe patient education.</p>
          <div className="grid-3">
            <article className="card blog-card"><small>Body contouring</small><h3>What to know before abdominoplasty</h3><p>A balanced article covering suitability, recovery, scars and risks.</p></article>
            <article className="card blog-card"><small>Lymphedema</small><h3>Lymphatic surgery options explained</h3><p>Educational overview of lymphovenous bypass and lymph node transfer concepts.</p></article>
            <article className="card blog-card"><small>Breast surgery</small><h3>Breast augmentation recovery principles</h3><p>General recovery education without promising specific outcomes.</p></article>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container grid-2">
          <div>
            <h2>Contact</h2>
            <p className="section-intro">Clinic details, Google Business Profile, appointment enquiry form and map embed can be added once final clinic information is confirmed.</p>
            <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:20}}>
              <span className="tag">Google Business Profile ready</span><span className="tag">SEO structured data</span><span className="tag">Blog enabled</span>
            </div>
          </div>
          <div className="compliance"><h3>Medical information notice</h3><p>This website is intended to provide general information and should not replace consultation with a qualified medical practitioner. Procedure suitability, risks and recovery vary between individuals. Final wording should be reviewed against current Singapore medical advertising regulations before launch.</p></div>
        </div>
      </section>

      <footer className="footer"><div className="container"><strong>Dr Jeremy Sun</strong><p>Plastic, Reconstructive & Aesthetic Surgery • Singapore</p></div></footer>
    </main>
  );
}
