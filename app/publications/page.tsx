import type { Metadata } from 'next';
import Navigation from '../Navigation';

const publications = [
  'Venous anatomy of the superficial circumflex iliac artery perforator flap: a cadaveric and clinical study. JPRAS, 2024.',
  'Utilizing the subunit concept to achieve better outcomes in lower limb reconstruction. PRS Global Open, 2024.',
  'Current Insights into Post-Traumatic Lymphedema. Trauma Care, 2025.',
  'The 1+X Technique: A Novel Microsurgical Approach for Secondary Lymphedema. JPRAS, 2025 in press.',
  'Lymphovenous shunts in the treatment of lymphedema. Journal of the Chinese Medical Association, 2024.',
  'Primary surgical prevention of lymphedema. Journal of the Chinese Medical Association, 2024.',
  'Genital Elephantiasis: Surgical treatment and reconstruction. Journal of the Chinese Medical Association, 2024.',
  'Vascular anatomy of the anteromedial thigh flap. JPRAS Open, 2017.'
];

export const metadata: Metadata = {
  title: 'Selected Publications',
  description: 'Selected peer-reviewed publications and academic work by Dr Jeremy Sun across microsurgery, perforator flaps, lower-limb reconstruction and lymphedema surgery.',
  alternates: {
    canonical: '/publications'
  }
};

export default function PublicationsPage() {
  return (
    <main className="article-page">
      <Navigation />
      <section className="article-hero">
        <div className="container article-hero-grid">
          <div>
            <div className="eyebrow">Academic work</div>
            <h1>Selected publications.</h1>
            <p className="lead">Peer-reviewed publications and academic work across microsurgery, perforator flaps, lower-limb reconstruction and lymphedema surgery.</p>
          </div>
          <div className="article-summary-card">
            <h2>Research focus</h2>
            <ul>
              <li>Microsurgery and perforator flap anatomy</li>
              <li>Lower-limb reconstruction</li>
              <li>Lymphedema and lymphatic surgery</li>
            </ul>
          </div>
        </div>
      </section>

      <article className="article-content">
        <div className="container article-narrow">
          <h2>Selected peer-reviewed work</h2>
          <ol>
            {publications.map((publication) => <li key={publication}>{publication}</li>)}
          </ol>
        </div>
      </article>
    </main>
  );
}
