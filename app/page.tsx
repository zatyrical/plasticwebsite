import Image from 'next/image';
import ContactForm from './ContactForm';
import Navigation from './Navigation';
import { lastReviewedIso, physicianJsonLd } from './seoIdentity';
import { aestheticSignatureTreatments, reconstructiveSignatureTreatments } from './treatmentTiles';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.drjeremysun.com/#website',
      name: 'Dr Jeremy Sun Plastic Surgery',
      url: 'https://www.drjeremysun.com',
      inLanguage: 'en-SG',
      description: 'Patient education by Dr Jeremy Sun, a plastic, reconstructive and aesthetic surgeon in Singapore.',
      publisher: { '@id': 'https://www.drjeremysun.com/#physician' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.drjeremysun.com/?s={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@type': 'MedicalWebPage',
      '@id': 'https://www.drjeremysun.com/#webpage',
      url: 'https://www.drjeremysun.com',
      name: 'Dr Jeremy Sun | Plastic, Reconstructive & Aesthetic Surgeon in Singapore',
      headline: 'Plastic, Reconstructive & Aesthetic Surgeon in Singapore',
      description: 'Dr Jeremy Sun is a Senior Consultant plastic surgeon in Singapore with clinical focus in aesthetic surgery, reconstructive microsurgery and lymphedema surgery.',
      inLanguage: 'en-SG',
      isPartOf: { '@id': 'https://www.drjeremysun.com/#website' },
      about: [
        'Plastic surgery in Singapore',
        'Aesthetic surgery',
        'Reconstructive microsurgery',
        'Lymphedema surgery',
        'Asian rhinoplasty',
        'Asian eyelid surgery',
        'Body contouring',
        'Breast surgery',
        'Breast augmentation',
        '24-hour rapid recovery breast augmentation'
      ],
      datePublished: lastReviewedIso,
      dateModified: lastReviewedIso,
      lastReviewed: lastReviewedIso,
      reviewedBy: { '@id': 'https://www.drjeremysun.com/#physician' },
      author: { '@id': 'https://www.drjeremysun.com/#physician' }
    },
    physicianJsonLd
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
            <h1>Plastic, Reconstructive & Aesthetic Surgeon in Singapore</h1>
            <p className="lead">Rooted in science. Refined by art. Aesthetic surgery, reconstructive microsurgery and lymphatic surgery in Singapore by Dr Jeremy Sun.</p>
            <div className="hero-actions">
              <a href="#aesthetic-surgery" className="btn btn-primary">Explore procedures</a>
              <a href="#about" className="btn btn-ghost">About Dr Sun</a>
            </div>
          </div>
          <div className="hero-card hero-visual-stage">
            <div className="portrait-wrap hero-main-portrait">
              <Image src="/images/dr-jeremy-sun-hero.jpg" alt="Portrait of Dr Jeremy Sun, plastic surgeon in Singapore" width={896} height={1280} priority />
              <div className="credential-strip">
                <div className="metric"><strong>MOH specialist</strong><span>Plastic, reconstructive and aesthetic surgery</span></div>
                <div className="metric"><strong>Aesthetic surgery fellowship</strong><span>American Society for Aesthetic Plastic Surgery travelling fellowship</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section segmented-section segment-about mobile-screen">
        <div className="container about-grid">
          <div className="about-image-card">
            <Image src="/images/dr-jeremy-sun-surgery.jpg" alt="Dr Jeremy Sun operating in a surgical theatre" width={1200} height={1500} />
          </div>
          <div>
            <div className="eyebrow">About Dr Sun</div>
            <h2>Senior Consultant Plastic Surgeon in Singapore.</h2>
            <p className="section-intro">Dr Jeremy Sun is a Senior Consultant plastic surgeon in Singapore with clinical focus in aesthetic surgery, breast augmentation and aesthetic breast surgery, reconstructive microsurgery, breast reconstruction, lymphedema surgery and lymphatic surgery — grounded in academic surgical practice.</p>
            <div className="reviewer-card" aria-label="About Dr Jeremy Sun">
              <strong>About Dr Jeremy Sun</strong>
              <span>Dr Jeremy Sun is a Singapore Ministry of Health-accredited plastic surgeon with clinical interests in aesthetic breast surgery including breast augmentation, reconstructive microsurgery, lymphedema surgery, breast reconstruction, body contouring, eyelid surgery, rhinoplasty and facial rejuvenation. He is associated with Changi General Hospital and holds professional roles in plastic surgery education and specialist governance.</span>
            </div>
            <div className="reviewer-card" aria-label="Medical review information">
              <strong>Clinically authored and reviewed by Dr Jeremy Sun</strong>
              <span>Senior Consultant Plastic Surgeon, Singapore • Last reviewed {lastReviewedIso}</span>
            </div>
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

      <section id="aesthetic-surgery" className="section dark segmented-section segment-aesthetic mobile-screen">
        <div className="container">
          <div className="eyebrow signature-eyebrow"><span className="signature-script">Signature</span><span className="signature-kicker">Treatments</span></div>
          <h2>Aesthetic surgery</h2>
          <p className="section-intro">A focused selection of aesthetic procedures within Dr Sun’s practice.</p>
          <div className="grid-3 focus-grid aesthetic-photo-grid signature-photo-grid">{aestheticSignatureTreatments.map((x) => {
            const content = <><Image src={x.image} alt={x.alt} width={720} height={720} /><div className="aesthetic-photo-overlay"><h3>{x.title}</h3>{x.href ? <span>View page</span> : null}</div></>;
            return x.href ? <a className="card linked-card focus-card aesthetic-photo-card" href={x.href} key={x.title}>{content}</a> : <div className="card focus-card aesthetic-photo-card" key={x.title}>{content}</div>;
          })}</div>
          <div className="section-actions"><a href="/aesthetic-surgery" className="btn btn-primary">View all aesthetic treatments</a></div>
        </div>
      </section>

      <section id="reconstructive-surgery" className="section segmented-section segment-reconstructive mobile-screen mobile-transition">
        <div className="container">
          <div className="eyebrow signature-eyebrow"><span className="signature-script">Signature</span><span className="signature-kicker">Treatments</span></div>
          <h2>Reconstructive surgery</h2>
          <p className="section-intro">Focused reconstructive, lymphatic and scar surgery areas within Dr Sun’s practice.</p>
          <div className="grid-3 focus-grid reconstructive-photo-grid signature-photo-grid">{reconstructiveSignatureTreatments.map((x) => {
            const content = <><Image src={x.image} alt={x.alt} width={720} height={720} loading="eager" sizes="(max-width: 900px) 50vw, 33vw" /><div className="aesthetic-photo-overlay reconstructive-photo-overlay"><h3>{x.title}</h3>{x.href ? <span>View page</span> : null}</div></>;
            return x.href ? <a className="card linked-card focus-card aesthetic-photo-card reconstructive-photo-card" href={x.href} key={x.title}>{content}</a> : <div className="card focus-card aesthetic-photo-card reconstructive-photo-card" key={x.title}>{content}</div>;
          })}</div>
          <div className="section-actions"><a href="/reconstructive-surgery" className="btn btn-primary">View all reconstructive treatments</a></div>
        </div>
      </section>

      <section id="training" className="section segmented-section segment-training mobile-screen">
        <div className="container">
          <div className="eyebrow">Training & fellowships</div>
          <h2>Extensive international plastic surgery training.</h2>
          <p className="section-intro">Dr Sun’s plastic surgery training includes Singapore specialist training and focused international fellowship and mentorship exposure across Tokyo, South Korea, Japan, the United States, Italy, Türkiye and Mexico.</p>
          <div className="training-showcase">
            <div className="training-copy">
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
            <div className="training-image-strip" aria-hidden="true">
              <div><Image src="/images/mentors/takumi-yamamoto-lymphatic-group.jpg" alt="" width={900} height={700} /></div>
              <div><Image src="/images/mentors/david-sieber.jpg" alt="" width={900} height={700} /></div>
              <div><Image src="/images/mentors/moon-seop-choi.jpg" alt="" width={900} height={700} /></div>
            </div>
          </div>
        </div>
      </section>

      <section id="media" className="section segmented-section segment-media media-home-section mobile-transition">
        <div className="container">
          <div className="eyebrow">Media & public education</div>
          <h2>Selected media and education features.</h2>
          <p className="section-intro">Dr Jeremy Sun has contributed to public education and expert commentary on plastic, reconstructive and lymphatic surgery topics through selected media features, interviews and professional platforms.</p>
          <div className="grid-3 media-home-grid">
            <a className="card linked-card media-card media-visual-card" href="https://www.straitstimes.com/singapore/health/new-surgical-procedure-shown-to-improve-symptoms-of-moderate-alzheimers-disease" target="_blank" rel="noreferrer"><div className="media-card-image"><Image src="/images/media/straits-times-alzheimers-feature.webp" alt="The Straits Times feature image on lymphatic bypass research" width={1140} height={760} /></div><small>The Straits Times</small><h3>New surgery to treat Alzheimer’s disease</h3><p>Quoted as a clinical co-investigator on lymphatic bypass principles and brain waste-clearance research.</p><span>Read feature</span></a>
            <a className="card linked-card media-card media-visual-card" href="https://youtu.be/l0aKzwLbhKM?is=6yeOKGDbJLhfljmH" target="_blank" rel="noreferrer"><div className="media-card-image wide-media-image"><Image src="/images/media/cna-lymphedema-interview-screenshot.jpg" alt="CNA interview screenshot showing Dr Jeremy Sun discussing treatment for swelling of limbs" width={1280} height={500} /></div><small>CNA interview</small><h3>Treating swelling of limbs</h3><p>CNA interview segment on lymphedema screening and treatment, including CGH screening work for patients with limb swelling.</p><span>Watch feature</span></a>
            <a className="card linked-card media-card media-visual-card" href="https://www.straitstimes.com/opinion/forum/forum-all-medical-procedures-carry-risks-including-injectable-treatments" target="_blank" rel="noreferrer"><div className="media-card-image"><Image src="/images/media/straits-times-forum-injectables-risk.webp" alt="The Straits Times Forum article image for commentary on injectable treatment risks" width={1140} height={760} /></div><small>The Straits Times Forum</small><h3>All medical procedures carry risks</h3><p>Co-signed professional commentary on patient safety, injectable treatments and balanced decision-making in aesthetic care.</p><span>Read forum letter</span></a>
          </div>
        </div>
      </section>

      <section id="articles" className="section segmented-section segment-articles mobile-transition">
        <div className="container">
          <div className="eyebrow">Patient education</div>
          <h2>Educational articles</h2>
          <p className="section-intro">Clear, patient-focused articles on procedure planning, recovery considerations, risks and treatment options in plastic, reconstructive and lymphatic surgery.</p>
          <div className="grid-3">
            <a className="card blog-card linked-card" href="/plastic-surgeon-singapore"><small>Patient guide</small><h3>Plastic surgeon in Singapore: how to choose safely</h3><p>Guidance on specialist credentials, aesthetic versus reconstructive training, consultation questions and procedure planning.</p><span>Read guide</span></a>
            <a className="card blog-card linked-card" href="/top-plastic-surgeon-singapore"><small>Patient guide</small><h3>Top plastic surgeon in Singapore: what should patients look for?</h3><p>A compliance-safe guide to assessing training, safety, natural aesthetic judgement and realistic consultation planning.</p><span>Read guide</span></a>
            <a className="card blog-card linked-card" href="/lymphovenous-bypass-lva-surgery-singapore"><small>LVA surgery</small><h3>Lymphovenous bypass / LVA surgery in Singapore</h3><p>Focused patient information on suitability, imaging, recovery, cellulitis risk and compression after LVA.</p><span>Read page</span></a>
            <a className="card blog-card linked-card" href="/lymphedema-surgery-singapore"><small>Lymphedema</small><h3>Lymphedema surgery in Singapore</h3><p>Educational overview of lymphovenous bypass, assessment, infection risk and recovery.</p><span>Read page</span></a>
            <a className="card blog-card linked-card" href="/24-hour-rapid-recovery-breast-augmentation-singapore"><small>Breast augmentation</small><h3>24-hour rapid recovery breast augmentation</h3><p>Patient guide to Dr William Adams’ rapid recovery principles, suitability, early movement and realistic safety limits.</p><span>Read guide</span></a>
            <a className="card blog-card linked-card" href="/breast-aesthetic-surgery-singapore"><small>Breast aesthetic surgery</small><h3>Breast aesthetic surgery in Singapore</h3><p>Breast augmentation, lift, reduction, asymmetry correction, implant planning, screening and recovery considerations.</p><span>Read page</span></a>
            <a className="card blog-card linked-card" href="/breast-reconstruction-singapore"><small>Breast reconstruction</small><h3>Breast reconstruction in Singapore</h3><p>Patient information on implant-based reconstruction, DIEP flap reconstruction, timing, recovery and risks.</p><span>Read page</span></a>
            <a className="card blog-card linked-card" href="/asian-eyelid-surgery-singapore"><small>Asian eyelid surgery</small><h3>Asian eyelid surgery in Singapore</h3><p>Patient information on double eyelid surgery, ptosis assessment, recovery, risks and revision eyelid surgery.</p><span>Read page</span></a>
          </div>
        </div>
      </section>

      <section id="contact" className="section segmented-section segment-contact mobile-transition">
        <div className="container grid-2">
          <div>
            <div className="eyebrow">Appointments & referrals</div>
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
