import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '../Navigation';
import ContactForm from '../ContactForm';
import { baseUrl, lastReviewedIso, physicianId, physicianJsonLd } from '../seoIdentity';

const pageUrl = `${baseUrl}/top-plastic-surgeon-singapore`;

export const metadata: Metadata = {
  title: 'Top Plastic Surgeon in Singapore: How to Choose Safely',
  description: 'A compliance-safe patient guide to choosing a top plastic surgeon in Singapore: credentials, specialist training, natural aesthetic judgement, safety questions and realistic consultation planning.',
  keywords: [
    'top plastic surgeon Singapore',
    'plastic surgeon Singapore',
    'how to choose plastic surgeon Singapore',
    'aesthetic plastic surgeon Singapore',
    'Dr Jeremy Sun plastic surgeon'
  ],
  alternates: { canonical: '/top-plastic-surgeon-singapore' },
  openGraph: {
    title: 'Top Plastic Surgeon in Singapore: How to Choose Safely',
    description: 'How patients can assess plastic surgery credentials, safety, judgement and suitability without relying on unsupported superiority claims.',
    url: '/top-plastic-surgeon-singapore',
    type: 'article',
    images: [{ url: '/images/dr-jeremy-sun-hero.jpg', width: 896, height: 1280, alt: 'Dr Jeremy Sun, plastic surgeon in Singapore' }]
  }
};

const criteria = [
  {
    title: 'Specialist plastic surgery training',
    text: 'Plastic surgery is a surgical specialty. Patients should look beyond procedure menus and ask about specialist training, hospital appointments, academic roles and experience in both aesthetic and reconstructive surgery.'
  },
  {
    title: 'Aesthetic judgement, not trend-following',
    text: 'Premium aesthetic surgery is not about copying a social-media face. It requires assessment of proportion, tissue quality, facial or body structure, scars, asymmetry and what is realistic for the individual patient.'
  },
  {
    title: 'Safety and suitability first',
    text: 'A careful surgeon should be willing to advise against surgery, delay surgery, or recommend a different option when the requested procedure is not suitable or the risks outweigh the expected benefit.'
  },
  {
    title: 'Clear discussion of limits and risks',
    text: 'No operation is risk-free and no result can be assured. A good consultation explains scars, recovery, revision possibility, warning signs, follow-up and realistic outcome ranges.'
  },
  {
    title: 'Evidence-informed planning',
    text: 'Credentials, publications, peer education, fellowship training and a structured consultation process help patients distinguish expertise from marketing claims.'
  }
];

