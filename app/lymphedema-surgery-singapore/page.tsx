import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '../Navigation';
import ContactForm from '../ContactForm';

export const metadata: Metadata = {
  title: 'Lymphedema Surgery Singapore | LVA & Lymphatic Surgery | Dr Jeremy Sun',
  description:
    'Patient information on lymphedema surgery in Singapore, including lymphovenous bypass, cellulitis risk, assessment, suitability, recovery and risks.',
  alternates: {
    canonical: '/lymphedema-surgery-singapore'
  },
  openGraph: {
    title: 'Lymphedema Surgery in Singapore | Dr Jeremy Sun',
    description:
      'Learn about lymphovenous bypass, lymphatic surgery assessment, cellulitis risk, recovery and suitability for lymphedema surgery in Singapore.',
    url: '/lymphedema-surgery-singapore',
    type: 'article'
  },
  keywords: [
    'lymphedema surgery Singapore',
    'lymphatic surgery Singapore',
    'lymphovenous bypass Singapore',
    'LVA surgery Singapore',
    'lymphoedema surgeon Singapore',
    'cellulitis lymphedema surgery'
  ]
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is lymphedema surgery a cure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lymphedema surgery is not usually described as a guaranteed cure. It may improve drainage, symptoms or long-term management in selected patients, but many patients still require compression, therapy and follow-up.'
      }
    },
    {
      '@type': 'Question',
      name: 'Am I suitable for LVA surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Suitability for LVA depends on clinical examination and lymphatic imaging. Some advanced-stage patients may still be suitable if the limb remains fluid-dominant rather than dominated by solid tissue, scarring or fibrosis.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can lymphedema surgery reduce cellulitis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recurrent cellulitis or infection is a strong reason to seek surgical assessment. In appropriately selected patients, lymphatic surgery may significantly reduce the risk or frequency of infection, although outcomes vary.'
      }
    }
  ]
};

