import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '../ContactForm';
import Navigation from '../Navigation';
import { baseUrl, lastReviewedIso, physicianId, physicianJsonLd } from '../seoIdentity';

const slug = 'breast-implant-illness-singapore-evidence';
const title = 'Breast Implant Illness: Is It Real? What the Evidence Says';
const description = 'A balanced, evidence-based Singapore patient guide to breast implant illness symptoms, FDA safety communications, explantation outcomes, and what remains uncertain.';
const articleUrl = `${baseUrl}/${slug}`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'breast implant illness Singapore',
    'BII Singapore',
    'breast implant illness symptoms',
    'breast implants autoimmune symptoms',
    'breast implant removal Singapore',
    'breast augmentation Singapore safety'
  ],
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title,
    description,
    url: `/${slug}`,
    type: 'article',
    images: [
      {
        url: '/images/aesthetic-breast/breast-implant-illness-2025-systematic-review-infographic.png',
        width: 1600,
        height: 900,
        alt: 'Infographic summarising 2025 systematic review findings on breast implant illness'
      }
    ]
  }
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is breast implant illness real?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Breast implant illness describes systemic symptoms reported by some patients with breast implants. The symptoms patients report are real, but the exact causal relationship between implants and symptoms remains scientifically unsettled and may differ between individuals.'
      }
    },
    {
      '@type': 'Question',
      name: 'What symptoms are reported with breast implant illness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Commonly reported symptoms include fatigue, brain fog, joint or muscle pain, rashes, sleep disturbance, hair loss, anxiety, and autoimmune-like symptoms. These symptoms can also have other medical causes, so proper assessment is important.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does removing breast implants cure breast implant illness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some patients report improvement after explantation, and a 2025 systematic review reported symptom improvement in many patients. However, improvement is not guaranteed and explantation should not be presented as a certain cure for systemic symptoms.'
      }
    },
    {
      '@type': 'Question',
      name: 'Should I avoid breast augmentation because of breast implant illness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The decision should be individualised. Patients should understand the uncertainty, discuss personal and family autoimmune history, consider the risks and benefits of implants, and make a decision after consultation with a qualified plastic surgeon.'
      }
    }
  ]
};

const medicalArticleJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Aesthetic Surgery', item: `${baseUrl}/aesthetic-surgery` },
        { '@type': 'ListItem', position: 3, name: 'Breast Aesthetic Surgery', item: `${baseUrl}/breast-aesthetic-surgery-singapore` },
        { '@type': 'ListItem', position: 4, name: title, item: articleUrl }
      ]
    },
    physicianJsonLd,
    {
      '@type': 'MedicalWebPage',
      '@id': `${articleUrl}#webpage`,
      url: articleUrl,
      name: title,
      headline: title,
      description,
      inLanguage: 'en-SG',
      isPartOf: { '@type': 'WebSite', name: 'Dr Jeremy Sun Plastic Surgery', url: baseUrl },
      about: ['breast implant illness', 'breast implants', 'breast augmentation', 'breast implant removal', 'aesthetic breast surgery'],
      mentions: [
        { '@type': 'MedicalProcedure', name: 'Breast augmentation' },
        { '@type': 'MedicalProcedure', name: 'Breast implant removal' },
        { '@type': 'ScholarlyArticle', name: 'Breast Implant Illness: Symptoms, Outcomes with Explantation and Potential Etiologies—A Systematic Review and Meta-analysis', url: 'https://doi.org/10.1007/s00266-025-05142-x' }
      ],
      datePublished: lastReviewedIso,
      dateModified: lastReviewedIso,
      lastReviewed: lastReviewedIso,
      author: { '@id': physicianId },
      reviewedBy: { '@id': physicianId },
      publisher: { '@id': physicianId }
    }
  ]
};

