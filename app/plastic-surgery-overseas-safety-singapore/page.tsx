import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../Navigation';
import ContactForm from '../ContactForm';
import { baseUrl, physicianId, physicianJsonLd } from '../seoIdentity';
import { sections } from './content';

const slug = 'plastic-surgery-overseas-safety-singapore';
const title = 'Thinking of Plastic Surgery in Korea? Read This Before You Book';
const description = 'Thinking of plastic surgery in Korea? Check surgeon credentials, total costs, dedicated anaesthesia care and follow-up in Singapore before booking.';
const date = '2026-10-09';
const researchImage = '/images/overseas-surgery/researching-overseas-clinics-1536.webp';
export const metadata: Metadata = {
  title: { absolute: 'Thinking of Plastic Surgery in Korea? Read Before You Book' },
  description,
  alternates: { canonical: `/${slug}` },
  openGraph: { title, description, url: `/${slug}`, type: 'article', publishedTime: date,
    images: [{ url: researchImage, width: 1536, height: 864, alt: 'AI-generated illustration of a woman researching overseas clinics' }] },
  twitter: { card: 'summary_large_image', title, description, images: [researchImage] }
};

function InlineText({ text }: { text: string }) {
  return text.split(/(\[[^\]]+\]\(https?:\/\/[^)]+\))/g).map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    return link ? <a key={index} href={link[2]}>{link[1]}</a> : part;
  });
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [physicianJsonLd, {
    '@type': 'MedicalWebPage', '@id': `${baseUrl}/${slug}#webpage`, url: `${baseUrl}/${slug}`,
    name: title, headline: title, description, inLanguage: 'en-SG', datePublished: date, dateModified: date,
    author: { '@id': physicianId }, image: `${baseUrl}${researchImage}`,
    isPartOf: { '@type': 'WebSite', name: 'Dr Jeremy Sun Plastic Surgery', url: baseUrl }
  }, {
    '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Educational articles', item: `${baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: title, item: `${baseUrl}/${slug}` }
    ]
  }]
};

export default function OverseasSurgeryPage() {
  return <main className="article-page">
    <Navigation />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <article>
      <section className="article-hero">
        <div className="container article-hero-grid">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/blog">Educational articles</Link></nav>
            <div className="eyebrow">Overseas clinic selection and follow-up</div>
            <h1>{title}</h1>
            <p className="lead">A guide for Singapore patients comparing overseas clinics, surgeons and package costs before booking.</p>
          </div>
          <aside className="article-summary-card">
            <h2>Before you book</h2>
            <ul>{sections.slice(1).map(section => <li key={section.id}><a href={`#${section.id}`}>{section.heading.replace(/^\d+\. /, '')}</a></li>)}</ul>
          </aside>
        </div>
      </section>
      <section className="section article-content"><div className="container article-narrow">
        <div className="reviewer-card"><strong>By <Link href="/plastic-surgeon-singapore">Dr Jeremy Sun</Link></strong><span>Published 9 October 2026 · General patient education, not individual medical or legal advice.</span></div>
        {sections.map((section, sectionIndex) => <section id={section.id} key={section.id}>
          {sectionIndex > 0 ? <h2>{section.heading}</h2> : null}
          {section.id === 'reported-incidents' ? <figure className="article-material-figure">
            <Image src="/images/overseas-surgery/reported-incidents-headline-illustration-1536.webp" alt="AI-recreated headline excerpts about a Korean forensic death study and a Vietnamese cosmetic surgery investigation, with a disclaimer against country-wide risk comparisons" width={1536} height={864} sizes="(max-width: 820px) calc(100vw - 44px), 776px" />
            <figcaption>AI-created headline illustration, not original newspaper screenshots. Sources: <a href="https://www.straitstimes.com/asia/east-asia/when-beauty-turns-fatal-south-korea-logs-50-plastic-surgery-deaths-since-2016">The Straits Times, 11 February 2026</a> and <a href="https://news.tuoitre.vn/ho-chi-minh-city-police-arrest-5-medical-staff-over-patient-death-at-cosmetic-surgery-hospital-103251014165524286.htm">Tuoi Tre News, 14 October 2025</a>. Reported incidents do not establish a country’s overall surgical risk. Publisher marks identify sources, not endorsement.</figcaption>
          </figure> : null}
          {section.blocks.map((block, index) => {
            if (block.type === 'heading') return <h3 key={index}>{block.text}</h3>;
            if (block.type === 'list') return <ul key={index}>{block.items.map(item => <li key={item}><InlineText text={item} /></li>)}</ul>;
            if (block.type === 'table') return <div className="article-comparison-wrap" key={index} tabIndex={0} role="region" aria-label="Overseas clinic comparison checklist"><table className="article-comparison-table">
              <caption>Compare these arrangements before booking</caption>
              <thead><tr>{block.rows[0].map(cell => <th key={cell} scope="col">{cell}</th>)}</tr></thead>
              <tbody>{block.rows.slice(1).map(row => <tr key={row[0]}><th scope="row">{row[0]}</th><td>{row[1]}</td></tr>)}</tbody>
            </table></div>;
            return <p key={index}><InlineText text={block.text} /></p>;
          })}
          {section.id === 'follow-up' ? <figure className="article-material-figure">
            <Image src={researchImage} alt="AI-generated illustration of a woman comparing clinic information, travel plans and written documents before overseas surgery" width={1536} height={864} sizes="(max-width: 820px) calc(100vw - 44px), 776px" />
            <figcaption>Compare credentials, anaesthesia arrangements and follow-up—not just the package price. AI-generated illustration; not a patient photograph.</figcaption>
          </figure> : null}
        </section>)}
        <section id="related"><h2>Related procedure guides</h2><p>If you are comparing specific treatments, use the relevant guide to prepare questions about assessment, risks and recovery.</p>
          <div className="related-grid">
            <Link className="related-card" href="/asian-rhinoplasty-singapore"><strong>Asian rhinoplasty</strong><span>Materials and treatment planning</span></Link>
            <Link className="related-card" href="/rib-rhinoplasty-singapore"><strong>Rib cartilage rhinoplasty</strong><span>Nasal and donor-site recovery</span></Link>
            <Link className="related-card" href="/breast-augmentation-singapore"><strong>Breast augmentation</strong><span>Implant selection and follow-up</span></Link>
            <Link className="related-card" href="/body-contouring-liposuction-singapore"><strong>Liposuction and body contouring</strong><span>Suitability, recovery and limitations</span></Link>
          </div>
        </section>
      </div></section>
    </article>
    <section className="section article-enquiry" id="enquire"><div className="container article-narrow"><h2>Discuss your treatment questions</h2><p>This form is for non-urgent enquiries. It is not an emergency assessment service or a confirmed arrangement for postoperative care.</p><ContactForm /></div></section>
  </main>;
}
