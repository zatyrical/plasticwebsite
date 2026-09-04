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
    title: 'Asian Eyelid Surgery in Singapore',
    href: '/asian-eyelid-surgery-singapore',
    category: 'Aesthetic surgery',
    group: 'aesthetic'
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
  const seenRelated = new Set<string>();
  const relatedArticles = [...generatedRelated, ...establishedArticles.filter((item) => item.group === group)]
    .filter((item) => item.href !== `/${article.slug}`)
    .filter((item) => {
      if (seenRelated.has(item.href)) return false;
      seenRelated.add(item.href);
      return true;
    })
    .slice(0, 4);

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
            item: `${baseUrl}/${article.backHref.replace('/#', '#')}`
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

            {article.sections.map((section) => (
              <section key={section.id}>
                <h2 id={section.id}>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
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
