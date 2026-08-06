import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '../Navigation';
import ContactForm from '../ContactForm';
import { baseUrl, lastReviewedIso, physicianId, physicianJsonLd } from '../seoIdentity';

const pagePath = '/how-to-choose-lymphedema-surgeon-singapore';
const pageUrl = `${baseUrl}${pagePath}`;

export const metadata: Metadata = {
  title: 'Choosing a Lymphedema Surgeon in Singapore',
  description:
    'Questions patients can ask when choosing a lymphedema surgeon in Singapore, including dedicated training, ICG lymphography, ultrasound lymphatic localisation and treatment planning.',
  alternates: {
    canonical: pagePath
  },
  openGraph: {
    title: 'Choosing a Lymphedema Surgeon in Singapore | Dr Jeremy Sun',
    description:
      'Patient guidance on lymphedema surgeon training, imaging, LVA, lymph node transfer, ultrasound localisation and questions to ask before consultation.',
    url: pagePath,
    type: 'article'
  },
  keywords: [
    'lymphedema surgeon Singapore',
    'lymphoedema surgeon Singapore',
    'lymphatic surgeon Singapore',
    'choose lymphedema surgeon',
    'lymphedema specialist Singapore',
    'LVA surgeon Singapore',
    'ICG lymphography Singapore',
    'ultrasound localisation lymphatics'
  ]
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should I ask before choosing a lymphedema surgeon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Patients may wish to ask about dedicated lymphedema surgery training, the duration and structure of that training, experience with LVA and lymph node transfer, access to ICG lymphography and ultrasound localisation, postoperative care, risks, alternatives and realistic outcomes.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why does dedicated lymphedema surgery training matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lymphedema surgery requires more than general microsurgical ability. It involves disease staging, lymphatic imaging, ultrasound localisation, supermicrosurgical technique, conservative care, cellulitis management and long-term follow-up. Several months of focused exposure may help a surgeon understand the wider range of treatment options.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is ICG lymphography important for lymphedema surgery planning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ICG lymphography can help map superficial lymphatic flow patterns and identify lymphatic channels that may be suitable for bypass planning. The exact imaging needed depends on the patient and clinical setting.'
      }
    },
    {
      '@type': 'Question',
      name: 'Should a lymphedema surgeon be trained in ultrasound localisation of lymphatics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ultrasound localisation can help identify lymphatic channels and nearby veins for lymphovenous bypass planning. Patients may wish to ask whether their surgeon is trained in both ICG lymphography and ultrasound-based localisation where these are used.'
      }
    }
  ]
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    physicianJsonLd,
    {
      '@type': 'MedicalWebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: 'Choosing a Lymphedema Surgeon in Singapore',
      description:
        'Questions patients can ask when choosing a lymphedema surgeon in Singapore, including training, imaging, treatment selection and aftercare.',
      medicalSpecialty: ['PlasticSurgery', 'ReconstructiveSurgery'],
      about: [
        { '@type': 'MedicalCondition', name: 'Lymphedema' },
        { '@type': 'MedicalProcedure', name: 'Lymphovenous bypass' },
        { '@type': 'MedicalProcedure', name: 'Vascularised lymph node transfer' }
      ],
      datePublished: lastReviewedIso,
      dateModified: lastReviewedIso,
      lastReviewed: lastReviewedIso,
      author: { '@id': physicianId },
      reviewedBy: { '@id': physicianId },
      publisher: { '@id': physicianId },
      mainEntity: { '@id': `${pageUrl}#article` }
    },
    {
      '@type': 'Article',
      '@id': `${pageUrl}#article`,
      headline: 'Choosing a Lymphedema Surgeon in Singapore: Questions Patients Can Ask',
      datePublished: lastReviewedIso,
      dateModified: lastReviewedIso,
      author: { '@id': physicianId },
      reviewedBy: { '@id': physicianId }
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Educational Articles', item: `${baseUrl}/blog` },
        { '@type': 'ListItem', position: 3, name: 'Choosing a Lymphedema Surgeon', item: pageUrl }
      ]
    },
    faqJsonLd
  ]
};

export default function ChooseLymphedemaSurgeonPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Navigation />

      <article className="article-page">
        <section className="article-hero">
          <div className="container article-hero-grid">
            <div>
              <div className="eyebrow">Patient guidance</div>
              <h1>Choosing a Lymphedema Surgeon in Singapore: Questions Patients Can Ask</h1>
              <p className="lead">
                Lymphedema surgery is specialised. These questions can help patients understand training, imaging, treatment selection and aftercare before deciding where to seek assessment.
              </p>
              <div className="hero-actions">
                <a href="#questions" className="btn btn-primary">Questions to ask</a>
                <Link href="/lymphedema-surgery-singapore" className="btn btn-ghost">Lymphedema surgery overview</Link>
              </div>
            </div>
            <aside className="article-summary-card">
              <h2>On this page</h2>
              <ul>
                <li><a href="#specialised">Why training matters</a></li>
                <li><a href="#training">What training to ask about</a></li>
                <li><a href="#imaging">ICG and ultrasound localisation</a></li>
                <li><a href="#treatment-options">Range of treatment options</a></li>
                <li><a href="#questions">Questions to ask</a></li>
                <li><a href="#red-flags">Caution signs</a></li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section article-content">
          <div className="container article-narrow">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/blog">Educational Articles</Link>
              <span>/</span>
              <span>Choosing a Lymphedema Surgeon</span>
            </nav>

            <p>
              Choosing a lymphedema surgeon can be difficult because patients are often comparing unfamiliar terms: lymphovenous bypass, lymphaticovenular anastomosis, lymph node transfer, ICG lymphography, compression therapy, liposuction and cellulitis prevention. A useful starting point is to ask how the surgeon assesses lymphedema and how they decide which treatment, if any, is appropriate.
            </p>
            <p>
              A good consultation should not begin with one operation as the answer for every patient. Lymphedema varies widely. Some limbs are fluid-dominant and may be suitable for physiological lymphatic surgery. Others are more fibrotic or solid-tissue-dominant and may need different treatment strategies. Some patients are best managed without surgery.
            </p>
            <p className="notice-text">
              This article provides general educational information and does not replace consultation with a qualified medical practitioner. Suitability, risks, recovery and outcomes vary between individuals.
            </p>
            <div className="reviewer-card" aria-label="Medical review information">
              <strong>Clinically authored and reviewed by Dr Jeremy Sun</strong>
              <span>Senior Consultant Plastic Surgeon, Singapore • Last reviewed {lastReviewedIso}</span>
            </div>

            <h2 id="specialised">Why lymphedema surgery requires specialised assessment</h2>
            <p>
              Lymphedema is not simply limb swelling. It is a chronic lymphatic drainage problem that may involve fluid accumulation, tissue thickening, skin changes, reduced limb function and recurrent cellulitis or infection.
            </p>
            <p>A careful assessment may include:</p>
            <ul>
              <li>the cause and duration of lymphedema</li>
              <li>disease stage and whether the limb is fluid-dominant, fibrotic or mixed</li>
              <li>history of cellulitis or repeated infections</li>
              <li>previous cancer surgery, lymph node surgery, radiotherapy or trauma</li>
              <li>current compression garments and lymphedema therapy</li>
              <li>limb symptoms, function and patient goals</li>
              <li>lymphatic imaging and operative planning where appropriate</li>
            </ul>
            <p>
              This is why patients should feel comfortable asking not only whether a surgeon can perform microsurgery, but whether they have dedicated exposure to lymphedema assessment, imaging and the full range of treatment options.
            </p>

            <h2 id="training">What training should patients ask about?</h2>
            <p>
              Lymphedema surgery is a specialised area within reconstructive microsurgery. While many plastic surgeons are trained in microsurgical techniques, full exposure to lymphedema care usually requires dedicated training across assessment, imaging, operative selection, conservative care and long-term follow-up.
            </p>
            <p>
              In Dr Sun’s view, surgeons offering lymphedema surgery should ideally have several months of dedicated lymphatic surgery training — commonly at least five to six months of focused exposure — to understand the wide range of lymphedema treatment options rather than only one procedure.
            </p>
            <p>
              Patients may wish to ask whether their surgeon’s lymphatic surgery training was structured and focused, or whether it was a short observership or occasional case exposure during a broader microsurgery fellowship.
            </p>
            <p>A meaningful lymphedema surgery training programme should ideally include exposure to:</p>
            <ul>
              <li>lymphovenous bypass / lymphaticovenular anastomosis</li>
              <li>vascularised lymph node transfer</li>
              <li>liposuction or reductive options for selected advanced cases</li>
              <li>conservative lymphedema therapy and compression planning</li>
              <li>cellulitis risk, infection prevention and long-term follow-up</li>
              <li>ICG lymphography</li>
              <li>ultrasound localisation of lymphatic channels and suitable veins</li>
            </ul>
            <p>
              Dr Jeremy Sun completed MOH-accredited dedicated lymphatic surgery training in Tokyo, with focused exposure to the assessment and surgical management of lymphedema, including lymphovenous bypass, lymphatic imaging and the broader range of lymphedema treatment options.
            </p>

            <h2 id="imaging">Why ICG lymphography and ultrasound localisation matter</h2>
            <p>
              Imaging is central to modern lymphedema surgery planning. It helps identify whether usable lymphatic channels are present, where they are located, and which operation is more likely to be appropriate.
            </p>
            <h3>ICG lymphography</h3>
            <p>
              Indocyanine green lymphography, or ICG lymphography, is commonly used to visualise superficial lymphatic flow patterns. It can help show whether lymphatic channels are linear and potentially usable, or whether there are more diffuse dermal backflow patterns suggesting more advanced lymphatic dysfunction.
            </p>
            <h3>Ultrasound localisation of lymphatics</h3>
            <p>
              Ultrasound can be used to help localise lymphatic channels and nearby veins for lymphovenous bypass planning. It may assist in finding suitable targets, planning small incisions and selecting bypass sites more precisely.
            </p>
            <p>
              Patients considering lymphedema surgery may therefore wish to ask whether their surgeon is trained in both ICG lymphography and ultrasound localisation of lymphatic vessels, and how these tools are used in planning treatment.
            </p>

            <h2 id="treatment-options">The surgeon should be able to discuss more than one operation</h2>
            <p>
              Lymphedema treatment is not one-size-fits-all. A surgeon should be able to explain the role, limitations and alternatives for each option, including non-surgical care.
            </p>
            <h3>Lymphovenous bypass / LVA</h3>
            <p>
              <Link href="/lymphovenous-bypass-lva-surgery-singapore">Lymphovenous bypass</Link>, also called LVA, connects small lymphatic channels to nearby veins to create alternative drainage pathways. It is often discussed for earlier fluid-dominant disease, but selected patients with more advanced lymphedema may still be suitable if imaging shows usable lymphatic channels and the limb remains more fluid-dominant than solid-tissue-dominant.
            </p>
            <h3>Vascularised lymph node transfer</h3>
            <p>
              Vascularised lymph node transfer involves transferring lymph node-containing tissue with its blood supply to an affected region. It may be considered in selected patients, particularly where lymphatic channels are less suitable for bypass alone. Donor-site risks and suitability should be discussed carefully.
            </p>
            <h3>Reductive procedures and liposuction</h3>
            <p>
              In more advanced lymphedema, excess fibrofatty tissue and skin changes can become a major part of limb enlargement. Liposuction or other reductive approaches may be considered for selected patients, usually with ongoing compression and long-term follow-up.
            </p>
            <h3>Conservative care</h3>
            <p>
              Compression, skin care, exercise, weight optimisation and specialist lymphedema therapy remain important. A good surgeon should be willing to recommend non-surgical management when surgery is unlikely to help or when conservative care has not yet been optimised.
            </p>

            <h2>Why recurrent cellulitis matters</h2>
            <p>
              Recurrent cellulitis or repeated limb infections can be an important reason to seek lymphedema surgery assessment. Reducing infection frequency may be one of the goals of treatment in suitable patients, although results vary.
            </p>
            <p>
              Patients with fever, spreading redness, sudden worsening swelling or severe pain should seek urgent medical attention. Surgery does not replace infection prevention, skin care or early medical treatment when cellulitis occurs.
            </p>

            <h2 id="questions">Questions to ask before choosing a lymphedema surgeon</h2>
            <p>Patients may find it useful to ask:</p>
            <ul>
              <li>Have you undergone dedicated lymphedema surgery training, and for how long?</li>
              <li>Was your training focused on lymphedema surgery, or was lymphedema one component of a broader microsurgery fellowship?</li>
              <li>Do you perform lymphovenous bypass / LVA, vascularised lymph node transfer, or both?</li>
              <li>How do you decide whether I am suitable for surgery?</li>
              <li>Do you use ICG lymphography?</li>
              <li>Are you trained in ultrasound localisation of lymphatic vessels and suitable veins?</li>
              <li>Is my swelling fluid-dominant, fibrotic, or mixed?</li>
              <li>How does recurrent cellulitis affect my treatment plan?</li>
              <li>What are the alternatives if surgery is not suitable?</li>
              <li>What compression, therapy or follow-up is needed after surgery?</li>
              <li>What are the risks and limitations in my specific case?</li>
              <li>What outcome is realistic, and what should I not expect from surgery?</li>
            </ul>

            <h2 id="red-flags">Caution signs when assessing claims</h2>
            <p>
              Patients should be cautious if they are promised guaranteed improvement, told that one operation suits every stage of lymphedema, or given little explanation of imaging, compression, risks, alternatives and long-term care.
            </p>
            <p>
              It is reasonable to ask for clarity on training, case assessment and follow-up. This due diligence helps patients make a more informed decision without relying only on titles, advertisements or isolated claims.
            </p>

            <h2>Further lymphedema education</h2>
            <p>
              Dr Jeremy Sun also maintains <a href="https://www.lymphedasia.com" target="_blank" rel="noopener noreferrer">LymphedAsia</a>, an educational resource on lymphedema, lymphatic surgery and long-term lymphedema care.
            </p>
            <p className="notice-text">
              Information on LymphedAsia is educational and should not replace personalised assessment by a qualified medical practitioner.
            </p>

            <h2>Related pages</h2>
            <ul>
              <li><Link href="/lymphedema-surgery-singapore">Lymphedema surgery in Singapore</Link></li>
              <li><Link href="/lymphovenous-bypass-lva-surgery-singapore">Lymphovenous bypass / LVA surgery in Singapore</Link></li>
              <li><Link href="/training-and-fellowships">Training and fellowships</Link></li>
            </ul>
          </div>
        </section>

        <section id="enquire" className="section article-enquiry">
          <div className="container grid-2">
            <div>
              <h2>Enquiry and consultation</h2>
              <p className="section-intro">
                A consultation can help determine the cause and stage of lymphedema, whether lymphatic imaging is useful, and whether surgical or non-surgical treatment options may be appropriate.
              </p>
              <p className="section-intro">
                Use the enquiry form to request an appointment or ask about lymphedema assessment. Please do not send urgent medical concerns through the website form.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </article>
    </main>
  );
}