export default function BreastImplantIllnessPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalArticleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navigation />
      <article className="article-page">
        <section className="article-hero">
          <div className="container article-hero-grid">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span>/</span><Link href="/aesthetic-surgery">Aesthetic surgery</Link><span>/</span><Link href="/breast-aesthetic-surgery-singapore">Breast aesthetic surgery</Link>
              </nav>
              <div className="eyebrow">Breast implant safety</div>
              <h1>{title}</h1>
              <p className="lead">A respectful, evidence-based guide for patients who are worried about systemic symptoms, autoimmune-like concerns, and the uncertainties around breast implants.</p>
              <div className="hero-actions">
                <a href="#enquire" className="btn btn-primary">Enquire about assessment</a>
                <Link href="/breast-augmentation-singapore" className="btn btn-ghost">Breast augmentation page</Link>
              </div>
            </div>
            <aside className="article-summary-card">
              <h2>On this page</h2>
              <ul>
                <li><a href="#short-answer">Short answer</a></li>
                <li><a href="#symptoms">Reported symptoms</a></li>
                <li><a href="#fda">What regulators say</a></li>
                <li><a href="#evidence">What studies show</a></li>
                <li><a href="#explantation">Does explantation help?</a></li>
                <li><a href="#before-augmentation">Before augmentation</a></li>
                <li><a href="#faq">FAQs</a></li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section article-content">
          <div className="container article-narrow">
            <p className="notice-text">This article provides general medical information and does not replace consultation with a qualified medical practitioner. Systemic symptoms should be assessed properly because many medical conditions can cause similar symptoms.</p>
            <div className="reviewer-card" aria-label="Medical review information">
              <strong>Clinically authored and reviewed by Dr Jeremy Sun</strong>
              <span>Senior Consultant Plastic Surgeon, Singapore • Last reviewed {lastReviewedIso}</span>
            </div>

            <section id="short-answer">
              <h2>Short answer: is breast implant illness real?</h2>
              <p>The symptoms reported by patients are real. Many women describe fatigue, brain fog, joint pain, muscle pain, rashes, sleep disturbance, hair loss, anxiety, or autoimmune-like symptoms after breast implant surgery. These experiences should not be dismissed.</p>
              <p>The more difficult question is whether breast implants are the proven cause in every patient who has these symptoms. At present, breast implant illness, or BII, does not have one universally accepted diagnostic test, one established disease mechanism, or one predictable treatment outcome. The evidence suggests a complex picture rather than a simple yes-or-no answer.</p>
            </section>

            <figure className="article-hero-image-card">
              <Image src="/images/aesthetic-breast/breast-implant-illness-2025-systematic-review-infographic.png" alt="Infographic summarising 2025 systematic review findings on breast implant illness symptoms and explantation outcomes" width={1600} height={900} sizes="(max-width: 900px) 100vw, 900px" />
              <figcaption>Summary of findings from Ferreira et al.’s 2025 systematic review and meta-analysis on breast implant illness symptoms and outcomes after explantation. Data source: <em>Aesthetic Plastic Surgery</em>, 2025;49:6600–6620. doi:10.1007/s00266-025-05142-x.</figcaption>
            </figure>

            <section id="symptoms">
              <h2>What symptoms are reported with breast implant illness?</h2>
              <p>BII is a patient-reported term used to describe systemic symptoms that some women attribute to breast implants. Commonly reported symptoms include:</p>
              <ul>
                <li>fatigue or low energy</li>
                <li>brain fog, memory difficulty or poor concentration</li>
                <li>joint pain or muscle aches</li>
                <li>rashes or skin symptoms</li>
                <li>sleep disturbance</li>
                <li>hair loss</li>
                <li>anxiety, mood changes or reduced wellbeing</li>
                <li>autoimmune-like symptoms or concerns about immune dysregulation</li>
              </ul>
              <p>These symptoms can be distressing. They can also overlap with thyroid disease, autoimmune conditions, nutritional deficiencies, chronic fatigue syndromes, medication effects, stress, poor sleep and other medical issues. That is why careful medical assessment matters.</p>
            </section>

            <section id="fda">
              <h2>What do regulators say?</h2>
              <p>The United States Food and Drug Administration recognises that some patients with breast implants report systemic symptoms such as fatigue, memory or concentration problems, joint and muscle pain, hair loss, weight changes, anxiety and depression. These symptoms have been reported with all types of breast implants.</p>
              <p>However, adverse-event reports and patient reports do not by themselves prove causation. They are important safety signals, but they cannot determine how often symptoms are caused by implants, which patients are most vulnerable, or whether implant removal will predictably resolve symptoms.</p>
              <p>External reference: <a href="https://www.fda.gov/medical-devices/breast-implants/medical-device-reports-systemic-symptoms-women-breast-implants" target="_blank" rel="noreferrer">FDA information on medical device reports of systemic symptoms in women with breast implants</a>.</p>
            </section>

            <section id="evidence">
              <h2>What does the research show?</h2>
              <p>A 2025 systematic review and meta-analysis by Ferreira, Barros and Marques reviewed 33 studies involving 6048 women with BII symptoms. The authors reported that 81.9% of patients experienced symptom improvement after explantation. Fatigue, joint pain and muscle pain were among the most commonly reported symptoms.</p>
              <p>The same review discussed possible contributors including immune dysregulation, chronic inflammation, microbial or biofilm-related factors, and biopsychosocial factors. These possibilities are biologically plausible in some patients, but they do not mean that every patient’s systemic symptoms are caused by implants.</p>
              <p>External reference: <a href="https://doi.org/10.1007/s00266-025-05142-x" target="_blank" rel="noreferrer">Ferreira S, Barros AS, Marques M. Breast Implant Illness: Symptoms, Outcomes with Explantation and Potential Etiologies—A Systematic Review and Meta-analysis</a>.</p>
            </section>

            <section id="explantation">
              <h2>Does removing implants help?</h2>
              <p>Some patients report meaningful improvement after implant removal. For a patient who strongly believes implants are contributing to symptoms, explantation may be part of a shared decision after proper counselling.</p>
              <p>But explantation should not be marketed as a guaranteed cure. Studies vary in design, patient selection, symptom measurement, capsulectomy technique, follow-up duration and expectation effects. Some patients improve, some improve partially, and some may continue to have symptoms because another medical condition is present.</p>
              <p>The decision should consider implant-related findings such as rupture, capsular contracture, pain, cosmetic concerns, anxiety about implants, personal values and the risks of further surgery.</p>
            </section>

            <section id="before-augmentation">
              <h2>How should patients think about BII before breast augmentation?</h2>
              <p>Patients considering <Link href="/breast-augmentation-singapore">breast augmentation</Link> should receive balanced information. Breast implants can be appropriate for many women, but they are not lifetime devices and they carry known risks such as capsular contracture, rupture, infection, implant malposition, altered sensation, scarring, need for revision surgery and rare implant-associated conditions.</p>
              <p>It is reasonable to discuss:</p>
              <ul>
                <li>personal or family history of autoimmune disease</li>
                <li>previous unexplained systemic symptoms</li>
                <li>comfort with long-term implant surveillance and possible future revision surgery</li>
                <li>implant type, size and expected trade-offs</li>
                <li>non-implant alternatives where relevant</li>
              </ul>
              <p>A responsible consultation should neither dismiss patient concerns nor use fear-based marketing. The aim is informed consent: understanding both the benefits and the uncertainties before deciding.</p>
            </section>

            <section id="when-to-seek-help">
              <h2>When should someone seek medical review?</h2>
              <p>Patients with systemic symptoms should consider review by a medical practitioner to exclude common and treatable causes. Patients with breast implant-specific concerns should seek assessment if they notice breast pain, distortion, increasing firmness, swelling, a new lump, skin changes, suspected rupture, infection symptoms, or a major change in breast shape.</p>
              <p>Urgent review is needed for rapidly increasing swelling, fever, spreading redness, shortness of breath, chest pain, fainting or sudden deterioration.</p>
            </section>

            <section id="faq">
              <h2>FAQs</h2>
              <h3>Is there a blood test for breast implant illness?</h3>
              <p>There is no single validated blood test that diagnoses BII. Tests may still be useful to assess other possible causes of symptoms, such as thyroid disease, inflammatory markers, autoimmune markers or nutritional deficiencies, depending on the clinical situation.</p>
              <h3>Can BII happen with saline or silicone implants?</h3>
              <p>Systemic symptoms have been reported by patients with different implant types. The evidence does not support a simple claim that one implant type completely removes the possibility of systemic symptoms.</p>
              <h3>Does capsulectomy have to be “en bloc”?</h3>
              <p>“En bloc” capsulectomy has a specific surgical meaning and is not always necessary or safely possible. The appropriate approach depends on the indication, capsule thickness, implant position, surrounding anatomy and whether there is concern for malignancy or rupture. This should be discussed with a qualified plastic surgeon.</p>
              <h3>Should I see a plastic surgeon or another doctor first?</h3>
              <p>If you have breast implant-specific symptoms such as pain, firmness, distortion or suspected rupture, a plastic surgeon can assess the implants and capsule. If symptoms are mainly systemic, it is often useful to involve a general practitioner, physician or relevant specialist to look for other medical causes as well.</p>
            </section>

            <section id="related">
              <h2>Related pages</h2>
              <div className="related-grid">
                <Link href="/breast-augmentation-singapore" className="related-card"><small>Breast augmentation</small><strong>Breast augmentation and implant planning in Singapore</strong><span>Read page</span></Link>
                <Link href="/24-hour-rapid-recovery-breast-augmentation-singapore" className="related-card"><small>Recovery</small><strong>24-hour rapid recovery breast augmentation principles</strong><span>Read guide</span></Link>
                <Link href="/breast-aesthetic-surgery-singapore" className="related-card"><small>Breast surgery</small><strong>Breast aesthetic surgery in Singapore</strong><span>Read page</span></Link>
                <Link href="/plastic-surgeon-singapore" className="related-card"><small>Patient guide</small><strong>How to choose a plastic surgeon safely</strong><span>Read guide</span></Link>
              </div>
            </section>

            <h2 id="enquire">Enquire about assessment</h2>
            <p>If you are concerned about breast implants, systemic symptoms, breast implant removal, or the risks and uncertainties before breast augmentation, a formal consultation is needed before personalised advice can be given.</p>
            <ContactForm />
          </div>
        </section>
      </article>
    </main>
  );
}
