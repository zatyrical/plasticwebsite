import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';
import ContactForm from './ContactForm';
import type { ProcedureArticle } from './procedureArticles';
import { procedureArticleList } from './procedureArticles';
import { baseUrl, lastReviewedIso, physicianId, physicianJsonLd } from './seoIdentity';

type Props = {
  article: ProcedureArticle;
};

const establishedArticles = [
  {
    title: 'Compression and Recovery After Liposuction',
    href: '/compression-foam-lymphatic-massage-after-liposuction',
    category: 'Liposuction recovery',
    group: 'aesthetic'
  },
  {
    title: 'Breast Augmentation in Singapore',
    href: '/breast-augmentation-singapore',
    category: 'Breast augmentation & implants',
    group: 'aesthetic'
  },
  {
    title: '24-Hour Rapid Recovery Breast Augmentation in Singapore',
    href: '/24-hour-rapid-recovery-breast-augmentation-singapore',
    category: 'Breast augmentation recovery',
    group: 'aesthetic'
  },
  {
    title: 'Breast Implant Illness: Is It Real? What the Evidence Says',
    href: '/breast-implant-illness-singapore-evidence',
    category: 'Breast implant safety',
    group: 'aesthetic'
  },
  {
    title: 'Tummy Tuck / Abdominoplasty in Singapore',
    href: '/tummy-tuck-singapore',
    category: 'Tummy tuck & abdominoplasty',
    group: 'aesthetic'
  },
  {
    title: 'Mommy Makeover in Singapore',
    href: '/mommy-makeover-singapore',
    category: 'Post-pregnancy surgery',
    group: 'aesthetic'
  },
  {
    title: 'Body Contouring & Liposuction in Singapore',
    href: '/body-contouring-liposuction-singapore',
    category: 'Body contouring & liposuction',
    group: 'aesthetic'
  },
  {
    title: 'Thread Lifting in Singapore',
    href: '/thread-lifting-singapore',
    category: 'Facial rejuvenation',
    group: 'aesthetic'
  },
  {
    title: 'Rib Rhinoplasty in Singapore',
    href: '/rib-rhinoplasty-singapore',
    category: 'Rib cartilage rhinoplasty',
    group: 'aesthetic'
  },
  {
    title: 'Asian Eyelid Surgery in Singapore',
    href: '/asian-eyelid-surgery-singapore',
    category: 'Aesthetic surgery',
    group: 'aesthetic'
  },
  {
    title: 'FTM Top Surgery in Singapore',
    href: '/ftm-top-surgery-singapore',
    category: 'Gender-affirming chest surgery',
    group: 'reconstructive'
  },
  {
    title: 'Breast Reconstruction in Singapore',
    href: '/breast-reconstruction-singapore',
    category: 'Breast reconstruction',
    group: 'reconstructive'
  },
  {
    title: 'Lymphedema Surgery in Singapore',
    href: '/lymphedema-surgery-singapore',
    category: 'Lymphedema surgery',
    group: 'reconstructive'
  },
  {
    title: 'Lymphovenous Bypass / LVA Surgery in Singapore',
    href: '/lymphovenous-bypass-lva-surgery-singapore',
    category: 'Lymphatic surgery',
    group: 'reconstructive'
  }
];

