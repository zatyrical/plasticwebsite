import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '../Navigation';
import ContactForm from '../ContactForm';

export const metadata: Metadata = {
  title: 'LVA Surgery Singapore | Lymphovenous Bypass | Dr Jeremy Sun',
  description:
    'Patient information on lymphovenous bypass and LVA surgery in Singapore, including suitability, imaging, recovery, cellulitis risk and compression after surgery.',
  alternates: {
    canonical: '/lymphovenous-bypass-lva-surgery-singapore'
  },
  openGraph: {
    title: 'Lymphovenous Bypass / LVA Surgery in Singapore | Dr Jeremy Sun',
    description:
      'Learn about LVA surgery, lymphatic imaging, suitability, recovery, cellulitis risk and compression after lymphovenous bypass in Singapore.',
    url: '/lymphovenous-bypass-lva-surgery-singapore',
    type: 'article'
  },
  keywords: [
    'LVA surgery Singapore',
    'lymphovenous bypass Singapore',
    'lymphaticovenular anastomosis Singapore',
    'lymphedema surgery Singapore',
    'lymphatic surgery Singapore'
  ]
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is LVA the same as lymphovenous bypass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LVA commonly refers to lymphaticovenular anastomosis, a type of lymphovenous bypass procedure connecting lymphatic channels to small veins.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is LVA only useful for early lymphedema?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LVA is often associated with early-stage lymphedema, but some advanced-stage patients may still be suitable if their disease is more fluid-dominant and imaging shows usable lymphatic channels.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can LVA reduce cellulitis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In appropriately selected patients, lymphatic surgery may significantly reduce the risk or frequency of cellulitis. Outcomes vary, and patients should continue skin care and seek early treatment for infection symptoms.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long is the hospital stay after LVA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Dr Sun’s practice, patients typically go home the next day after LVA surgery, depending on the surgical plan, anaesthetic recovery and individual clinical circumstances. This should be confirmed during consultation.'
      }
    },
    {
      '@type': 'Question',
      name: 'Will I still need compression after LVA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many patients continue compression after LVA, at least initially. Earlier intervention may improve the chance of reducing or weaning compression, but this depends on disease severity, imaging findings and response to surgery.'
      }
    }
  ]
};

