import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '../Navigation';
import ContactForm from '../ContactForm';

export const metadata: Metadata = {
  title: 'Breast Reconstruction Singapore | Implant & DIEP Flap | Dr Jeremy Sun',
  description:
    'Patient information on breast reconstruction in Singapore after mastectomy or breast cancer surgery, including implant reconstruction, DIEP flap reconstruction, timing, recovery and risks.',
  alternates: {
    canonical: '/breast-reconstruction-singapore'
  },
  openGraph: {
    title: 'Breast Reconstruction in Singapore | Dr Jeremy Sun',
    description:
      'Learn about breast reconstruction after mastectomy or breast-conserving surgery, including implant reconstruction, DIEP flap reconstruction, timing, recovery and risks.',
    url: '/breast-reconstruction-singapore',
    type: 'article'
  },
  keywords: [
    'breast reconstruction Singapore',
    'DIEP flap Singapore',
    'breast reconstruction after mastectomy Singapore',
    'implant breast reconstruction Singapore',
    'microsurgical breast reconstruction Singapore'
  ]
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is breast reconstruction done at the same time as mastectomy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It can be. Immediate reconstruction is performed at the same operation as mastectomy in selected patients. Delayed reconstruction may be preferred when additional cancer treatment is needed, when radiotherapy is expected, or when the patient wants more time to decide.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is implant or DIEP flap reconstruction better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no single option that suits every patient. Implant reconstruction and DIEP flap reconstruction have different advantages, limitations, risks and recovery patterns. The right choice depends on cancer treatment plans, anatomy, radiotherapy, donor tissue availability, medical factors and patient preference.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is DIEP flap breast reconstruction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DIEP flap reconstruction uses skin and fat from the lower abdomen to reconstruct the breast while preserving the abdominal muscles. The tissue is transferred with its blood vessels and reconnected using microsurgery.'
      }
    },
    {
      '@type': 'Question',
      name: 'Will breast reconstruction affect cancer treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Breast reconstruction should be coordinated with the breast surgeon and oncology team. The priority is safe cancer treatment. Timing and method of reconstruction should take into account radiotherapy, chemotherapy and surveillance needs.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can reconstruction be done years after mastectomy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Delayed breast reconstruction can be considered months or years after mastectomy, depending on the patient’s health, previous treatment, chest tissue condition and reconstructive goals.'
      }
    }
  ]
};