export default function ProcedureArticlePage({ article }: Props) {
  const articleUrl = `${baseUrl}/${article.slug}`;
  const group = article.backHref.includes('aesthetic') ? 'aesthetic' : 'reconstructive';
  const generatedRelated = procedureArticleList
    .filter((item) => item.slug !== article.slug)
    .filter((item) => (item.backHref.includes('aesthetic') ? 'aesthetic' : 'reconstructive') === group)
    .map((item) => ({
      title: item.title,
      href: `/${item.slug}`,
      category: item.eyebrow,
      group
    }));
  const relatedByProcedure: Record<string, string[]> = {
    'breast-augmentation-singapore': ['breast-aesthetic-surgery-singapore', '24-hour-rapid-recovery-breast-augmentation-singapore', 'breast-implant-illness-singapore-evidence', 'mommy-makeover-singapore'],
    'tummy-tuck-singapore': ['body-contouring-liposuction-singapore', 'mommy-makeover-singapore', 'compression-foam-lymphatic-massage-after-liposuction'],
    'mommy-makeover-singapore': ['tummy-tuck-singapore', 'breast-augmentation-singapore', 'breast-aesthetic-surgery-singapore', 'body-contouring-liposuction-singapore'],
    'body-contouring-liposuction-singapore': ['tummy-tuck-singapore', 'compression-foam-lymphatic-massage-after-liposuction', 'mommy-makeover-singapore'],
    'asian-rhinoplasty-singapore': ['rib-rhinoplasty-singapore'],
    'rib-rhinoplasty-singapore': ['asian-rhinoplasty-singapore'],
    'face-neck-lift-singapore': ['thread-lifting-singapore', 'fat-grafting-singapore', 'asian-eyelid-surgery-singapore']
  };
  const preferredHrefs = (relatedByProcedure[article.slug] ?? []).map((slug) => `/${slug}`);
  const seenRelated = new Set<string>();
  const relatedArticles = [...generatedRelated, ...establishedArticles.filter((item) => item.group === group)]
    .filter((item) => item.href !== `/${article.slug}`)
    .filter((item) => {
      if (seenRelated.has(item.href)) return false;
      seenRelated.add(item.href);
      return true;
    })
    .sort((a, b) => {
      const rank = (href: string) => {
        const index = preferredHrefs.indexOf(href);
        return index < 0 ? preferredHrefs.length : index;
      };
      return rank(a.href) - rank(b.href);
    })
    .slice(0, 4);

  const findSection = (ids: string[]) => article.sections.find((section) => ids.some((id) => section.id.includes(id)));
  const decisionHighlights = [
    { label: 'What it treats', section: article.sections[0] },
    { label: 'Suitability', section: findSection(['suitability', 'candidate', 'who']) },
    { label: 'Planning', section: findSection(['consultation', 'planning']) },
    { label: 'Recovery & safety', section: findSection(['recovery', 'risks']) }
  ].filter((item): item is { label: string; section: NonNullable<typeof item.section> } => Boolean(item.section));

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  const medicalPageJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: group === 'aesthetic' ? 'Aesthetic Surgery' : 'Reconstructive Surgery',
            item: `${baseUrl}/${group === 'aesthetic' ? 'aesthetic-surgery' : 'reconstructive-surgery'}`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.title,
            item: articleUrl
          }
        ]
      },
      physicianJsonLd,
      {
        '@type': 'MedicalWebPage',
        '@id': `${articleUrl}#webpage`,
        url: articleUrl,
        name: article.title,
        headline: article.title,
        description: article.description,
        inLanguage: 'en-SG',
        isPartOf: {
          '@type': 'WebSite',
          name: 'Dr Jeremy Sun Plastic Surgery',
          url: baseUrl
        },
        about: article.keywords,
        ...(article.slug === 'breast-augmentation-singapore' ? {
          mentions: [
            { '@type': 'MedicalProcedure', name: 'Breast augmentation' },
            { '@type': 'MedicalProcedure', name: 'Breast implant surgery' },
            { '@type': 'MedicalDevice', name: 'Breast implant' },
            { '@type': 'MedicalDevice', name: 'Motiva breast implant' },
            { '@type': 'MedicalProcedure', name: 'Fat grafting' },
            { '@type': 'Person', name: 'William P. Adams Jr.', url: 'https://www.dr-adams.com/dr-william-adams/' }
          ]
        } : {}),
        ...(article.slug === 'tummy-tuck-singapore' ? {
          mentions: [
            { '@type': 'MedicalProcedure', name: 'Tummy tuck' },
            { '@type': 'MedicalProcedure', name: 'Abdominoplasty' },
            { '@type': 'MedicalCondition', name: 'Diastasis recti' },
            { '@type': 'MedicalCondition', name: 'Abdominal divarication' },
            { '@type': 'MedicalProcedure', name: 'Liposuction' }
          ]
        } : {}),
        ...(article.slug === 'ftm-top-surgery-singapore' ? {
          mentions: [
            { '@type': 'MedicalProcedure', name: 'FTM top surgery' },
            { '@type': 'MedicalProcedure', name: 'Female-to-male top surgery' },
            { '@type': 'MedicalProcedure', name: 'Chest masculinisation surgery' },
            { '@type': 'MedicalProcedure', name: 'Chest masculinization surgery' },
            { '@type': 'MedicalProcedure', name: 'Gender-affirming chest reconstruction' },
            { '@type': 'MedicalProcedure', name: 'Double-incision top surgery' },
            { '@type': 'MedicalProcedure', name: 'Free nipple graft' },
            { '@type': 'MedicalProcedure', name: 'Pectoral nerve block' }
          ]
        } : {}),
        datePublished: lastReviewedIso,
        dateModified: lastReviewedIso,
        lastReviewed: lastReviewedIso,
        reviewedBy: { '@id': physicianId },
        author: { '@id': physicianId },
        publisher: { '@id': physicianId }
      }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navigation />

      <article className="article-page">
        <section className="article-hero">
          <div className="container article-hero-grid">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href={article.backHref}>{group === 'aesthetic' ? 'Aesthetic surgery' : 'Reconstructive surgery'}</Link>
              </nav>
              <div className="eyebrow">{article.eyebrow}</div>
              <h1>{article.title}</h1>
              <p className="lead">{article.lead}</p>
              <div className="hero-actions">
                <a href="#enquire" className="btn btn-primary">Enquire about assessment</a>
                <Link href={article.backHref} className="btn btn-ghost">{article.backLabel}</Link>
              </div>
              <div className="article-trust-strip" aria-label="What this page is designed to answer">
                <span>Specialist plastic surgery assessment</span>
                <span>Suitability, process, recovery and risks</span>
                <span>Singapore patient consultation pathway</span>
              </div>
            </div>
            <aside className="article-summary-card">
              {article.heroImage ? (
                <figure className="article-hero-image-card">
                  <Image src={article.heroImage.src} alt={article.heroImage.alt} width={720} height={860} priority sizes="(max-width: 900px) 100vw, 330px" />
                  {article.heroImage.caption ? <figcaption>{article.heroImage.caption}</figcaption> : null}
                </figure>
              ) : null}
              <h2>On this page</h2>
              <ul>
                {article.sections.map((section) => (
                  <li key={section.id}><a href={`#${section.id}`}>{section.heading}</a></li>
                ))}
                <li><a href="#faq">FAQs</a></li>
                <li><a href="#related">Related pages</a></li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section article-content">
          <div className="container article-narrow">
            {article.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p className="notice-text">
              This page provides general information and should not replace consultation with a qualified medical practitioner. Suitability, risks, recovery and outcomes vary between individuals.
            </p>
            <div className="reviewer-card" aria-label="Medical review information">
              <strong>Clinically authored and reviewed by Dr Jeremy Sun</strong>
              <span>Senior Consultant Plastic Surgeon, Singapore • Last reviewed {lastReviewedIso}</span>
            </div>

            <section className="procedure-cluster-nav" aria-label="Related consultation pathways">
              <div>
                <div className="procedure-map-kicker">Procedure pathway</div>
                <h2>Compare this option with related procedures</h2>
                <p>
                  Explore related procedures and recovery information to understand the options you may wish to discuss at consultation.
                </p>
              </div>
              <div className="procedure-cluster-links">
                {relatedArticles.slice(0, 3).map((item) => (
                  <Link href={item.href} key={`top-${item.href}`}>
                    <small>{item.category}</small>
                    <strong>{item.title}</strong>
                    <span>Compare guide</span>
                  </Link>
                ))}
              </div>
            </section>

            <section className="procedure-decision-map" aria-label="Procedure decision pathway">
              <div className="procedure-map-kicker">Procedure guide</div>
              <h2>Key decisions before considering {article.eyebrow.toLowerCase()}</h2>
              <p>
                Use these sections to explore suitability, consultation planning, recovery and risks.
              </p>
              <div className="procedure-map-grid">
                {decisionHighlights.map((item) => (
                  <a href={`#${item.section.id}`} className="procedure-map-card" key={`${item.label}-${item.section.id}`}>
                    <small>{item.label}</small>
                    <strong>{item.section.heading}</strong>
                    <span>Read section</span>
                  </a>
                ))}
              </div>
            </section>

            <section className="procedure-journey" aria-label="Consultation to recovery pathway">
              <div className="procedure-journey-copy">
                <div className="procedure-map-kicker">Consultation pathway</div>
                <h2>From first assessment to recovery planning</h2>
                <p>
                  At consultation, discuss your concerns, previous treatment and goals. Your surgeon can explain the available options, their risks and limitations, and the recovery and follow-up each involves.
                </p>
              </div>
              <ol className="procedure-journey-steps">
                <li><strong>1. Assess the concern</strong><span>Clarify anatomy, goals, medical history, previous treatment and whether this is the correct procedure category.</span></li>
                <li><strong>2. Compare options</strong><span>Discuss non-surgical care, alternative procedures, staging, no treatment, and the trade-offs of each approach.</span></li>
                <li><strong>3. Plan safely</strong><span>Review anaesthesia, scars or access points, recovery demands, risks, limitations and when additional investigations may be useful.</span></li>
                <li><strong>4. Recover with review</strong><span>Set expectations for swelling, activity restriction, follow-up, warning symptoms and longer-term outcome changes.</span></li>
              </ol>
            </section>

            {article.slug.includes('lymphedema') || article.slug.includes('lymphovenous') ? (
              <div className="reviewer-card" aria-label="Related LymphedAsia education links">
                <strong>Related lymphedema education hub</strong>
                <span>
                  For broader patient education, see Dr Sun’s LymphedAsia resources on{' '}
                  <a href="https://lymphedasia.com/lva-surgery-singapore/" target="_blank" rel="noreferrer">LVA / lymphovenous bypass surgery</a>,{' '}
                  <a href="https://lymphedasia.com/lymphedema-surgery-singapore/" target="_blank" rel="noreferrer">lymphedema surgery options</a> and{' '}
                  <a href="https://lymphedasia.com/private-lymphedema-consultation-singapore/" target="_blank" rel="noreferrer">private lymphedema consultation in Singapore</a>.
                </span>
              </div>
            ) : null}

            {article.slug === 'breast-augmentation-singapore' ? (
              <div className="reviewer-card" aria-label="Related breast implant safety and recovery guides">
                <strong>Related breast implant safety and recovery guides</strong>
                <span>
                  For patients comparing implant choices and long-term follow-up, read the evidence guide on{' '}
                  <Link href="/breast-implant-illness-singapore-evidence">breast implant illness and current evidence</Link>. For early post-operative planning, see{' '}
                  <Link href="/24-hour-rapid-recovery-breast-augmentation-singapore">24-hour rapid recovery breast augmentation principles</Link>.
                </span>
              </div>
            ) : null}

            {article.slug === 'body-contouring-liposuction-singapore' ? (
              <div className="reviewer-card" aria-label="Related body contouring decision guides">
                <strong>Related body contouring decision guides</strong>
                <span>
                  If your main concern is loose abdominal skin or muscle separation rather than localised fat, compare{' '}
                  <Link href="/tummy-tuck-singapore">tummy tuck / abdominoplasty planning</Link>. For broader procedure selection and safety questions, see the{' '}
                  <Link href="/plastic-surgeon-singapore">plastic surgeon in Singapore consultation guide</Link>.
                </span>
              </div>
            ) : null}

            {article.slug === 'tummy-tuck-singapore' ? (
              <div className="reviewer-card" aria-label="Related tummy tuck and body contouring guides">
                <strong>Related tummy tuck and body contouring guides</strong>
                <span>
                  If your concern is mainly localised fat rather than loose skin or abdominal wall separation, compare{' '}
                  <Link href="/body-contouring-liposuction-singapore">body contouring and liposuction planning</Link>. For broader safety and credential questions, see the{' '}
                  <Link href="/plastic-surgeon-singapore">plastic surgeon in Singapore consultation guide</Link>.
                </span>
              </div>
            ) : null}

            {article.sections.map((section) => (
              <section key={section.id}>
                <h2 id={section.id}>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {article.slug === 'body-contouring-liposuction-singapore' && section.id === 'risks' ? (
                  <>
                    <p>Serious complications can include blood clots in the legs or lungs, fluid-related problems affecting the lungs, and injury to deeper tissues or internal organs. Individual risk depends on the treatment extent, medical history and surgical plan and should be discussed before consent.</p>
                    <p>Further patient information: <a href="https://www.plasticsurgery.org/cosmetic-procedures/liposuction/safety">ASPS liposuction risks and safety</a>, <a href="https://www.plasticsurgery.org/cosmetic-procedures/liposuction/candidates">ASPS liposuction suitability</a>, and <a href="https://www.nhs.uk/tests-and-treatments/cosmetic-procedures/cosmetic-surgery/liposuction/">NHS liposuction overview</a>.</p>
                  </>
                ) : null}
                {section.items ? <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul> : null}
              </section>
            ))}

            <h2 id="faq">FAQs</h2>
            {article.faqs.map((faq) => (
              <section key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </section>
            ))}

            <h2 id="related">Related pages</h2>
            <div className="related-grid">
              {relatedArticles.map((item) => (
                <Link href={item.href} className="related-card" key={item.href}>
                  <small>{item.category}</small>
                  <strong>{item.title}</strong>
                  <span>Read page</span>
                </Link>
              ))}
            </div>

            <h2 id="enquire">Enquire about assessment</h2>
            <p>
              If you would like to discuss whether this procedure or treatment area is relevant to your situation, please submit an enquiry. A formal consultation is needed before any personalised advice can be given.
            </p>
            <ContactForm />
          </div>
        </section>
      </article>
    </main>
  );
}