export default function LvaSurgeryPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navigation />

      <article className="article-page">
        <section className="article-hero">
          <div className="container article-hero-grid">
            <div>
              <div className="eyebrow">Lymphovenous bypass</div>
              <h1>Lymphovenous Bypass / LVA Surgery in Singapore</h1>
              <p className="lead">
                Patient information on LVA surgery, suitability, imaging, recovery, cellulitis risk and compression after surgery.
              </p>
              <div className="hero-actions">
                <a href="#enquire" className="btn btn-primary">Enquire about LVA assessment</a>
                <Link href="/lymphedema-surgery-singapore" className="btn btn-ghost">Lymphedema overview</Link>
              </div>
            </div>
            <aside className="article-summary-card">
              <h2>On this page</h2>
              <ul>
                <li><a href="#what-is-lva">What is LVA?</a></li>
                <li><a href="#suitability">Who may be suitable?</a></li>
                <li><a href="#cellulitis">Cellulitis and infection</a></li>
                <li><a href="#recovery">Recovery and compression</a></li>
                <li><a href="#training">Dedicated training</a></li>
                <li><a href="#faq">FAQs</a></li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section article-content">
          <div className="container article-narrow">
            <p>
              Lymphovenous bypass, also known as lymphaticovenular anastomosis or LVA, is a supermicrosurgical procedure used in selected patients with lymphedema. It involves connecting tiny lymphatic channels to nearby small veins, creating alternative drainage pathways for lymphatic fluid.
            </p>
            <p>
              LVA is one of the main physiological operations used in lymphatic surgery. It aims to improve lymphatic drainage rather than remove tissue. In appropriately selected patients, it may help reduce swelling, heaviness, recurrent cellulitis or infection frequency, and dependence on compression garments. Outcomes vary between individuals, and careful assessment is required before any recommendation can be made.
            </p>
            <p>
              Dr Jeremy Sun is a Senior Consultant plastic surgeon in Singapore with a clinical and academic focus in lymphatic surgery, microsurgical reconstruction and lymphedema care. He completed a MOH-accredited dedicated lymphedema surgery training program in Tokyo focused specifically on lymphatic surgery and complex lymphedema care.
            </p>
            <p className="notice-text">
              This page provides general information on LVA surgery and should not replace a consultation with a qualified medical practitioner. Suitability, risks, recovery and outcomes vary between individuals.
            </p>

            <h2 id="what-is-lva">What is LVA surgery?</h2>
            <p>
              LVA is a form of supermicrosurgery. During the procedure, small lymphatic vessels are identified and connected to nearby venules under high magnification. These connections may allow lymphatic fluid to drain into the venous circulation, bypassing areas where lymphatic flow is impaired.
            </p>
            <p>
              The operation is usually performed through small incisions. The number and location of bypasses depend on the patient’s lymphatic imaging, limb condition and operative findings.
            </p>
            <p>LVA may also be called lymphovenous bypass, lymphaticovenular anastomosis, lymphovenous anastomosis or lymphatic bypass surgery.</p>

            <h2 id="suitability">Who may be suitable for LVA?</h2>
            <p>
              Suitability for LVA depends on clinical assessment and lymphatic imaging. The key question is whether there are functioning lymphatic channels that can be used for bypass.
            </p>
            <p>
              LVA is often associated with early-stage lymphedema, but stage alone is not the only factor. In Dr Sun’s practice, selected patients with more advanced lymphedema may still be suitable for LVA when the limb remains more fluid-dominant rather than solid-tissue-dominant.
            </p>
            <p>
              A fluid-dominant limb may still contain lymphatic fluid that can be redirected through bypass surgery. By contrast, a limb dominated by scarring, fibrosis or solid tissue change may respond less predictably to LVA alone and may require additional or alternative treatment strategies.
            </p>
            <p>Patients who may be considered for LVA include those with:</p>
            <ul>
              <li>arm or leg lymphedema after cancer treatment, lymph node surgery or radiotherapy</li>
              <li>primary lymphedema in selected cases</li>
              <li>persistent swelling despite appropriate compression and therapy</li>
              <li>recurrent cellulitis or infection</li>
              <li>heaviness, tightness or functional symptoms affecting daily activities</li>
              <li>lymphatic imaging showing channels that may be suitable for bypass</li>
            </ul>

            <h2 id="cellulitis">Cellulitis and recurrent infection</h2>
            <p>
              Recurrent cellulitis or infection is an important reason to seek surgical assessment. Lymphedema can increase infection risk because impaired lymphatic drainage affects fluid balance, tissue health and immune clearance in the affected limb.
            </p>
            <p>
              In appropriately selected patients, lymphatic surgery may significantly reduce the risk or frequency of cellulitis. This is one of the important potential benefits of LVA, particularly for patients whose lymphedema is complicated by repeated infections.
            </p>
            <p>
              Surgery does not remove the need for good skin care, prompt treatment of infection, and ongoing lymphedema management. Patients with fever, spreading redness, sudden worsening swelling or severe pain should seek urgent medical attention.
            </p>

            <h2>Is LVA only for early-stage lymphedema?</h2>
            <p>
              LVA is commonly described as most suitable for early-stage disease, because early lymphedema often has more functioning lymphatic channels and less irreversible tissue change. However, advanced-stage lymphedema is not automatically unsuitable. Some advanced limbs remain fluid-dominant and may still have usable lymphatic channels.
            </p>
            <p>
              The distinction between fluid-dominant and solid-tissue-dominant disease is therefore important. A detailed examination and lymphatic imaging help determine whether LVA is likely to be useful.
            </p>

            <h2>Why LVA is often considered first when suitable</h2>
            <p>
              Where suitable lymphatic channels are present, LVA is often favoured as an initial surgical option because it is less invasive than larger reconstructive or reductive procedures. It is performed through small incisions and usually involves little downtime compared with larger operations.
            </p>
            <p>
              In Dr Sun’s practice, patients typically go home the next day after LVA surgery, depending on the surgical plan, anaesthetic recovery and individual clinical circumstances. Some patients may notice early decongestion, although timing and degree of improvement vary.
            </p>
            <p>
              Earlier intervention may improve the likelihood of reducing reliance on compression garments. Some patients may be able to reduce compression use over time, while others will continue to need compression as part of long-term care.
            </p>

            <h2>Consultation and imaging</h2>
            <p>Assessment before LVA may include:</p>
            <ul>
              <li>medical history and cause of lymphedema</li>
              <li>duration and progression of swelling</li>
              <li>history of cellulitis or skin infections</li>
              <li>examination of limb volume, tissue texture and skin condition</li>
              <li>review of compression garment use and lymphedema therapy</li>
              <li>discussion of goals, expectations and limitations</li>
              <li>lymphatic imaging where appropriate</li>
            </ul>
            <p>
              Imaging may include indocyanine green lymphography, lymphoscintigraphy or other investigations depending on availability and clinical need. Imaging helps identify whether lymphatic channels are present, how they function, and where bypasses may be planned.
            </p>

            <h2>What happens during LVA surgery?</h2>
            <p>
              The exact operative plan is individualised. In general, LVA involves identifying suitable lymphatic channels and small veins, making small skin incisions over planned areas, using high magnification to connect lymphatic channels to venules, creating one or more bypasses depending on the patient’s anatomy, and closing the small incisions with dressings.
            </p>
            <p>
              Because the vessels are extremely small, LVA requires supermicrosurgical technique and experience in lymphatic anatomy and imaging interpretation.
            </p>

            <h2 id="recovery">Recovery and compression after LVA</h2>
            <p>
              Recovery after LVA is usually shorter than after larger lymphatic or reconstructive operations. Many patients can mobilise early, although the exact plan depends on the limb treated, number of incisions, anaesthetic plan and surgeon’s advice.
            </p>
            <p>
              Patients may need wound care for small incisions, short-term activity modification, guidance on when to restart or adjust compression, follow-up appointments to monitor symptoms and limb changes, ongoing lymphedema therapy where appropriate, and continued skin care and infection prevention.
            </p>
            <p>
              The degree and timing of improvement vary. Some patients notice early improvement, while others improve more gradually. Some patients may not experience meaningful volume reduction despite technically successful surgery.
            </p>
            <p>
              Compression remains an important part of lymphedema care for many patients. Earlier LVA may improve the likelihood of reducing compression dependence, but this is not guaranteed. After surgery, compression plans should be individualised.
            </p>

            <h2>Risks and limitations</h2>
            <p>All surgery carries risks. Potential risks of LVA may include:</p>
            <ul>
              <li>bleeding or bruising</li>
              <li>infection</li>
              <li>wound healing problems</li>
              <li>scarring</li>
              <li>lymph leak or fluid collection</li>
              <li>numbness or altered sensation</li>
              <li>persistent swelling</li>
              <li>limited or no improvement</li>
              <li>recurrence or progression of symptoms</li>
              <li>need for continued compression or further treatment</li>
              <li>anaesthetic risks</li>
            </ul>
            <p>
              LVA is a low-incision operation compared with larger procedures, but it is still surgery. A consultation is needed to discuss individual risks and whether the expected benefits justify treatment.
            </p>

            <h2 id="training">Why dedicated lymphatic surgery training matters</h2>
            <p>
              LVA requires more than general microsurgical ability. It involves lymphatic imaging interpretation, disease staging, recognition of fluid-dominant versus solid-tissue-dominant disease, supermicrosurgical technique, and long-term lymphedema management.
            </p>
            <p>
              In Dr Sun’s view, brief exposure to lymphatic surgery is often not enough to provide broad-based experience across the full spectrum of lymphedema severity. Patients considering LVA should feel comfortable asking their care provider about the nature, focus and duration of their lymphatic surgery training.
            </p>
            <p>
              This may include asking to review certificates, training documentation and relevant experience, and doing their own due diligence before deciding where to seek treatment.
            </p>

            <h2 id="faq">Frequently asked questions</h2>
            <h3>Is LVA the same as lymphovenous bypass?</h3>
            <p>Yes. LVA is commonly used to refer to lymphaticovenular anastomosis, a type of lymphovenous bypass procedure connecting lymphatic channels to small veins.</p>
            <h3>Is LVA only useful for early lymphedema?</h3>
            <p>No. LVA is often associated with early-stage lymphedema, but some advanced-stage patients may still be suitable if their disease is more fluid-dominant and imaging shows usable lymphatic channels.</p>
            <h3>Can LVA reduce cellulitis?</h3>
            <p>In appropriately selected patients, lymphatic surgery may significantly reduce the risk or frequency of cellulitis. Outcomes vary, and patients should continue skin care and seek early treatment for infection symptoms.</p>
            <h3>How long is the hospital stay after LVA?</h3>
            <p>In Dr Sun’s practice, patients typically go home the next day after LVA surgery, depending on the surgical plan, anaesthetic recovery and individual clinical circumstances. This should be confirmed during consultation.</p>
            <h3>Will I still need compression after LVA?</h3>
            <p>Many patients continue compression after LVA, at least initially. Earlier intervention may improve the chance of reducing or weaning compression, but this depends on disease severity, imaging findings and response to surgery.</p>
            <h3>What if my lymphedema is mostly solid tissue or fibrosis?</h3>
            <p>If swelling is dominated by fibrosis, scarring or solid tissue change, LVA alone may be less predictable. Other treatment strategies, including reductive procedures or combined approaches, may be discussed depending on assessment.</p>
          </div>
        </section>

        <section id="enquire" className="section article-enquiry">
          <div className="container grid-2">
            <div>
              <h2>Enquiry and consultation</h2>
              <p className="section-intro">
                A consultation can help determine whether LVA is appropriate, whether lymphatic imaging is needed, and how surgery fits into long-term lymphedema management.
              </p>
              <p className="section-intro">
                Use the enquiry form to request an appointment or ask about lymphedema assessment. Please do not send urgent medical concerns through the website form.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </article>
    </main>
  );
}