const faqs = [
  {
    question: 'Who is the top plastic surgeon in Singapore?',
    answer: 'There is no single official “top plastic surgeon” list that applies to every patient or procedure. A safer approach is to assess specialist credentials, relevant procedure experience, hospital appointments, safety standards, communication style and whether the surgeon gives realistic advice for your anatomy and goals.'
  },
  {
    question: 'Can a surgeon claim to be the best plastic surgeon?',
    answer: 'Patients should be cautious with unsupported “best” claims. Medical decisions should be based on verifiable credentials, careful consultation, transparent discussion of risks and suitability for the specific procedure being considered.'
  },
  {
    question: 'What makes a plastic surgery consultation feel premium?',
    answer: 'A premium consultation is not a hard sell. It should be discreet, unhurried, medically grounded and selective: the surgeon should clarify goals, examine anatomy, discuss alternatives and explain when surgery may not be appropriate.'
  },
  {
    question: 'What should I ask before choosing a plastic surgeon in Singapore?',
    answer: 'Ask about specialist training, experience with the procedure, scars, anaesthesia, recovery, possible complications, revision risks, follow-up plan and what result is realistic for your individual anatomy.'
  }
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Top Plastic Surgeon Singapore', item: pageUrl }
      ]
    },
    physicianJsonLd,
    {
      '@type': 'MedicalWebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: 'Top Plastic Surgeon in Singapore: How to Choose Safely',
      headline: 'Top Plastic Surgeon in Singapore: How to Choose Safely',
      description: metadata.description,
      inLanguage: 'en-SG',
      about: ['top plastic surgeon Singapore', 'plastic surgeon Singapore', 'aesthetic surgery Singapore', 'choosing a plastic surgeon'],
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

export default function TopPlasticSurgeonSingaporePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <article className="article-page">
        <section className="article-hero">
          <div className="container article-hero-grid">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Top plastic surgeon Singapore</span></nav>
              <div className="eyebrow">Patient guide</div>
              <h1>Top Plastic Surgeon in Singapore: How to Choose Safely</h1>
              <p className="lead">Many patients search for the “top” plastic surgeon in Singapore. A safer approach is to understand what markers of specialist training, judgement, safety and suitability actually matter.</p>
              <div className="hero-actions">
                <a href="#enquire" className="btn btn-primary">Enquire about assessment</a>
                <Link href="/plastic-surgeon-singapore" className="btn btn-ghost">Read credential guide</Link>
              </div>
            </div>
            <aside className="article-summary-card">
              <h2>On this page</h2>
              <ul>
                <li><a href="#meaning">What “top” should mean</a></li>
                <li><a href="#criteria">Selection criteria</a></li>
                <li><a href="#approach">A premium consultation approach</a></li>
                <li><a href="#procedures">Procedure guides</a></li>
                <li><a href="#faq">FAQs</a></li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section article-content">
          <div className="container article-narrow">
            <p>Search results and advertisements can make plastic surgery decisions feel confusing. The phrase “top plastic surgeon” is common online, but patients should be cautious about unsupported rankings or claims of superiority. The better question is whether a surgeon has the right training, judgement and experience for the specific problem you want assessed.</p>
            <p>Dr Jeremy Sun is a Senior Consultant Plastic Surgeon in Singapore with clinical practice spanning aesthetic surgery, reconstructive microsurgery, breast reconstruction, lymphedema surgery and lymphatic surgery. This page is educational and is designed to help patients prepare for a safe, realistic consultation.</p>
            <p className="notice-text">This page does not replace medical consultation. Suitability, risks, recovery and possible outcomes vary between individuals. Results cannot be assured.</p>
            <div className="reviewer-card" aria-label="Medical review information">
              <strong>Clinically authored and reviewed by Dr Jeremy Sun</strong>
              <span>Senior Consultant Plastic Surgeon, Singapore • Last reviewed {lastReviewedIso}</span>
            </div>

            <section id="meaning">
              <h2>What should “top plastic surgeon” mean?</h2>
              <p>In a medical context, “top” should not mean the loudest marketing, the most aggressive promotion or the most dramatic before-and-after photograph. It should point to markers that patients can discuss and verify: specialist plastic surgery training, experience with the relevant procedure, careful risk explanation, realistic planning and appropriate follow-up.</p>
              <p>For many patients, the right surgeon is not simply the person who says yes. It is the surgeon who can explain when surgery may help, when it may not, and what trade-offs are involved.</p>
            </section>

            <section id="criteria">
              <h2>Criteria patients can use when comparing plastic surgeons in Singapore</h2>
              <div className="related-grid">
                {criteria.map((item) => (
                  <div className="related-card" key={item.title}>
                    <small>Selection factor</small>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="approach">
              <h2>A premium plastic surgery approach is selective, not sales-driven</h2>
              <p>Premium medical care should feel different from discount-driven cosmetic marketing. It should be discreet, structured and careful. Consultation should begin with your anatomy, health, goals and concerns — not a package, promotion or one-size-fits-all procedure.</p>
              <ul>
                <li>Natural-looking results should be planned around proportion, tissue quality and long-term ageing.</li>
                <li>Procedure choice should follow assessment rather than trend-based requests.</li>
                <li>Risks, scars, recovery and revision possibility should be discussed before a decision is made.</li>
                <li>Patients should have room to consider the recommendation without pressure.</li>
              </ul>
            </section>

            <section id="procedures">
              <h2>Related plastic surgery guides</h2>
              <div className="related-grid">
                <Link href="/plastic-surgeon-singapore" className="related-card"><small>Core guide</small><strong>Plastic Surgeon in Singapore: How to Choose Safely</strong><span>Read page</span></Link>
                <Link href="/aesthetic-surgery" className="related-card"><small>Aesthetic surgery</small><strong>Aesthetic Plastic Surgery in Singapore</strong><span>Read page</span></Link>
                <Link href="/asian-rhinoplasty-singapore" className="related-card"><small>Face</small><strong>Asian Rhinoplasty in Singapore</strong><span>Read page</span></Link>
                <Link href="/asian-eyelid-surgery-singapore" className="related-card"><small>Eyes</small><strong>Asian Eyelid Surgery in Singapore</strong><span>Read page</span></Link>
                <Link href="/face-neck-lift-singapore" className="related-card"><small>Facial ageing</small><strong>Face and Neck Lift in Singapore</strong><span>Read page</span></Link>
                <Link href="/breast-aesthetic-surgery-singapore" className="related-card"><small>Breast</small><strong>Breast Aesthetic Surgery in Singapore</strong><span>Read page</span></Link>
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
            <p>If you would like to discuss whether plastic surgery is relevant to your situation, please submit an enquiry. A formal consultation is needed before personalised advice can be given.</p>
            <ContactForm />
          </div>
        </section>
      </article>
    </main>
  );
}