export default function BreastReconstructionPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navigation />

      <article className="article-page">
        <section className="article-hero">
          <div className="container article-hero-grid">
            <div>
              <div className="eyebrow">Breast reconstruction</div>
              <h1>Breast Reconstruction in Singapore</h1>
              <p className="lead">
                Patient information on implant-based reconstruction, DIEP flap reconstruction, timing, recovery, risks and consultation planning.
              </p>
              <div className="hero-actions">
                <a href="#enquire" className="btn btn-primary">Enquire about assessment</a>
                <Link href="/#reconstruction" className="btn btn-ghost">Back to reconstruction</Link>
              </div>
            </div>
            <aside className="article-summary-card">
              <h2>On this page</h2>
              <ul>
                <li><a href="#when-considered">When reconstruction may be considered</a></li>
                <li><a href="#timing">Immediate versus delayed reconstruction</a></li>
                <li><a href="#types">Implant and DIEP flap options</a></li>
                <li><a href="#consultation">Consultation and planning</a></li>
                <li><a href="#faq">FAQs</a></li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section article-content">
          <div className="container article-narrow">
            <p>
              Breast reconstruction is surgery to restore breast shape after mastectomy, breast-conserving cancer surgery, trauma or other conditions affecting the breast. Reconstruction may involve implants, the patient’s own tissue, or a combination of approaches.
            </p>
            <p>
              The aim is to help restore form, symmetry and body confidence while keeping cancer treatment, safety, recovery and long-term health as the priorities. Breast reconstruction is highly individual. The most appropriate option depends on cancer treatment plans, body shape, previous surgery, radiotherapy, medical conditions, lifestyle, personal preferences and the availability of suitable donor tissue.
            </p>
            <p>
              A reconstructive surgeon should be comfortable with both implant-based and autologous, or own-tissue, breast reconstruction. This is important because the choice should not be driven by a single preferred technique. For some patients, autologous reconstruction may be the most suitable option. For others, implant-based reconstruction may better match their priorities, anatomy, recovery needs or treatment plan. The decision is made together with the patient, in a personalised and bespoke way, after aligning medical considerations with the patient’s expectations and goals.
            </p>
            <p>
              Dr Jeremy Sun is a Senior Consultant plastic surgeon in Singapore with experience in breast reconstruction, microsurgical reconstruction and complex reconstructive surgery. His reconstructive work includes implant-based reconstruction, free DIEP flap reconstruction, and the reconstruction component for Singapore’s first robotic mastectomy.
            </p>
            <p className="notice-text">
              This page provides general information and should not replace consultation with a qualified medical practitioner. Suitability, risks, recovery and outcomes vary between individuals.
            </p>

            <h2 id="when-considered">When may breast reconstruction be considered?</h2>
            <p>Breast reconstruction may be considered for patients who have had, or are planning to undergo, breast surgery such as:</p>
            <ul>
              <li>mastectomy for breast cancer</li>
              <li>risk-reducing mastectomy in selected high-risk patients</li>
              <li>breast-conserving surgery where contour deformity is expected or has occurred</li>
              <li>revision of previous reconstruction</li>
              <li>correction of breast asymmetry after cancer treatment</li>
              <li>reconstruction after trauma or complex breast surgery</li>
            </ul>
            <p>
              Some patients choose reconstruction at the same operation as mastectomy. Others prefer or are advised to delay reconstruction until after cancer treatment is completed. Both approaches can be appropriate depending on the clinical situation.
            </p>

            <h2 id="timing">Immediate versus delayed breast reconstruction</h2>
            <p>
              Breast reconstruction may be performed immediately or delayed. Immediate reconstruction is performed at the same operation as mastectomy. It may reduce the number of separate operations and can preserve more of the natural breast skin envelope in selected patients. However, it must be planned carefully with the breast surgeon and oncology team, especially if radiotherapy or chemotherapy is likely.
            </p>
            <p>
              Delayed reconstruction is performed months or years after mastectomy or cancer treatment. This may be preferred when cancer treatment needs to take priority, when radiotherapy is expected, or when the patient wants more time to consider options. Some patients may have staged reconstruction, where a temporary or initial reconstructive step is performed first and further refinement is done later.
            </p>

            <h2 id="types">Main types of breast reconstruction</h2>
            <p>
              The main reconstructive options include implant-based reconstruction, autologous tissue reconstruction using the patient’s own tissue, or combined approaches. A reconstructive surgeon should be able to discuss and perform both implant and autologous reconstruction where appropriate, so that the recommendation can be tailored to the patient rather than limited by a single technique.
            </p>
            <p>
              For some patients, autologous reconstruction may feel more aligned with their goals because it uses their own tissue and can provide a more natural-feeling reconstruction. For others, implant reconstruction may be more suitable because it avoids a larger donor-site operation, may involve a different recovery profile, or better fits their personal priorities. Careful alignment of expectations, lifestyle, recovery concerns and cancer treatment plans can improve satisfaction after reconstruction.
            </p>

            <h3>Implant-based breast reconstruction</h3>
            <p>
              Implant-based reconstruction uses a breast implant to restore breast volume. In some cases, a tissue expander may be used first to gradually create space before placement of a final implant. The implant may be placed in front of or behind the chest muscle depending on anatomy, skin quality and surgical planning.
            </p>
            <p>
              Implant reconstruction may involve shorter surgery and no separate tissue donor site. It may be suitable for selected patients, particularly when the skin envelope and soft-tissue coverage are favourable. Limitations include implant-related risks, possible need for future revision surgery, infection, capsular contracture, implant visibility or rippling, and the effect of radiotherapy on implant outcomes.
            </p>

            <h3>DIEP flap breast reconstruction</h3>
            <p>
              DIEP flap reconstruction uses skin and fat from the lower abdomen to reconstruct the breast while preserving the abdominal muscles. The tissue is transferred with its blood vessels and reconnected to blood vessels in the chest using microsurgery.
            </p>
            <p>
              DIEP flap reconstruction can provide a more natural-feeling reconstruction for selected patients and avoids a breast implant. It is a larger operation than implant reconstruction and requires suitable abdominal tissue, microsurgical expertise and a longer recovery period. Potential considerations include abdominal donor-site recovery, wound healing, flap blood supply, abdominal weakness or bulge risk, and the possibility that further revision or symmetry procedures may be needed.
            </p>

            <h3>Other flap options</h3>
            <p>
              When the abdomen is not suitable, other tissue-based options may sometimes be considered. These may include tissue from the back, thigh or other donor sites depending on the patient’s anatomy and reconstructive needs. The choice of donor site should be individualised and discussed in detail during consultation.
            </p>

            <h3>Oncoplastic and partial breast reconstruction</h3>
            <p>
              Some patients undergoing breast-conserving surgery may benefit from oncoplastic reconstruction. This uses plastic surgery principles to reshape the remaining breast tissue, reduce contour deformity, or improve symmetry after tumour removal.
            </p>
            <p>
              After breast-conserving surgery, some patients may notice small divots, depressions or contour irregularities in the treated breast. In selected cases, these areas may be improved with fat grafting performed by a plastic surgeon, where fat is taken from another part of the body and carefully injected to soften or fill the contour defect. Suitability depends on the breast tissue, previous radiotherapy, scar quality, cancer follow-up considerations and the patient’s goals.
            </p>
            <p>
              Oncoplastic approaches depend on tumour location, breast size, expected tissue removal, radiotherapy plans and patient goals. In some cases, surgery on the opposite breast may be discussed for symmetry.
            </p>

            <h2>How treatment planning is coordinated</h2>
            <p>
              Breast reconstruction is usually planned together with the breast surgeon, oncology team and plastic surgeon. Important planning factors include cancer diagnosis and stage, type of breast surgery required, whether radiotherapy or chemotherapy is expected, previous surgery or scars, breast size, body shape and donor tissue availability, smoking status and medical conditions, patient priorities around recovery, appearance and future surgery, and whether one or both breasts are involved.
            </p>
            <p>
              Cancer treatment remains the priority. Reconstruction should be planned in a way that supports safe oncological care and does not create unrealistic expectations about appearance, symmetry or recovery.
            </p>

            <h2 id="consultation">What happens during consultation?</h2>
            <p>A breast reconstruction consultation may include:</p>
            <ul>
              <li>review of the breast cancer or surgical diagnosis</li>
              <li>discussion of mastectomy or breast surgery plan</li>
              <li>examination of the chest, abdomen and possible donor sites</li>
              <li>review of previous scars, radiotherapy and medical history</li>
              <li>explanation of implant and flap reconstruction options</li>
              <li>discussion of timing: immediate, delayed or staged reconstruction</li>
              <li>discussion of likely scars, recovery, risks and limitations</li>
              <li>alignment of patient priorities, expectations and preferred trade-offs</li>
              <li>coordination with the breast surgeon and oncology team where needed</li>
            </ul>
            <p>
              Patients may be asked about their priorities, such as breast size, natural feel, recovery time, willingness to have donor-site scars, and comfort with implants or microsurgery. The process is personalised and bespoke: the surgeon and patient work through the available options together, balancing medical suitability with what matters most to the patient.
            </p>

            <h2>Recovery after breast reconstruction</h2>
            <p>
              Recovery depends on the type of reconstruction, whether mastectomy is performed at the same time, and the patient’s general health. Implant-based reconstruction may involve a shorter initial recovery than free flap reconstruction, although drains, wound care, activity restrictions and follow-up are still needed.
            </p>
            <p>
              DIEP flap reconstruction usually requires a longer hospital stay and recovery period because it involves both the chest and abdominal donor site. Patients may need monitoring of the flap blood supply, drains, abdominal wound care and gradual return to normal activity. After either type of reconstruction, further procedures may sometimes be considered. These may include revision of breast shape, fat grafting, nipple reconstruction, areola tattooing, scar revision or surgery to improve symmetry.
            </p>
            <p>The recovery plan should be individualised and discussed with the treating team.</p>

            <h2>Risks and limitations</h2>
            <p>All surgery carries risks. Potential risks of breast reconstruction may include:</p>
            <ul>
              <li>bleeding or haematoma</li>
              <li>infection</li>
              <li>wound healing problems</li>
              <li>scarring</li>
              <li>pain or altered sensation</li>
              <li>asymmetry</li>
              <li>implant-related problems such as capsular contracture, rippling, malposition or need for replacement</li>
              <li>flap-related problems such as partial or complete flap loss, fat necrosis or blood vessel complications</li>
              <li>abdominal donor-site problems after DIEP flap surgery, including weakness, bulge, hernia or delayed healing</li>
              <li>seroma or fluid collection</li>
              <li>need for further revision surgery</li>
              <li>anaesthetic risks</li>
            </ul>
            <p>
              Radiotherapy, smoking, diabetes, previous surgery and other health factors may affect complication risk and reconstructive outcomes. Breast reconstruction can improve breast form, but it does not recreate a natural breast exactly. Sensation, symmetry, scars and long-term changes vary between patients.
            </p>

            <h2 id="faq">Frequently asked questions</h2>
            <h3>Is breast reconstruction done at the same time as mastectomy?</h3>
            <p>It can be. Immediate reconstruction is performed at the same operation as mastectomy in selected patients. Delayed reconstruction may be preferred when additional cancer treatment is needed, when radiotherapy is expected, or when the patient wants more time to decide.</p>
            <h3>Is implant or DIEP flap reconstruction better?</h3>
            <p>There is no single option that suits every patient. Implant reconstruction and DIEP flap reconstruction have different advantages, limitations, risks and recovery patterns. For some patients, autologous reconstruction may be the most suitable choice. For others, implant reconstruction may better match their priorities. The right choice depends on cancer treatment plans, anatomy, radiotherapy, donor tissue availability, medical factors and patient preference.</p>
            <h3>What is DIEP flap breast reconstruction?</h3>
            <p>DIEP flap reconstruction uses skin and fat from the lower abdomen to reconstruct the breast while preserving the abdominal muscles. The tissue is transferred with its blood vessels and reconnected using microsurgery.</p>
            <h3>Will breast reconstruction affect cancer treatment?</h3>
            <p>Breast reconstruction should be coordinated with the breast surgeon and oncology team. The priority is safe cancer treatment. Timing and method of reconstruction should take into account radiotherapy, chemotherapy and surveillance needs.</p>
            <h3>Will I need more than one operation?</h3>
            <p>Some patients need or choose additional procedures after the first reconstruction. These may include revision of shape, fat grafting, nipple reconstruction, areola tattooing or surgery for symmetry.</p>
            <h3>Can reconstruction be done years after mastectomy?</h3>
            <p>Yes. Delayed breast reconstruction can be considered months or years after mastectomy, depending on the patient’s health, previous treatment, chest tissue condition and reconstructive goals.</p>
          </div>
        </section>

        <section id="enquire" className="section article-enquiry">
          <div className="container grid-2">
            <div>
              <h2>Enquiry and consultation</h2>
              <p className="section-intro">
                A consultation can help clarify which breast reconstruction options may be suitable, how reconstruction fits with cancer treatment, and what recovery and risks may apply.
              </p>
              <p className="section-intro">
                Use the enquiry form to request an appointment or ask about breast reconstruction assessment. Please do not send urgent medical concerns through the website form.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </article>
    </main>
  );
}
