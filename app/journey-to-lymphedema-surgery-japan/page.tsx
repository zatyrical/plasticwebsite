import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '../Navigation';
import ContactForm from '../ContactForm';
import { baseUrl, lastReviewedIso, physicianId, physicianJsonLd } from '../seoIdentity';

const pagePath = '/journey-to-lymphedema-surgery-japan';
const pageUrl = `${baseUrl}${pagePath}`;

export const metadata: Metadata = {
  title: 'Why I Trained in Lymphedema Surgery in Japan',
  description:
    'Dr Jeremy Sun explains how clinical skepticism, Japan lymphatic surgery exposure and dedicated MOH-accredited fellowship training shaped his approach to LVA surgery in Singapore.',
  alternates: {
    canonical: pagePath
  },
  openGraph: {
    title: 'From Skepticism to Specialist Training in Japan | Dr Jeremy Sun',
    description:
      'How dedicated MOH-accredited lymphedema surgery training in Japan shaped Dr Jeremy Sun’s approach to LVA, imaging, flow dynamics and patient selection.',
    url: pagePath,
    type: 'article'
  },
  keywords: [
    'Dr Jeremy Sun lymphedema surgery',
    'MOH accredited lymphedema surgery training Japan',
    'LVA surgeon Singapore',
    'lymphedema surgeon Singapore',
    'lymphovenous bypass Singapore',
    'lymphatic surgery Japan training'
  ]
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why did Dr Jeremy Sun train in lymphedema surgery in Japan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr Jeremy Sun initially approached lymphedema surgery with clinical skepticism after seeing variable results during early training. Exposure to experienced lymphatic surgery centres in Japan changed his perspective and led him to pursue dedicated MOH-accredited fellowship training focused on lymphedema surgery.'
      }
    },
    {
      '@type': 'Question',
      name: 'What changed Dr Jeremy Sun’s view of LVA surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'His view changed after seeing a structured approach to patient selection, lymphatic imaging, pressure and flow planning, immediate compression strategy, supermicrosurgical technique and measured follow-up in Japan.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why are pressure gradients and compression important after LVA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LVA is intended to encourage lymphatic fluid to drain into small veins. If flow conditions are unfavourable, reflux or limited drainage may occur. Compression strategy, including immediate on-table compression where appropriate, can be part of encouraging flow in the intended direction.'
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
      name: 'Why I Trained in Lymphedema Surgery in Japan',
      description:
        'A clinically reviewed account of how skepticism, Japan fellowship training, LVA flow planning and lymphatic imaging shaped Dr Jeremy Sun’s approach to lymphedema surgery in Singapore.',
      medicalSpecialty: ['PlasticSurgery', 'ReconstructiveSurgery'],
      about: [
        { '@type': 'MedicalCondition', name: 'Lymphedema' },
        { '@type': 'MedicalProcedure', name: 'Lymphovenous bypass' },
        { '@type': 'MedicalProcedure', name: 'Lymphaticovenular anastomosis' }
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
      headline: 'From Skepticism to Specialist Training: My Journey Into Lymphedema Surgery',
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
        { '@type': 'ListItem', position: 3, name: 'Lymphedema Surgery Training in Japan', item: pageUrl }
      ]
    },
    faqJsonLd
  ]
};

export default function LymphedemaSurgeryJourneyPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Navigation />

      <article className="article-page">
        <section className="article-hero">
          <div className="container article-hero-grid">
            <div>
              <div className="eyebrow">Lymphedema surgery training</div>
              <h1>From Skepticism to Specialist Training: My Journey Into Lymphedema Surgery</h1>
              <p className="lead">
                Why dedicated MOH-accredited fellowship training in lymphedema surgery in Japan changed how I approach LVA, patient selection, imaging and flow planning.
              </p>
              <div className="hero-actions">
                <Link href="/lymphovenous-bypass-lva-surgery-singapore" className="btn btn-primary">Read about LVA surgery</Link>
                <Link href="/how-to-choose-lymphedema-surgeon-singapore" className="btn btn-ghost">Choosing a surgeon</Link>
              </div>
            </div>
            <aside className="article-summary-card">
              <h2>On this page</h2>
              <ul>
                <li><a href="#skepticism">Why I was skeptical</a></li>
                <li><a href="#japan">What Japan changed</a></li>
                <li><a href="#flow">LVA is about flow</a></li>
                <li><a href="#algorithm">Algorithmic planning</a></li>
                <li><a href="#current-approach">Current approach</a></li>
                <li><a href="#faq">FAQs</a></li>
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
              <span>Lymphedema Surgery Training in Japan</span>
            </nav>

            <p>
              During my early surgical training in Singapore, I approached lymphedema surgery with skepticism. The concept was attractive: if lymphatic drainage is blocked, creating new drainage pathways should help. But the results I observed were not always predictable, and several parts of the surgical plan seemed unresolved to me.
            </p>
            <p>
              My skepticism was not a dismissal of the field. It was a question of whether the operation could be made consistent, measurable and safe for the right patients. That question eventually led me to Japan, where I saw a more structured approach to lymphatic surgery and later pursued dedicated MOH-accredited fellowship training in lymphedema surgery.
            </p>
            <p className="notice-text">
              This article is general educational information and reflects Dr Sun’s clinical perspective. It does not replace personalised consultation. Suitability, risks, recovery and outcomes vary between individuals.
            </p>
            <div className="reviewer-card" aria-label="Medical review information">
              <strong>Clinically authored and reviewed by Dr Jeremy Sun</strong>
              <span>Senior Consultant Plastic Surgeon, Singapore • Last reviewed {lastReviewedIso}</span>
            </div>

            <h2 id="skepticism">Why I was initially skeptical</h2>
            <p>
              Several questions made me cautious about lymphedema surgery in my earlier training. How should patients be selected? How should lymphatic imaging guide the operation? How should outcomes be measured? How long should a patient be observed before deciding whether another operation is needed? How should surgery fit with compression therapy and long-term lymphedema care?
            </p>
            <p>
              I was also concerned that technical success alone might not be enough. In LVA, the surgeon connects very small lymphatic channels to small veins. But the goal is not simply to make a connection. The goal is to create useful forward drainage of lymphatic fluid in a living patient whose pressures, limb condition and lymphatic function may vary.
            </p>

            <h2 id="japan">What changed after exposure to Japanese lymphatic surgery</h2>
            <p>
              In 2019 and 2020, I was exposed to experienced lymphatic surgeons in Japan. That experience changed the way I viewed the field. I saw that lymphedema surgery could be approached as an algorithm rather than as an isolated operation.
            </p>
            <p>
              The Japanese approach I observed placed strong emphasis on staging, imaging, careful selection of lymphatic channels, ultrasound localisation where appropriate, postoperative compression strategy and long-term follow-up. This made the operation more understandable to me. It also made clear that LVA should not be judged only by whether a bypass can be technically performed, but by whether the entire plan supports lymphatic drainage for that individual patient.
            </p>

            <h2 id="flow">LVA is about flow, not just connections</h2>
            <p>
              One of the most important lessons was the importance of pressure and flow. If venous pressure is higher than lymphatic pressure, there may be a risk of reflux or limited effective drainage. This is one reason LVA planning must consider the recipient vein, limb condition, compression strategy and the expected direction of flow.
            </p>
            <p>
              My training in Japan reinforced the role of immediate on-table compression after LVA, where appropriate, to encourage lymphatic drainage in the intended direction. This helped me understand LVA as a physiological operation: the bypass must be technically precise, but it also needs to work within the patient’s pressure and flow environment.
            </p>

            <h2 id="algorithm">Why I favour an algorithmic approach before considering repeat surgery</h2>
            <p>
              Another issue I questioned was the idea of repeating LVA very soon after an initial operation, before there had been adequate time to assess the response. Lymphedema changes gradually. Swelling, tissue quality, cellulitis frequency and compression requirements often need to be followed over months, not only days or weeks.
            </p>
            <p>
              The approach I adopted after Japan training is more measured: careful imaging, selection of suitable lymphatic channels and veins, planning multiple bypasses where the anatomy permits, and allowing time for the clinical effect to declare itself before considering further surgery. In my practice, ultrasound-based planning can help identify suitable channels and veins so that several appropriate bypasses may be performed in a single operation when feasible.
            </p>
            <p>
              This does not mean every patient needs multiple bypasses, or that more bypasses always means a better result. The number and location of bypasses should follow the patient’s anatomy, imaging findings and operative conditions.
            </p>

            <h2 id="current-approach">How this shapes my current approach in Singapore</h2>
            <p>
              Today, my approach to lymphedema surgery is shaped by dedicated MOH-accredited fellowship training in lymphedema surgery in Japan. I place emphasis on careful patient selection, imaging-guided planning, realistic counselling, pressure and flow considerations, compression strategy and long-term follow-up.
            </p>
            <p>
              I became convinced that LVA can offer meaningful benefit in carefully selected patients, but I do not view it as a universal solution. Some patients may be suitable for lymphovenous bypass. Others may need vascularised lymph node transfer, reductive procedures, continued non-surgical care or a staged approach. A good lymphedema surgery plan should begin with assessment, not with a predetermined operation.
            </p>
            <p>
              For patients, the practical message is simple: ask how the surgeon assesses lymphedema, how imaging is used, how flow is considered, how compression is planned, and how outcomes are followed over time.
            </p>

            <h2 id="faq">Frequently asked questions</h2>
            <h3>Why did Dr Jeremy Sun train in lymphedema surgery in Japan?</h3>
            <p>
              Dr Sun initially approached lymphedema surgery with skepticism after seeing variable results during early training. Exposure to experienced lymphatic surgery centres in Japan changed his perspective and led him to pursue dedicated MOH-accredited fellowship training focused on lymphedema surgery.
            </p>
            <h3>What changed his view of LVA surgery?</h3>
            <p>
              He saw a more structured approach to patient selection, lymphatic imaging, pressure and flow planning, immediate compression strategy, supermicrosurgical technique and measured follow-up.
            </p>
            <h3>Does this mean LVA works for everyone?</h3>
            <p>
              No. LVA may offer meaningful benefit in carefully selected patients, but suitability depends on clinical assessment, lymphatic imaging, limb condition and goals of treatment. Some patients may need other approaches or continued non-surgical management.
            </p>
            <h3>Where can I read more about LVA assessment?</h3>
            <p>
              Read more on <Link href="/lymphovenous-bypass-lva-surgery-singapore">LVA surgery in Singapore</Link>, <Link href="/lymphedema-surgery-singapore">lymphedema surgery options</Link> and <Link href="/how-to-choose-lymphedema-surgeon-singapore">questions to ask when choosing a lymphedema surgeon</Link>.
            </p>
          </div>
        </section>

        <section id="enquire" className="section article-enquiry">
          <div className="container grid-2">
            <div>
              <h2>Enquiry and consultation</h2>
              <p className="section-intro">
                A consultation can help determine whether LVA or another lymphedema treatment approach is appropriate, and how imaging, compression and follow-up fit into your care plan.
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
