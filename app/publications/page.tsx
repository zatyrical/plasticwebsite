import type { Metadata } from 'next';
import Navigation from '../Navigation';

const publications = [
  'Venous anatomy of the superficial circumflex iliac artery perforator flap: a cadaveric and clinical study. JPRAS, 2024.',
  'Utilizing the Subunit Concept to Achieve Better Outcomes in Lower Limb Reconstruction: A Clinical Experience in an Asian Population. PRS Global Open, 2024;12(4):e5752.',
  'Current Insights into Post-Traumatic Lymphedema. Trauma Care, 2025.',
  'The 1+X technique: A novel microsurgical approach for secondary lymphedema. JPRAS, 2025;111:1–3.',
  'Lymphovenous shunts in the treatment of lymphedema. Journal of the Chinese Medical Association, 2024.',
  'Primary surgical prevention of lymphedema. Journal of the Chinese Medical Association, 2024;87(6):567–571.',
  'Genital elephantiasis: Surgical treatment and reconstruction. Journal of the Chinese Medical Association, 2024;87(2):142–147.',
  'Vascular anatomy of the anteromedial thigh flap. JPRAS Open, 2017;13:113–125.'
];

const publicationSources: Record<string, string> = {
  'Utilizing the Subunit Concept to Achieve Better Outcomes in Lower Limb Reconstruction: A Clinical Experience in an Asian Population. PRS Global Open, 2024;12(4):e5752.': 'https://doi.org/10.1097/GOX.0000000000005752',
  'Primary surgical prevention of lymphedema. Journal of the Chinese Medical Association, 2024;87(6):567–571.': 'https://doi.org/10.1097/JCMA.0000000000001101',
  'Genital elephantiasis: Surgical treatment and reconstruction. Journal of the Chinese Medical Association, 2024;87(2):142–147.': 'https://doi.org/10.1097/JCMA.0000000000001021',
  'Vascular anatomy of the anteromedial thigh flap. JPRAS Open, 2017;13:113–125.': 'https://doi.org/10.1016/j.jpra.2017.05.008',
  'The 1+X technique: A novel microsurgical approach for secondary lymphedema. JPRAS, 2025;111:1–3.': 'https://doi.org/10.1016/j.bjps.2025.10.006',
  'Venous anatomy of the superficial circumflex iliac artery perforator flap: a cadaveric and clinical study. JPRAS, 2024.': 'https://pubmed.ncbi.nlm.nih.gov/37948880/',
  'Current Insights into Post-Traumatic Lymphedema. Trauma Care, 2025.': 'https://doi.org/10.3390/traumacare5040024',
  'Lymphovenous shunts in the treatment of lymphedema. Journal of the Chinese Medical Association, 2024.': 'https://pubmed.ncbi.nlm.nih.gov/37962114/'
};

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
            {publications.map((publication) => (
              <li key={publication}>
                {publication}
                {publicationSources[publication] && (
                  <> <a href={publicationSources[publication]}>View publication source</a></>
                )}
              </li>
            ))}
          </ol>
        </div>
      </article>
    </main>
  );
}
