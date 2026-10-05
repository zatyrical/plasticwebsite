import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';
import ContactForm from './ContactForm';
import ProcedureQuickLinks from './ProcedureQuickLinks';
import { procedurePagePresentation } from './procedurePagePresentation';
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
  const reviewedIso = article.reviewedIso ?? lastReviewedIso;
  const publishedIso = article.publishedIso ?? lastReviewedIso;
  const presentation = procedurePagePresentation[article.slug];
  const heading = presentation?.heading ?? article.title;
  const description = presentation?.description ?? article.description;
  const articleUrl = `${baseUrl}/${article.slug}`;
  const group = article.backHref.includes('aesthetic') ? 'aesthetic' : 'reconstructive';
  const hubHref = group === 'aesthetic' ? '/aesthetic-surgery' : '/reconstructive-surgery';
  const generatedRelated = procedureArticleList
    .filter((item) => item.slug !== article.slug)
    .filter((item) => (item.backHref.includes('aesthetic') ? 'aesthetic' : 'reconstructive') === group)
    .map((item) => ({
      title: procedurePagePresentation[item.slug]?.heading ?? item.title,
      href: `/${item.slug}`,
      category: item.eyebrow,
      group
    }));
  const relatedByProcedure: Record<string, string[]> = {
    'eyebag-removal-lower-blepharoplasty-singapore': ['asian-eyelid-surgery-singapore', 'face-neck-lift-singapore'],
    'breast-augmentation-singapore': ['24-hour-rapid-recovery-breast-augmentation-singapore', 'breast-aesthetic-surgery-singapore', 'breast-implant-illness-singapore-evidence', 'mommy-makeover-singapore'],
    'tummy-tuck-singapore': ['body-contouring-liposuction-singapore', 'mommy-makeover-singapore', 'compression-foam-lymphatic-massage-after-liposuction'],
    'mommy-makeover-singapore': ['tummy-tuck-singapore', 'breast-augmentation-singapore', 'breast-aesthetic-surgery-singapore', 'body-contouring-liposuction-singapore'],
    'body-contouring-liposuction-singapore': ['tummy-tuck-singapore', 'compression-foam-lymphatic-massage-after-liposuction', 'mommy-makeover-singapore'],
    'asian-rhinoplasty-singapore': ['rib-rhinoplasty-singapore'],
    'rib-rhinoplasty-singapore': ['asian-rhinoplasty-singapore'],
    'face-neck-lift-singapore': ['eyebag-removal-lower-blepharoplasty-singapore', 'thread-lifting-singapore', 'fat-grafting-singapore', 'asian-eyelid-surgery-singapore'],
    'thread-lifting-singapore': ['face-neck-lift-singapore', 'fat-grafting-singapore', 'lasers-injectables-singapore'],
    'fat-grafting-singapore': ['face-neck-lift-singapore', 'thread-lifting-singapore', 'asian-eyelid-surgery-singapore']
  };
  const preferredHrefs = (relatedByProcedure[article.slug] ?? []).map((slug) => `/${slug}`);
  const seenRelated = new Set<string>();
  const relatedArticles = [...generatedRelated, ...establishedArticles.filter((item) => item.group === group)]
    .filter((item) => item.href !== `/${article.slug}`)
    .filter((item) => preferredHrefs.length === 0 || preferredHrefs.includes(item.href))
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

  const findSection = (ids: string[]) => article.sections.find((section) => ids.includes(section.id))
    ?? article.sections.find((section) => ids.some((id) => section.id.includes(id)));
  const shortcutSections = [
    { label: 'Suitability', section: findSection(['suitability', 'who-this-is-for', 'candidate']) },
    { label: 'Consultation', section: findSection(['consultation', 'assessment', 'planning']) },
    { label: 'Cost factors', section: findSection(['cost-quotation']) },
    { label: 'Recovery', section: findSection(['recovery']) },
    { label: 'Risks', section: findSection(['risks']) }
  ].filter((item): item is { label: string; section: NonNullable<typeof item.section> } => Boolean(item.section));
  const seenShortcuts = new Set<string>();
  const shortcutLinks = shortcutSections.filter((item) => {
    if (seenShortcuts.has(item.section.id)) return false;
    seenShortcuts.add(item.section.id);
    return true;
  }).map((item) => ({ label: item.label, href: `#${item.section.id}` }));

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
            name: heading,
            item: articleUrl
          }
        ]
      },
      physicianJsonLd,
      {
        '@type': 'MedicalWebPage',
        '@id': `${articleUrl}#webpage`,
        url: articleUrl,
        name: heading,
        headline: heading,
        description,
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
        ...(article.slug === 'body-contouring-liposuction-singapore' ? {
          mentions: [
            { '@type': 'MedicalProcedure', name: 'Liposuction' },
            { '@type': 'MedicalProcedure', name: 'Body contouring' },
            { '@type': 'MedicalProcedure', name: 'Abdominoplasty' }
          ]
        } : {}),
        ...(article.slug === 'asian-rhinoplasty-singapore' ? {
          mentions: [
            { '@type': 'MedicalProcedure', name: 'Rhinoplasty' },
            { '@type': 'MedicalProcedure', name: 'Revision rhinoplasty' },
            { '@type': 'MedicalProcedure', name: 'Cartilage grafting' }
          ]
        } : {}),
        ...(article.slug === 'rib-rhinoplasty-singapore' ? {
          mentions: [
            { '@type': 'MedicalProcedure', name: 'Rhinoplasty' },
            { '@type': 'MedicalProcedure', name: 'Rib cartilage grafting' },
            { '@type': 'MedicalProcedure', name: 'Revision rhinoplasty' }
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
        datePublished: publishedIso,
        dateModified: reviewedIso,
        lastReviewed: reviewedIso,
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
                <Link href={hubHref}>{group === 'aesthetic' ? 'Aesthetic surgery' : 'Reconstructive surgery'}</Link>
              </nav>
              <div className="eyebrow">{article.eyebrow}</div>
              <h1>{heading}</h1>
              <p className="lead">{article.lead}</p>
              <div className="hero-actions">
                <a href="#enquire" className="btn btn-primary">Enquire about assessment</a>
                <Link href={hubHref} className="btn btn-ghost">{article.backLabel}</Link>
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
              <strong>{article.publishedIso ? 'Clinically reviewed by Dr Jeremy Sun' : 'Clinically authored and reviewed by Dr Jeremy Sun'}</strong>
              <span>Senior Consultant Plastic Surgeon, Singapore • Last reviewed {reviewedIso}</span>
              <nav className="reviewer-evidence-links" aria-label="About the clinical reviewer">
                <Link href="/plastic-surgeon-singapore">Surgeon profile</Link>
                <Link href="/training-and-fellowships">Training and fellowships</Link>
                <Link href="/publications">Selected publications</Link>
              </nav>
            </div>

            <ProcedureQuickLinks links={shortcutLinks} />

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

            {article.sections.map((section) => (
              <section className="article-reading-section" key={section.id}>
                <h2 id={section.id}>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.image ? (
                  <figure className="article-material-figure">
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      width={section.image.width}
                      height={section.image.height}
                      sizes="(max-width: 820px) calc(100vw - 44px), 776px"
                    />
                    <figcaption>{section.image.caption}</figcaption>
                  </figure>
                ) : null}
                {section.comparison ? (
                  <div className="article-comparison-wrap">
                    <table className="article-comparison-table">
                      <caption>{section.comparison.caption}</caption>
                      <thead>
                        <tr>
                          {section.comparison.columns.map((column) => <th scope="col" key={column}>{column}</th>)}
                        </tr>
                      </thead>
                      <tbody>
                        {section.comparison.rows.map((row) => (
                          <tr key={row.label}>
                            <th scope="row">{row.label}</th>
                            {row.values.map((value) => <td key={value}>{value}</td>)}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}
                {article.slug === 'body-contouring-liposuction-singapore' && section.id === 'risks' ? (
                  <>
                    <p>Serious complications can include blood clots in the legs or lungs, fluid-related problems affecting the lungs, and injury to deeper tissues or internal organs. Individual risk depends on the treatment extent, medical history and surgical plan and should be discussed before consent.</p>
                    <p>Further patient information: <a href="https://www.plasticsurgery.org/cosmetic-procedures/liposuction/safety">ASPS liposuction risks and safety</a>, <a href="https://www.plasticsurgery.org/cosmetic-procedures/liposuction/candidates">ASPS liposuction suitability</a>, and <a href="https://www.nhs.uk/tests-and-treatments/cosmetic-procedures/cosmetic-surgery/liposuction/">NHS liposuction overview</a>.</p>
                  </>
                ) : null}
                {article.slug === 'tummy-tuck-singapore' && section.id === 'risks' ? (
                  <p>Further patient information: <a href="https://www.plasticsurgery.org/cosmetic-procedures/tummy-tuck/safety">ASPS tummy tuck risks and safety</a>, <a href="https://www.plasticsurgery.org/cosmetic-procedures/tummy-tuck/candidates">ASPS tummy tuck suitability</a>, and <a href="https://www.plasticsurgery.org/cosmetic-procedures/tummy-tuck/recovery">ASPS tummy tuck recovery guidance</a>.</p>
                ) : null}
                {(article.slug === 'asian-rhinoplasty-singapore' || article.slug === 'rib-rhinoplasty-singapore') && section.id === 'risks' ? (
                  <p>Further patient information: <a href="https://www.plasticsurgery.org/cosmetic-procedures/rhinoplasty/safety">ASPS rhinoplasty risks and safety</a>, <a href="https://www.plasticsurgery.org/cosmetic-procedures/rhinoplasty/candidates">ASPS rhinoplasty suitability</a>, and <a href="https://www.plasticsurgery.org/cosmetic-procedures/rhinoplasty/recovery">ASPS rhinoplasty recovery guidance</a>.</p>
                ) : null}
                {article.slug === 'breast-augmentation-singapore' && section.id === 'risks' ? (
                  <p>Further patient information: <a href="https://www.plasticsurgery.org/cosmetic-procedures/breast-augmentation/safety">ASPS breast augmentation risks and safety</a>, <a href="https://www.plasticsurgery.org/cosmetic-procedures/breast-augmentation/recovery">ASPS breast augmentation recovery guidance</a>, and the <a href="https://www.fda.gov/medical-devices/implants-and-prosthetics/breast-implants">FDA breast implant information hub</a>.</p>
                ) : null}
                {article.slug === 'asian-rhinoplasty-singapore' && section.id === 'materials' ? (
                  <p>For a focused discussion of cartilage harvest, donor-site scars and alternatives, read the <Link href="/rib-rhinoplasty-singapore">rib cartilage rhinoplasty guide</Link>.</p>
                ) : null}
                {article.slug === 'breast-augmentation-singapore' && section.id === 'rapid-recovery' ? (
                  <p>Read the <Link href="/24-hour-rapid-recovery-breast-augmentation-singapore">rapid recovery breast augmentation guide</Link> for patient selection, early movement and activity limits.</p>
                ) : null}
                {article.slug === 'body-contouring-liposuction-singapore' && section.id === 'skin-quality' ? (
                  <p>Compare the <Link href="/tummy-tuck-singapore">tummy tuck and abdominoplasty guide</Link> when discussing loose abdominal skin and abdominal wall concerns.</p>
                ) : null}
                {article.slug === 'tummy-tuck-singapore' && section.id === 'liposuction-vs-tummy-tuck' ? (
                  <p>Read the <Link href="/body-contouring-liposuction-singapore">liposuction and body contouring guide</Link> to compare treatment areas, skin quality and recovery considerations.</p>
                ) : null}
                {article.slug === 'face-neck-lift-singapore' && section.id === 'neck-lift-decision' ? (
                  <p>Related guides cover <Link href="/body-contouring-liposuction-singapore">liposuction planning</Link> and <Link href="/thread-lifting-singapore">thread lifting</Link>. Discuss which option fits the concern identified at assessment.</p>
                ) : null}
                {section.items ? <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul> : null}
              </section>
            ))}

            {article.slug === 'eyebag-removal-lower-blepharoplasty-singapore' ? (
              <>
                <p>Anatomy reference: <a href="https://pubmed.ncbi.nlm.nih.gov/22634656/">Wong, Hsieh and Mendelson: the tear trough ligament and its anatomical relationship to the lower-eyelid groove</a> (Plastic and Reconstructive Surgery, 2012). This anatomical study explains tissue attachments; it does not predict an individual treatment result.</p>
                <p>Further patient information: <a href="https://www.plasticsurgery.org/cosmetic-procedures/eyelid-surgery/procedure">ASPS eyelid surgery approaches</a> and <a href="https://www.plasticsurgery.org/cosmetic-procedures/eyelid-surgery/safety">ASPS eyelid surgery risks</a>.</p>
              </>
            ) : null}

            <h2 id="faq">FAQs</h2>
            {article.faqs.map((faq) => (
              <section className="article-faq-card" key={faq.question}>
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
            <ContactForm defaultEnquiryType={group === 'aesthetic' ? 'Aesthetic surgery' : 'Reconstructive surgery'} />
          </div>
        </section>
      </article>
    </main>
  );
}
