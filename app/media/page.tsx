import type { Metadata } from 'next';
import Image from 'next/image';
import Navigation from '../Navigation';

type MediaFeature = {
  source: string;
  title: string;
  description: string;
  href: string;
  label: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  portrait?: boolean;
  wide?: boolean;
};

const featuredMedia: MediaFeature[] = [
  {
    source: 'The Straits Times',
    title: 'New surgery to treat Alzheimer’s disease',
    description: 'Quoted as a clinical co-investigator on lymphatic bypass principles and the potential role of neck lymphatic-to-vein connections in brain waste-clearance research.',
    href: 'https://www.straitstimes.com/singapore/health/new-surgical-procedure-shown-to-improve-symptoms-of-moderate-alzheimers-disease',
    label: 'Read feature',
    image: '/images/media/straits-times-alzheimers-feature.webp',
    imageAlt: 'The Straits Times feature image on lymphatic bypass research',
    imageWidth: 1140,
    imageHeight: 760
  },
  {
    source: 'CNA interview',
    title: 'Treating swelling of limbs',
    description: 'CNA interview segment on lymphedema screening and treatment, including CGH screening work for patients with limb swelling.',
    href: 'https://youtu.be/l0aKzwLbhKM?is=6yeOKGDbJLhfljmH',
    label: 'Watch feature',
    image: '/images/media/cna-lymphedema-interview-screenshot.jpg',
    imageAlt: 'CNA interview screenshot showing Dr Jeremy Sun discussing treatment for swelling of limbs',
    imageWidth: 1280,
    imageHeight: 500,
    wide: true
  },
  {
    source: 'The Straits Times Forum',
    title: 'All medical procedures carry risks, including injectable treatments',
    description: 'Co-signed professional commentary on patient safety, aesthetic treatments and balanced decision-making in medical procedures.',
    href: 'https://www.straitstimes.com/opinion/forum/forum-all-medical-procedures-carry-risks-including-injectable-treatments',
    label: 'Read forum letter',
    image: '/images/media/straits-times-forum-injectables-risk.webp',
    imageAlt: 'The Straits Times Forum article image for commentary on injectable treatment risks',
    imageWidth: 1140,
    imageHeight: 760
  },
  {
    source: 'NHK documentary',
    title: 'Lymphedema surgeons in Japan',
    description: 'Featured in an NHK documentary segment on lymphedema surgeons and lymphatic surgery in Japan.',
    href: 'https://lymphedasia.com/educational-resources/',
    label: 'View resource',
    image: '/images/media/nhk-lymphedema-documentary.jpg',
    imageAlt: 'Thumbnail for NHK documentary feature on lymphedema surgeons in Japan',
    imageWidth: 1024,
    imageHeight: 600
  }
];

const educationFeatures: MediaFeature[] = [
  {
    source: 'Invited speaker',
    title: 'St Luke’s ElderCare CommCare Symposium 2026',
    description: 'Invited Wound Care track lecture on recognition and management of lymphoedema and its impact on chronic wounds, scheduled for 4 September 2026.',
    href: '/st-lukes-eldercare-symposium-lymphoedema-wound-care-2026',
    label: 'View lecture note'
  },
  {
    source: 'Invited panelist',
    title: 'Executive Edge Series: Innovative AI-Powered CX Leadership',
    description: 'Invited cross-industry panel discussion on AI-powered customer experience and customer-centric leadership, held at NUS in August 2026.',
    href: '/images/media/executive-edge-ai-cx-leadership-jeremy-sun-2026.webp',
    label: 'View event poster',
    image: '/images/media/executive-edge-ai-cx-leadership-jeremy-sun-2026.webp',
    imageAlt: 'Executive Edge Series poster listing Dr Jeremy Sun as Head of Plastic Surgery and invited panelist for Innovative AI-Powered CX Leadership',
    imageWidth: 914,
    imageHeight: 1280,
    portrait: true
  },
  {
    source: 'Invited speaker',
    title: 'SingHealth Duke-NUS Scientific Congress 2025',
    description: 'Professional speaker profile covering Dr Sun’s plastic, reconstructive, aesthetic and lymphatic surgery work.',
    href: 'https://www.singhealthdukenus.com.sg/conference/sdc2025/our-speakers/Jeremy-Sun',
    label: 'View profile',
    image: '/images/media/singhealth-speaker-jeremy-sun.jpg',
    imageAlt: 'Dr Jeremy Sun speaker profile photograph for SingHealth Duke-NUS Scientific Congress',
    imageWidth: 295,
    imageHeight: 354,
    portrait: true
  },
  {
    source: 'LymphedAsia',
    title: 'Lymphedema education resource',
    description: 'Patient-facing educational resource on lymphedema, lymphatic surgery and specialist assessment.',
    href: 'https://lymphedasia.com/dr-jeremy-sun-mingfa/',
    label: 'View resource'
  }
];