export default function LymphedemaSurgeryPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navigation />

      <article className="article-page">
        <section className="article-hero">
          <div className="container article-hero-grid">
            <div>
              <div className="eyebrow">Lymphatic surgery</div>
              <h1>Lymphedema Surgery in Singapore</h1>
              <p className="lead">
                Patient information on lymphedema surgery, lymphovenous bypass, assessment, suitability, recovery and infection risk.
              </p>
              <div className="hero-actions">
                <a href="#enquire" className="btn btn-primary">Enquire about assessment</a>
                <Link href="/#procedures" className="btn btn-ghost">Back to procedures</Link>
              </div>
            </div>
            <aside className="article-summary-card">
              <h2>On this page</h2>
              <ul>
                <li><a href="#what-is-lymphedema">What is lymphedema?</a></li>
                <li><a href="#when-surgery">When surgery may be considered</a></li>
                <li><a href="#types">Types of surgery</a></li>
                <li><a href="#training">Dedicated training</a></li>
                <li><a href="#faq">FAQs</a></li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section article-content">
          <div className="container article-narrow">
            <p>
              Lymphedema is a chronic condition in which lymphatic fluid accumulates in the limb or affected body region, leading to swelling, heaviness, skin changes and recurrent cellulitis or infection in some patients. It may occur after cancer treatment, lymph node surgery, radiotherapy, trauma or infection, and in some patients it may be present without a clear secondary cause.
            </p>
            <p>
              Dr Jeremy Sun is a Senior Consultant plastic surgeon in Singapore with a clinical and academic focus in lymphatic surgery, microsurgical reconstruction and lymphedema care. He completed a MOH-accredited dedicated lymphedema surgery training program in Tokyo, focused specifically on lymphatic surgery and complex lymphedema care — distinct from broader microsurgical fellowships where lymphedema may be only one component of training.
            </p>
            <p className="notice-text">
              This page provides general information on lymphedema surgery and should not replace a consultation with a qualified medical practitioner. Suitability, risks, recovery and outcomes vary between individuals.
            </p>

            <h2 id="what-is-lymphedema">What is lymphedema?</h2>
            <p>
              The lymphatic system helps drain fluid, proteins and immune cells from tissues back into the circulation. When lymphatic drainage is impaired, fluid can accumulate and cause progressive swelling.
            </p>
            <p>Common symptoms may include:</p>
            <ul>
              <li>persistent limb swelling</li>
              <li>heaviness or tightness</li>
              <li>reduced range of motion</li>
              <li>discomfort or aching</li>
              <li>recurrent cellulitis or skin infections</li>
              <li>skin thickening in more advanced disease</li>
              <li>difficulty fitting into shoes, sleeves or clothing</li>
            </ul>
            <p>
              Lymphedema can affect the arm, leg, genital region, trunk or other areas. The pattern and severity vary depending on the cause, duration and remaining lymphatic function.
            </p>

            <h2 id="when-surgery">When may surgery be considered?</h2>
            <p>
              Lymphedema surgery may be considered after careful assessment, particularly when symptoms persist despite conservative management. Conservative treatment remains important for many patients and may include compression garments, skin care, physiotherapy, exercise and specialist lymphedema therapy.
            </p>
            <p>Surgery may be discussed when:</p>
            <ul>
              <li>swelling remains troublesome despite appropriate non-surgical care</li>
              <li>there are recurrent episodes of cellulitis or infection</li>
              <li>imaging shows lymphatic channels that may be suitable for bypass surgery</li>
              <li>the condition is affecting daily activity, comfort or quality of life</li>
              <li>the patient understands that surgery is part of long-term lymphedema management, not a guaranteed cure</li>
            </ul>
            <p>
              Recurrent cellulitis is an important reason to consider surgical assessment. In appropriately selected patients, lymphatic surgery may significantly reduce the risk or frequency of infection, although individual results vary and patients should continue appropriate skin care and medical treatment when infection occurs.
            </p>

            <h2 id="types">Types of lymphedema surgery</h2>
            <p>
              The best approach depends on disease stage, imaging findings, tissue changes and patient goals. Options may include physiological lymphatic surgery, reductive surgery, or a combination of approaches.
            </p>

            <h3>Lymphovenous bypass / lymphaticovenular anastomosis</h3>
            <p>
              Lymphovenous bypass, also known as lymphaticovenular anastomosis or LVA, is a supermicrosurgical procedure that connects functioning lymphatic channels to nearby small veins. The aim is to create alternative drainage pathways for lymphatic fluid. A dedicated patient page on <Link href="/lymphovenous-bypass-lva-surgery-singapore">LVA surgery in Singapore</Link> is available for more detail.
            </p>
            <p>
              LVA is often described as a treatment for early-stage lymphedema, but disease stage alone does not determine suitability. In Dr Sun’s practice, even some patients with advanced-stage lymphedema may be amenable to LVA if imaging and clinical assessment suggest that the limb remains more fluid-dominant rather than solid-tissue-dominant.
            </p>
            <p>
              A fluid-dominant limb may still have lymphatic fluid that can be redirected through bypass surgery. By contrast, a limb dominated by scarring, fibrosis or solid tissue change may respond less predictably to LVA alone and may require different or additional treatment strategies.
            </p>
            <p>
              For appropriately selected patients, LVA is often favoured as an initial surgical option because it is performed through small incisions, usually involves little downtime, and can sometimes produce early decongestion. In Dr Sun’s practice, patients typically go home the next day after LVA surgery, depending on the surgical plan, anaesthetic recovery and individual clinical circumstances. These are general observations rather than guarantees; recovery and results vary between patients. Earlier intervention may improve the likelihood of reducing reliance on compression garments, although some patients will still need compression as part of long-term care.
            </p>

            <h3>Vascularised lymph node transfer</h3>
            <p>
              Vascularised lymph node transfer involves transferring lymph node-containing tissue with its blood supply to an affected region. It may be considered in selected patients, particularly when lymphatic channels are less suitable for bypass alone.
            </p>
            <p>
              The potential benefits and risks, including donor-site considerations, should be discussed carefully during consultation.
            </p>

            <h3>Reductive procedures</h3>
            <p>
              In more advanced lymphedema, excess fibrofatty tissue and skin changes may become a major component of limb enlargement. Reductive procedures may be considered in selected patients to reduce limb volume and improve contour or function. Compression and long-term follow-up are usually still important.
            </p>

            <h2>Consultation and assessment</h2>
            <p>A lymphedema consultation typically includes:</p>
            <ul>
              <li>medical history and cause of lymphedema</li>
              <li>previous cancer treatment, radiotherapy, surgery or infection history</li>
              <li>duration and progression of swelling</li>
              <li>history of cellulitis or skin changes</li>
              <li>examination of limb volume, tissue quality and skin condition</li>
              <li>review of current compression and therapy</li>
              <li>discussion of goals, expectations and limitations</li>
              <li>lymphatic imaging where appropriate</li>
            </ul>
            <p>
              Imaging may include tests such as indocyanine green lymphography, lymphoscintigraphy or other scans depending on availability and clinical need.
            </p>

            <h2>What surgery can and cannot do</h2>
            <p>
              Lymphedema surgery aims to improve lymphatic drainage, symptoms and long-term management in appropriately selected patients. Some patients may experience reduction in swelling, heaviness or infection frequency, but results vary. A key goal of lymphatic surgery is also to reduce episodes of cellulitis or infection where recurrent infection is part of the patient’s disease pattern.
            </p>
            <p>
              Surgery does not guarantee complete resolution of lymphedema. Many patients still require compression, therapy, skin care and long-term monitoring after surgery. The best outcomes usually depend on correct patient selection, careful imaging, realistic expectations and ongoing lymphedema care.
            </p>

            <h2>Recovery after lymphedema surgery</h2>
            <p>
              Recovery depends on the type of procedure performed. LVA is usually performed through small incisions and often has little downtime compared with larger reconstructive operations. Some patients require only a short hospital stay, or may not require an inpatient stay depending on the surgical plan and clinical setting. Lymph node transfer or reductive procedures may involve larger operations and longer recovery.
            </p>
            <p>Patients may need:</p>
            <ul>
              <li>wound care and follow-up appointments</li>
              <li>temporary activity modification</li>
              <li>guidance on compression garment use</li>
              <li>continuation or adjustment of lymphedema therapy</li>
              <li>monitoring for infection or wound issues</li>
              <li>gradual return to exercise based on surgical advice</li>
            </ul>
            <p>The recovery plan should be individualised according to the procedure, disease stage and patient’s general health.</p>

            <h2>Risks and limitations</h2>
            <p>All surgery carries risks. Potential risks of lymphedema surgery may include:</p>
            <ul>
              <li>bleeding or bruising</li>
              <li>infection</li>
              <li>wound healing problems</li>
              <li>scarring</li>
              <li>lymph leak or fluid collection</li>
              <li>numbness or altered sensation</li>
              <li>persistent swelling</li>
              <li>recurrence or progression of symptoms</li>
              <li>need for further treatment or continued compression</li>
              <li>anaesthetic risks</li>
            </ul>
            <p>Specific risks depend on the procedure selected and should be discussed during consultation.</p>

            <h2 id="training">Why dedicated lymphatic surgery training matters</h2>
            <p>
              Lymphedema surgery requires assessment of lymphatic anatomy, disease stage, imaging patterns, microsurgical technique and long-term management. In Dr Sun’s view, brief exposure to lymphatic surgery is often not enough to provide broad-based experience across the full spectrum of lymphedema severity, from early fluid-dominant disease to advanced disease with fibrosis, scarring and recurrent infection.
            </p>
            <p>
              Dr Sun completed a MOH-accredited dedicated lymphedema surgery training program in Tokyo focused specifically on lymphatic surgery and complex lymphedema care. His lymphatic surgery work is also supported by academic publications and invited speaker experience at local and international conferences.
            </p>
            <p>
              Patients considering lymphedema surgery should feel comfortable asking their care provider about the nature, duration and focus of their lymphatic surgery training. This may include asking to review certificates, training documentation and relevant experience, and doing their own due diligence before deciding where to seek treatment. These credentials are presented to help patients understand the nature of Dr Sun’s training and clinical focus. They do not imply guaranteed outcomes or that surgery is suitable for every patient.
            </p>

            <h2 id="faq">Frequently asked questions</h2>
            <h3>Is lymphedema surgery a cure?</h3>
            <p>
              Lymphedema surgery is not usually described as a guaranteed cure. It may improve drainage, symptoms or long-term management in selected patients, but many patients still require compression, therapy and follow-up.
            </p>
            <h3>Am I suitable for LVA surgery?</h3>
            <p>
              Suitability for LVA depends on clinical examination and lymphatic imaging. LVA is commonly associated with early-stage disease, but some advanced-stage patients may still be suitable if the limb remains fluid-dominant rather than dominated by solid tissue, scarring or fibrosis. Assessment is needed before any recommendation can be made.
            </p>
            <h3>Why consider LVA before larger operations?</h3>
            <p>
              Where suitable lymphatic channels are present, LVA is often considered first because it is less invasive than larger reconstructive or reductive procedures, usually has a shorter recovery, and may produce early decongestion in selected patients. It is not suitable for every patient, and imaging is important for planning.
            </p>
            <h3>Can lymphedema surgery reduce cellulitis?</h3>
            <p>
              Recurrent cellulitis or infection is a strong reason to seek surgical assessment. In appropriately selected patients, lymphatic surgery may significantly reduce the risk or frequency of infection. Outcomes vary, and infection prevention still involves skin care, compression where advised, and early medical treatment of cellulitis.
            </p>
            <h3>Do I need compression after surgery?</h3>
            <p>
              Many patients continue compression after surgery, at least during part of their recovery or long-term management. The plan depends on disease severity, procedure type and response to treatment.
            </p>
            <h3>When should I seek medical attention urgently?</h3>
            <p>
              Patients with sudden worsening swelling, fever, spreading redness, severe pain, shortness of breath or symptoms suggestive of infection or blood clot should seek urgent medical attention.
            </p>
          </div>
        </section>

        <section id="enquire" className="section article-enquiry">
          <div className="container grid-2">
            <div>
              <h2>Enquiry and consultation</h2>
              <p className="section-intro">
                A consultation can help determine the type, stage and cause of lymphedema, whether further imaging is useful, and whether surgical or non-surgical treatment options may be appropriate.
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
