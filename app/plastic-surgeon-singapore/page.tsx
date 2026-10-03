import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '../Navigation';
import ContactForm from '../ContactForm';
import { baseUrl, lastReviewedIso, physicianId, physicianJsonLd } from '../seoIdentity';

const pageUrl = `${baseUrl}/plastic-surgeon-singapore`;

export const metadata: Metadata = {
  title: 'Dr Jeremy Sun | Plastic Surgeon in Singapore & Patient Guide',
  description: 'Dr Jeremy Sun (Sun Mingfa Jeremy), Senior Consultant Plastic Surgeon in Singapore: professional profiles, procedure guides, Paragon consultation enquiries and safety questions.',
  keywords: [
    'plastic surgeon Singapore',
    'plastic surgery Singapore',
    'how to choose plastic surgeon Singapore',
    'aesthetic plastic surgeon Singapore',
    'reconstructive plastic surgeon Singapore',
    'Dr Jeremy Sun plastic surgeon'
  ],
  alternates: { canonical: '/plastic-surgeon-singapore' },
  openGraph: {
    title: 'Dr Jeremy Sun | Plastic Surgeon in Singapore & Patient Guide',
    description: 'Patient-focused guidance on choosing a plastic surgeon in Singapore and planning a safe consultation.',
    url: '/plastic-surgeon-singapore',
    type: 'article'
  }
};

const faqs = [
  {
    question: 'How do I check if a doctor is a plastic surgeon in Singapore?',
    answer: 'Patients can ask about specialist registration, plastic surgery training, hospital appointments, scope of practice and whether the doctor has experience in the procedure being considered. A formal consultation is needed before personalised advice.'
  },
  {
    question: 'Is a plastic surgeon the same as an aesthetic doctor?',
    answer: 'No. Plastic surgery is a surgical specialty that includes aesthetic surgery, reconstructive surgery, microsurgery, trauma, burns, breast reconstruction and other complex soft-tissue work. Aesthetic medicine may include non-surgical treatments but is not the same as specialist plastic surgery training.'
  },
  {
    question: 'What should I ask during a plastic surgery consultation?',
    answer: 'Ask about suitability, alternatives, anaesthesia, scars, recovery, risks, revision possibility, warning signs, follow-up, and what result is realistic for your anatomy.'
  },
  {
    question: 'Can online information tell me which procedure I need?',
    answer: 'No. Online information can help you prepare, but procedure choice depends on clinical assessment, anatomy, medical history and goals.'
  }
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Plastic Surgeon Singapore', item: pageUrl }
      ]
    },
    physicianJsonLd,
    {
      '@type': ['MedicalWebPage', 'ProfilePage'],
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: 'Dr Jeremy Sun: Plastic Surgeon in Singapore',
      headline: 'Dr Jeremy Sun: Plastic Surgeon in Singapore',
      description: metadata.description,
      inLanguage: 'en-SG',
      about: [
        'plastic surgeon Singapore',
        'plastic surgery Singapore',
        'aesthetic surgery Singapore',
        'reconstructive plastic surgery Singapore',
        'choosing a plastic surgeon'
      ],
      datePublished: lastReviewedIso,
      dateModified: '2026-10-04',
      lastReviewed: lastReviewedIso,
      author: { '@id': physicianId },
      reviewedBy: { '@id': physicianId },
      publisher: { '@id': physicianId },
      mainEntity: { '@id': physicianId }
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer }
      }))
    }
  ]
};

export default function PlasticSurgeonSingaporePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <article className="article-page">
        <section className="article-hero">
          <div className="container article-hero-grid">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Plastic surgeon Singapore</span></nav>
              <div className="eyebrow">Patient guide</div>
              <h1>Dr Jeremy Sun: Plastic Surgeon in Singapore</h1>
              <p className="lead">Professional background, procedure guides and consultation information, followed by practical questions to help patients assess specialist credentials, suitability and safety.</p>
              <div className="hero-actions">
                <a href="#enquire" className="btn btn-primary">Enquire about assessment</a>
                <Link href="/aesthetic-surgery" className="btn btn-ghost">View aesthetic procedures</Link>
              </div>
            </div>
            <aside className="article-summary-card">
              <h2>On this page</h2>
              <ul>
                <li><a href="#dr-jeremy-sun">About Dr Jeremy Sun</a></li>
                <li><a href="#evaluate">How to evaluate a surgeon</a></li>
                <li><a href="#credentials">Credentials</a></li>
                <li><a href="#aesthetic-reconstructive">Aesthetic and reconstructive training</a></li>
                <li><a href="#assessment-process">Assessment process</a></li>
                <li><a href="#scope">Scope of practice</a></li>
                <li><a href="#consultation">Consultation questions</a></li>
                <li><a href="#procedures">Related procedure pages</a></li>
                <li><a href="#profiles">Professional profiles</a></li>
                <li><a href="#faq">FAQs</a></li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section article-content">
          <div className="container article-narrow">
            <p>Choosing a plastic surgeon in Singapore should be more than choosing a procedure name, package or photograph. The safest decision starts with understanding the surgeon’s training, the procedure’s limits, the alternatives, and the risks that apply to your anatomy and health.</p>
            <p>Dr Jeremy Sun is a Senior Consultant Plastic Surgeon in Singapore with clinical practice spanning aesthetic surgery, reconstructive microsurgery, breast reconstruction, lymphedema surgery and lymphatic surgery. This page is intended as general educational information for patients preparing for consultation.</p>
            <p className="notice-text">This page does not replace consultation with a qualified medical practitioner. Suitability, risks, recovery and outcomes vary between individuals.</p>
            <div className="reviewer-card" aria-label="Medical review information">
              <strong>Clinically authored and reviewed by Dr Jeremy Sun</strong>
              <span>Senior Consultant Plastic Surgeon, Singapore • Last reviewed {lastReviewedIso}</span>
            </div>

            <section id="dr-jeremy-sun">
              <h2>Who is Dr Jeremy Sun?</h2>
              <p>Dr Jeremy Sun is a Senior Consultant Plastic Surgeon in Singapore, also listed professionally as <strong>Sun Mingfa Jeremy</strong> and on Lymphedema Asia as <strong>Dr Jeremy Sun Mingfa</strong>. These names refer to the same doctor. His practice includes aesthetic surgery, reconstructive microsurgery and lymphatic surgery.</p>
              <p>Patients can cross-check his background through his <a href="https://www.cgh.com.sg/doctor/plastic-surgery/sun-mingfa-jeremy">CGH doctor listing</a>, <Link href="/training-and-fellowships">training and fellowships</Link>, and <Link href="/publications">selected publications</Link>. His <a href="https://lymphedasia.com/dr-jeremy-sun-lymphedema-specialist/">Lymphedema Asia profile</a> focuses on lymphoedema assessment and lymphatic surgery.</p>
              <h3>Procedure-specific patient information</h3>
              <p>The following guides explain the options, suitability, risks and recovery considerations to discuss during an individual consultation.</p>
              <div className="related-grid">
                <Link href="/rib-rhinoplasty-singapore" className="related-card"><small>Nose surgery</small><strong>Rib cartilage rhinoplasty</strong><span>Graft options, donor site and recovery</span></Link>
                <Link href="/eyebag-removal-lower-blepharoplasty-singapore" className="related-card"><small>Lower eyelids</small><strong>Eyebag removal / lower blepharoplasty</strong><span>Transconjunctival approach and individual planning</span></Link>
                <Link href="/24-hour-rapid-recovery-breast-augmentation-singapore" className="related-card"><small>Breast surgery</small><strong>Breast augmentation recovery planning</strong><span>Early activity, restrictions and individual variability</span></Link>
                <Link href="/face-neck-lift-singapore" className="related-card"><small>Facial surgery</small><strong>Facelift and neck lift</strong><span>Suitability, scars, alternatives and recovery</span></Link>
                <Link href="/body-contouring-liposuction-singapore" className="related-card"><small>Body contouring</small><strong>Liposuction</strong><span>Fat, skin quality and treatment limits</span></Link>
                <Link href="/tummy-tuck-singapore" className="related-card"><small>Abdominal surgery</small><strong>Tummy tuck / abdominoplasty</strong><span>Skin, abdominal wall and recovery considerations</span></Link>
              </div>
              <h3>Where can patients enquire about a private consultation?</h3>
              <p>Private consultation enquiries are handled through Astrid Plastic Surgery at <strong>290 Orchard Road, #09-01/02, Paragon Medical, Singapore 238859</strong>. Call <a href="tel:+6565303573">+65 6530 3573</a> or use the <Link href="/#contact">consultation enquiry form</Link>. View <a href="https://www.google.com/maps/place/Dr+Jeremy+Sun/@1.3039053,103.8355763,17z/data=!3m1!4b1!4m6!3m5!1s0x31da19469f2612cd:0xcba381971e77822e!8m2!3d1.3039053!4d103.8355763!16s%2Fg%2F11nw796mdz?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D">Dr Jeremy Sun’s Google Maps listing</a> for directions.</p>
            </section>

            <section id="evaluate">
              <h2>How should patients evaluate a plastic surgeon in Singapore?</h2>
              <p>Patients searching for a plastic surgeon in Singapore often compare credentials, procedure experience, consultation style and safety systems. A useful starting point is to check whether the doctor has recognised specialist plastic surgery training, whether the planned procedure is within the surgeon’s regular scope, and whether consultation includes a balanced discussion of suitability, alternatives, recovery and risks.</p>
              <ul>
                <li>Check MOH specialist accreditation and plastic surgery training background.</li>
                <li>Ask about relevant reconstructive and aesthetic experience for the procedure being considered.</li>
                <li>Clarify where surgery would be performed, the anaesthesia plan, follow-up arrangements and safety protocols.</li>
                <li>Discuss realistic benefits, limitations, scars, recovery, possible complications and non-surgical or alternative options.</li>
                <li>Be cautious with advertising that implies assured outcomes or unsupported “best” or “top” claims.</li>
              </ul>
            </section>

            <section id="credentials">
              <h2>Check specialist plastic surgery credentials</h2>
              <p>Patients should understand whether the doctor is trained as a specialist in plastic surgery and whether the surgeon’s experience matches the procedure being considered. Plastic surgery training covers both aesthetic and reconstructive problems, including soft-tissue handling, scars, wounds, breast surgery, facial surgery, microsurgery and revision problems.</p>
              <ul>
                <li>Ask about specialist registration and plastic surgery training.</li>
                <li>Look for hospital appointments, academic or teaching roles, and relevant surgical focus areas.</li>
                <li>Ask how often the surgeon manages the type of problem you have, including revision or complication scenarios.</li>
                <li>Be cautious with claims that imply assured results or superiority without objective context.</li>
              </ul>
            </section>

            <section id="aesthetic-reconstructive">
              <h2>Aesthetic surgery and reconstructive judgement both matter</h2>
              <p>Aesthetic surgery requires judgement about proportion, scar placement, tissue quality and patient goals. Reconstructive plastic surgery adds experience in anatomy, wound healing, microsurgery, trauma, cancer reconstruction and complex tissue problems. For many patients, the two skill sets overlap.</p>
              <p>For example, breast aesthetic surgery should still consider breast health and long-term follow-up. Rhinoplasty should consider nasal function as well as shape. Body contouring should distinguish fat, skin laxity and muscle separation. Eyelid surgery should consider ptosis, asymmetry and eyelid function.</p>
            </section>

            <section id="assessment-process">
              <h2>What a useful plastic surgery consultation should cover</h2>
              <p>Patients who do not already know Dr Jeremy Sun often need to understand the assessment process before deciding whether to book. A consultation should clarify the patient’s concern, medical history, anatomy, treatment goals and whether surgery is actually the right option.</p>
              <p>In Dr Sun’s practice, the discussion is framed around suitability and treatment selection rather than a one-size-fits-all procedure. Depending on the concern, this may include examining tissue quality, scars, asymmetry, breast or facial proportions, body-contouring factors, previous surgery, wound-healing risks and realistic recovery needs.</p>
              <ul>
                <li><strong>Fit:</strong> whether the procedure matches the patient’s anatomy, goals and health.</li>
                <li><strong>Options:</strong> surgical, non-surgical or staged alternatives where relevant.</li>
                <li><strong>Limits:</strong> what surgery can improve, what it cannot change, and where individual variation matters.</li>
                <li><strong>Safety:</strong> anaesthesia, facility, recovery, warning signs and follow-up planning.</li>
              </ul>
            </section>

            <section id="scope">
              <h2>Plastic, reconstructive and aesthetic surgery scope</h2>
              <p>Patients searching for a plastic surgeon in Singapore may be considering aesthetic, reconstructive, or medically indicated procedures. Dr Jeremy Sun’s practice spans plastic, reconstructive and aesthetic surgery, with patient education covering breast, body, facial aesthetic surgery, reconstructive microsurgery and lymphatic surgery.</p>
              <p>Suitability, risks, recovery and expected outcomes should be assessed during an individual consultation. This guide links to procedure-specific education pages so patients can prepare questions before seeking personalised medical advice.</p>
              <div className="related-grid">
                <Link href="/breast-augmentation-singapore" className="related-card"><small>Breast aesthetics</small><strong>Breast Augmentation Singapore</strong><span>Read page</span></Link>
                <Link href="/tummy-tuck-singapore" className="related-card"><small>Body contouring</small><strong>Abdominoplasty / Tummy Tuck Singapore</strong><span>Read page</span></Link>
                <Link href="/lymphovenous-bypass-lva-surgery-singapore" className="related-card"><small>Lymphatic surgery</small><strong>LVB / LVA Lymphovenous Bypass Surgery</strong><span>Read page</span></Link>
              </div>
            </section>

            <section id="consultation">
              <h2>Questions to ask before plastic surgery</h2>
              <ul>
                <li>Am I suitable for this procedure, or would another option be safer or more realistic?</li>
                <li>What are the limits created by my anatomy, skin quality, scars or medical history?</li>
                <li>Where will the scars be, and how do they usually mature?</li>
                <li>What anaesthesia, downtime, activity restrictions and follow-up are expected?</li>
                <li>What complications should prompt urgent medical attention?</li>
                <li>What revision risks or long-term maintenance should I understand?</li>
              </ul>
            </section>

            <section id="procedures">
              <h2>Related plastic surgery pages</h2>
              <div className="related-grid">
                <Link href="/top-plastic-surgeon-singapore" className="related-card"><small>Patient guide</small><strong>Top Plastic Surgeon in Singapore: How to Choose Safely</strong><span>Read page</span></Link>
                <Link href="/asian-rhinoplasty-singapore" className="related-card"><small>Aesthetic surgery</small><strong>Asian Rhinoplasty in Singapore</strong><span>Read page</span></Link>
                <Link href="/asian-eyelid-surgery-singapore" className="related-card"><small>Aesthetic surgery</small><strong>Asian Eyelid Surgery in Singapore</strong><span>Read page</span></Link>
                <Link href="/breast-augmentation-singapore" className="related-card"><small>Aesthetic surgery</small><strong>Breast Augmentation in Singapore</strong><span>Read page</span></Link>
                <Link href="/breast-aesthetic-surgery-singapore" className="related-card"><small>Aesthetic surgery</small><strong>Breast Aesthetic Surgery in Singapore</strong><span>Read page</span></Link>
                <Link href="/tummy-tuck-singapore" className="related-card"><small>Aesthetic surgery</small><strong>Tummy Tuck in Singapore</strong><span>Read page</span></Link>
                <Link href="/body-contouring-liposuction-singapore" className="related-card"><small>Aesthetic surgery</small><strong>Body Contouring & Liposuction in Singapore</strong><span>Read page</span></Link>
                <Link href="/face-neck-lift-singapore" className="related-card"><small>Aesthetic surgery</small><strong>Face and Neck Lift in Singapore</strong><span>Read page</span></Link>
                <Link href="/breast-reconstruction-singapore" className="related-card"><small>Reconstructive surgery</small><strong>Breast Reconstruction in Singapore</strong><span>Read page</span></Link>
              </div>
            </section>

            <section id="profiles">
              <h2>Professional profiles and public education links</h2>
              <p>External and institutional profiles can help patients cross-check a surgeon’s public appointments, hospital association and professional education activity.</p>
              <div className="related-grid">
                <a href="https://www.cgh.com.sg/doctor/plastic-surgery/sun-mingfa-jeremy" target="_blank" rel="noreferrer" className="related-card"><small>Specialist listing</small><strong>CGH plastic surgery doctor listing</strong><span>View external listing</span></a>
                <a href="https://www.singhealthdukenus.com.sg/conference/sdc2025/our-speakers/Jeremy-Sun" target="_blank" rel="noreferrer" className="related-card"><small>Education profile</small><strong>SingHealth Duke-NUS speaker profile</strong><span>View external profile</span></a>
                <Link href="/publications" className="related-card"><small>Research</small><strong>Selected publications</strong><span>View publications</span></Link>
                <Link href="/media" className="related-card"><small>Media & education</small><strong>Selected public education features</strong><span>View media page</span></Link>
              </div>
            </section>

            <h2 id="faq">FAQs</h2>
            {faqs.map((faq) => (
              <section key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </section>
            ))}

            <h2 id="enquire">Enquire about assessment</h2>
            <p>If you would like to discuss whether a procedure is relevant to your situation, please submit an enquiry. A formal consultation is needed before personalised advice can be given.</p>
            <ContactForm />
          </div>
        </section>
      </article>
    </main>
  );
}