const educationAreas = [
  'Plastic and reconstructive surgery education',
  'Lymphedema and lymphatic surgery awareness',
  'Aesthetic surgery decision-making and patient education',
  'Professional education through invited talks and conference platforms'
];

export const metadata: Metadata = {
  title: 'Media & Education',
  description: 'Selected media features, expert commentary and public education contributions by Dr Jeremy Sun, Plastic, Reconstructive and Aesthetic Surgeon in Singapore.',
  alternates: {
    canonical: '/media'
  }
};

export default function MediaPage() {
  return (
    <main className="article-page">
      <Navigation />
      <section className="article-hero">
        <div className="container article-hero-grid">
          <div>
            <div className="eyebrow">Media & public education</div>
            <h1>Selected media and education features.</h1>
            <p className="lead">Media interviews, expert commentary, professional features and educational resources related to plastic, reconstructive, aesthetic and lymphatic surgery.</p>
          </div>
          <div className="article-summary-card">
            <h2>Focus areas</h2>
            <ul>
              <li>Plastic and reconstructive surgery</li>
              <li>Lymphedema and lymphatic surgery</li>
              <li>Aesthetic surgery education</li>
              <li>Professional and public education</li>
            </ul>
          </div>
        </div>
      </section>

      <article className="article-content">
        <div className="container article-narrow media-page-content">
          <p className="notice-text">This page presents selected public-facing features and educational contributions. The information is general in nature and does not replace a personalised medical consultation.</p>

          <h2>Featured media</h2>
          <div className="media-list">
            {featuredMedia.map((item) => (
              <a className="card linked-card media-feature-card media-visual-card" href={item.href} key={item.title} target="_blank" rel="noreferrer">
                {item.image && item.imageAlt && item.imageWidth && item.imageHeight ? <div className={`media-card-image ${item.portrait ? 'portrait-media-image' : ''} ${item.wide ? 'wide-media-image' : ''}`}><Image src={item.image!} alt={item.imageAlt!} width={item.imageWidth!} height={item.imageHeight!} /></div> : null}
                <small>{item.source}</small>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <h2>Professional commentary and education platforms</h2>
          <div className="media-list">
            {educationFeatures.map((item) => (
              <a className="card linked-card media-feature-card media-visual-card" href={item.href} key={item.title} target="_blank" rel="noreferrer">
                {item.image && item.imageAlt && item.imageWidth && item.imageHeight ? <div className={`media-card-image ${item.portrait ? 'portrait-media-image' : ''} ${item.wide ? 'wide-media-image' : ''}`}><Image src={item.image!} alt={item.imageAlt!} width={item.imageWidth!} height={item.imageHeight!} /></div> : null}
                <small>{item.source}</small>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <h2>Areas of public education</h2>
          <p>Dr Sun’s public-facing education work is organised around practical, patient-relevant and professional topics in plastic surgery.</p>
          <ul>
            {educationAreas.map((category) => <li key={category}>{category}</li>)}
          </ul>
        </div>
      </article>
    </main>
  );
}
