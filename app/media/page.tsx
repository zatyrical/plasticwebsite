import type { Metadata } from 'next';
import Navigation from '../Navigation';

const featuredMedia = [
  {
    source: 'The Straits Times',
    title: 'New surgical procedure shown to improve symptoms of moderate Alzheimer’s disease',
    description: 'Quoted as a clinical co-investigator on lymphatic bypass principles and the potential role of neck lymphatic-to-vein connections in brain waste-clearance research.',
    href: 'https://www.straitstimes.com/singapore/health/new-surgical-procedure-shown-to-improve-symptoms-of-moderate-alzheimers-disease',
    label: 'Read feature'
  }
];

const educationFeatures = [
  {
    source: 'SingHealth Duke-NUS Scientific Congress 2025',
    title: 'Speaker profile',
    description: 'Professional speaker profile covering Dr Sun’s plastic, reconstructive, aesthetic and lymphatic surgery work.',
    href: 'https://www.singhealthdukenus.com.sg/conference/sdc2025/our-speakers/Jeremy-Sun',
    label: 'View profile'
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
  title: 'Media & Education | Dr Jeremy Sun',
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
              <a className="card linked-card media-feature-card" href={item.href} key={item.title} target="_blank" rel="noreferrer">
                <small>{item.source}</small>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <h2>Public education and professional platforms</h2>
          <div className="media-list">
            {educationFeatures.map((item) => (
              <a className="card linked-card media-feature-card" href={item.href} key={item.title} target="_blank" rel="noreferrer">
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
