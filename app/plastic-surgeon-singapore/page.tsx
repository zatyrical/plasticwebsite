import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '../Navigation';
import ContactForm from '../ContactForm';
import { baseUrl, lastReviewedIso, physicianId, physicianJsonLd } from '../seoIdentity';

const pageUrl = `${baseUrl}/plastic-surgeon-singapore`;

export const metadata: Metadata = {
  title: 'Plastic Surgeon in Singapore: How to Choose Safely',
  description: 'A patient guide to choosing a plastic surgeon in Singapore, including specialist credentials, aesthetic versus reconstructive training, procedure fit, safety questions and consultation planning.',
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
    title: 'Plastic Surgeon in Singapore: How to Choose Safely',
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
      '@type': 'MedicalWebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: 'Plastic Surgeon in Singapore: How to Choose Safely',
      headline: 'Plastic Surgeon in Singapore: How to Choose Safely',
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
      dateModified: lastReviewedIso,
      lastReviewed: lastReviewedIso,
      author: { '@id': physicianId },
      reviewedBy: { '@id': physicianId },
      publisher: { '@id': physicianId }
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
              <h1>Plastic Surgeon in Singapore: How to Choose Safely</h1>
              <p className="lead">A practical guide to specialist credentials, procedure fit, consultation planning and safety questions when considering plastic surgery in Singapore.</p>
              <div className="hero-actions">
                <a href="#enquire" className="btn btn-primary">Enquire about assessment</a>
                <Link href="/aesthetic-surgery" className="btn btn-ghost">View aesthetic procedures</Link>
              </div>
            </div>
            <aside className="article-summary-card">
              <h2>On this page</h2>
              <ul>
                <li><a href="#credentials">Credentials</a></li>
                <li><a href="#aesthetic-reconstructive">Aesthetic and reconstructive training</a></li>
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

            <section id="credentials">
              <h2>Check specialist plastic surgery credentials</h2>
              <p>Patients should understand whether the doctor is trained as a specialist in plastic surgery and whether the surgeon’s experience matches the procedure being considered. Plastic surgery training covers both aesthetic and reconstructive problems, including soft-tissue handling, scars, wounds, breast surgery, facial surgery, microsurgery and revision problems.</p>
              <ul>
                <li>Ask about specialist registration and plastic surgery training.</li>
                <li>Look for hospital appointments, academic or teaching roles, and relevant surgical focus areas.</li>
                <li>Ask how often the surgeon manages the type of problem you have, including revision or complication scenarios.</li>
                <li>Be cautious with claims that imply guaranteed results or superiority without objective context.</li>
              </ul>
            </section>

            <section id="aesthetic-reconstructive">
              <h2>Aesthetic surgery and reconstructive judgement both matter</h2>
              <p>Aesthetic surgery requires judgement about proportion, scar placement, tissue quality and patient goals. Reconstructive plastic surgery adds experience in anatomy, wound healing, microsurgery, trauma, cancer reconstruction and complex tissue problems. For many patients, the two skill sets overlap.</p>
              <p>For example, breast aesthetic surgery should still consider breast health and long-term follow-up. Rhinoplasty should consider nasal function as well as shape. Body contouring should distinguish fat, skin laxity and muscle separation. Eyelid surgery should consider ptosis, asymmetry and eyelid function.</p>
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
                <Link href="/asian-rhinoplasty-singapore" className="related-card"><small>Aesthetic surgery</small><strong>Asian Rhinoplasty in Singapore</strong><span>Read page</span></Link>
                <Link href="/asian-eyelid-surgery-singapore" className="related-card"><small>Aesthetic surgery</small><strong>Asian Eyelid Surgery in Singapore</strong><span>Read page</span></Link>
                <Link href="/breast-aesthetic-surgery-singapore" className="related-card"><small>Aesthetic surgery</small><strong>Breast Aesthetic Surgery in Singapore</strong><span>Read page</span></Link>
                <Link href="/body-contouring-liposuction-singapore" className="related-card"><small>Aesthetic surgery</small><strong>Body Contouring & Liposuction in Singapore</strong><span>Read page</span></Link>
                <Link href="/face-neck-lift-singapore" className="related-card"><small>Aesthetic surgery</small><strong>Face and Neck Lift in Singapore</strong><span>Read page</span></Link>
                <Link href="/breast-reconstruction-singapore" className="related-card"><small>Reconstructive surgery</small><strong>Breast Reconstruction in Singapore</strong><span>Read page</span></Link>
              </div>
            </section>

            <section id="profiles">
              <h2>Professional profiles and public education links</h2>
              <p>External and institutional profiles can help patients cross-check a surgeon’s public appointments, hospital association and professional education activity.</p>
              <div className="related-grid">
                <a href="https://www.cgh.com.sg/profile/Sun-Mingfa-Jeremy" target="_blank" rel="noreferrer" className="related-card"><small>Hospital profile</small><strong>Changi General Hospital profile</strong><span>View external profile</span></a>
                <a href="https://www.cgh.com.sg/doctor/plastic-surgery/sun-mingfa-jeremy" target="_blank" rel="noreferrer" className="related-card"><small>Specialist listing</small><strong>CGH plastic surgery doctor listing</strong><span>View external listing</span></a>
                <a href="https://www.singhealthdukenus.com.sg/conference/sdc2025/our-speakers/Jeremy-Sun" target="_blank" rel="noreferrer" className="related-card"><small>Education profile</small><strong>SingHealth Duke-NUS speaker profile</strong><span>View external profile</span></a>
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
