import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '../Navigation';
import { baseUrl, physicianId, physicianJsonLd } from '../seoIdentity';

const pageUrl = `${baseUrl}/st-lukes-eldercare-symposium-lymphoedema-wound-care-2026`;
const officialEventUrl = 'https://commcaresymposium.slec.org.sg/wound-care/';

export const metadata: Metadata = {
  title: 'St Luke’s ElderCare Symposium 2026 | Lymphoedema & Wound Care',
  description:
    'Dr Jeremy Sun speaks at the St Luke’s ElderCare CommCare Symposium 2026 on recognition and management of lymphoedema and its impact on chronic wounds.',
  alternates: {
    canonical: '/st-lukes-eldercare-symposium-lymphoedema-wound-care-2026'
  },
  openGraph: {
    title: 'Invited Lecture: Lymphoedema and Chronic Wounds | Dr Jeremy Sun',
    description:
      'Invited professional education session on recognising lymphoedema in chronic wound care at the St Luke’s ElderCare CommCare Symposium 2026.',
    url: '/st-lukes-eldercare-symposium-lymphoedema-wound-care-2026',
    type: 'article'
  },
  keywords: [
    'lymphoedema wound care Singapore',
    'lymphedema wound care Singapore',
    'St Luke’s ElderCare CommCare Symposium',
    'Dr Jeremy Sun lymphedema speaker',
    'chronic wounds lymphoedema'
  ]
};

const eventJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Media & Education', item: `${baseUrl}/media` },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'St Luke’s ElderCare CommCare Symposium 2026',
          item: pageUrl
        }
      ]
    },
    physicianJsonLd,
    {
      '@type': 'EducationEvent',
      '@id': `${pageUrl}#event`,
      name: 'Recognition and Management of Lymphoedema and its Impact on Chronic Wounds',
      description:
        'Invited lecture by Dr Jeremy Sun at the St Luke’s ElderCare CommCare Symposium 2026 Wound Care track, focused on recognising lymphoedema and understanding its impact on chronic wounds.',
      url: officialEventUrl,
      startDate: '2026-09-04T10:30:00+08:00',
      endDate: '2026-09-04T11:15:00+08:00',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: 'Devan Nair Institute for Employment and Employability',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'SG',
          addressLocality: 'Singapore'
        }
      },
      organizer: {
        '@type': 'Organization',
        name: 'St Luke’s ElderCare',
        url: 'https://www.slec.org.sg/'
      },
      performer: { '@id': physicianId },
      speaker: { '@id': physicianId },
      about: [
        'lymphoedema',
        'lymphedema',
        'chronic wounds',
        'wound care',
        'lymphatic surgery',
        'early recognition of limb swelling'
      ]
    },
    {
      '@type': 'Article',
      '@id': `${pageUrl}#article`,
      headline: 'Invited Lecture: Lymphoedema and Chronic Wound Care at St Luke’s ElderCare CommCare Symposium 2026',
      url: pageUrl,
      description: metadata.description,
      inLanguage: 'en-SG',
      author: { '@id': physicianId },
      publisher: { '@id': physicianId },
      about: ['lymphoedema', 'lymphedema', 'wound care', 'chronic wounds'],
      mainEntityOfPage: pageUrl
    }
  ]
};

export default function StLukesSymposiumPage() {
  return (
    <main className="article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
      <Navigation />

      <section className="article-hero">
        <div className="container article-hero-grid">
          <div>
            <div className="eyebrow">Invited lecture · Professional education</div>
            <h1>Lymphoedema and chronic wound care: St Luke’s ElderCare CommCare Symposium 2026</h1>
            <p className="lead">
              Dr Jeremy Sun is speaking on the recognition and management of lymphoedema and its impact on chronic wounds at the St Luke’s ElderCare CommCare Symposium 2026 Wound Care track.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={officialEventUrl} target="_blank" rel="noreferrer">View official symposium page</a>
              <Link className="btn btn-ghost" href="/lymphovenous-bypass-lva-surgery-singapore">Read about LVA surgery</Link>
            </div>
          </div>
          <aside className="article-summary-card">
            <h2>Event details</h2>
            <ul>
              <li><strong>Topic:</strong> Recognition and Management of Lymphoedema and its Impact on Chronic Wounds</li>
              <li><strong>Date:</strong> 4 September 2026</li>
              <li><strong>Time:</strong> 10:30am–11:15am</li>
              <li><strong>Track:</strong> Wound Care</li>
              <li><strong>Venue:</strong> Devan Nair Institute for Employment and Employability</li>
            </ul>
          </aside>
        </div>
      </section>

      <article className="article-content">
        <div className="container article-narrow">
          <p className="notice-text">
            This is a professional education update. It is not an endorsement by the organiser and does not replace personalised medical advice.
          </p>

          <h2>Why lymphoedema matters in wound care</h2>
          <p>
            Lymphoedema can be overlooked in patients with chronic limb swelling, delayed wound healing or recurrent lower-limb infections. In the wound care setting, lymphatic stasis may contribute to persistent inflammation, skin changes, recurrent cellulitis and wounds that do not progress as expected.
          </p>
          <p>
            Dr Sun’s session focuses on recognising lymphoedema earlier, understanding how it can affect chronic wounds, and considering appropriate conservative management, multidisciplinary wound care and timely referral for specialist lymphatic assessment.
          </p>

          <h2>About the session</h2>
          <p>
            The lecture, <strong>“Recognition and Management of Lymphoedema and its Impact on Chronic Wounds”</strong>, is part of the Wound Care track at the St Luke’s ElderCare CommCare Symposium 2026. The programme highlights complex wound presentations and practical decision points that can change wound care management.
          </p>

          <h2>Related lymphedema resources</h2>
          <ul>
            <li><Link href="/lymphovenous-bypass-lva-surgery-singapore">LVB / LVA lymphovenous bypass surgery in Singapore</Link></li>
            <li><Link href="/lymphedema-surgery-singapore">Lymphedema surgery in Singapore</Link></li>
            <li><Link href="/how-to-choose-lymphedema-surgeon-singapore">How to choose a lymphedema surgeon in Singapore</Link></li>
            <li><a href="https://lymphedasia.com/" target="_blank" rel="noreferrer">LymphedAsia patient education hub</a></li>
          </ul>
        </div>
      </article>
    </main>
  );
}
