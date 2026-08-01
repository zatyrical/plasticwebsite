import Link from 'next/link';
import Navigation from './Navigation';
import ContactForm from './ContactForm';
import type { ProcedureArticle } from './procedureArticles';

type Props = {
  article: ProcedureArticle;
};

export default function ProcedureArticlePage({ article }: Props) {
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

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navigation />

      <article className="article-page">
        <section className="article-hero">
          <div className="container article-hero-grid">
            <div>
              <div className="eyebrow">{article.eyebrow}</div>
              <h1>{article.title}</h1>
              <p className="lead">{article.lead}</p>
              <div className="hero-actions">
                <a href="#enquire" className="btn btn-primary">Enquire about assessment</a>
                <Link href={article.backHref} className="btn btn-ghost">{article.backLabel}</Link>
              </div>
            </div>
            <aside className="article-summary-card">
              <h2>On this page</h2>
              <ul>
                {article.sections.map((section) => (
                  <li key={section.id}><a href={`#${section.id}`}>{section.heading}</a></li>
                ))}
                <li><a href="#faq">FAQs</a></li>
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
