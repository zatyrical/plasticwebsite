import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '../Navigation';
import ContactForm from '../ContactForm';

export const metadata: Metadata = {
  title: 'Asian Eyelid Surgery Singapore | Blepharoplasty | Dr Jeremy Sun',
  description:
    'Patient information on Asian eyelid surgery in Singapore, including double eyelid surgery, upper blepharoplasty, ptosis assessment, recovery, risks and consultation planning.',
  alternates: {
    canonical: '/asian-eyelid-surgery-singapore'
  },
  openGraph: {
    title: 'Asian Eyelid Surgery in Singapore | Dr Jeremy Sun',
    description:
      'Learn about Asian eyelid surgery, double eyelid surgery, incisional and non-incisional approaches, ptosis assessment, recovery and risks.',
    url: '/asian-eyelid-surgery-singapore',
    type: 'article'
  },
  keywords: [
    'eyelid surgery Singapore',
    'Asian blepharoplasty Singapore',
    'double eyelid surgery Singapore',
    'upper eyelid surgery Singapore',
    'ptosis surgery Singapore'
  ]
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Asian eyelid surgery the same as double eyelid surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Double eyelid surgery is one type of Asian eyelid surgery. Asian eyelid surgery may also include upper blepharoplasty, ptosis correction, revision eyelid surgery or combined procedures depending on the patient’s anatomy and goals.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is incisional or non-incisional double eyelid surgery better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no single option that is right for every patient. Non-incisional techniques may suit selected patients with favourable anatomy and minimal excess skin. Incisional surgery may be more appropriate when there is excess skin, thicker tissue, ptosis, asymmetry or previous surgery.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is ptosis surgery different from double eyelid surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Ptosis surgery addresses drooping of the upper eyelid related to eyelid muscle or tendon function. Double eyelid surgery mainly creates or defines an eyelid crease. Some patients need both issues assessed together.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long does swelling last after eyelid surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most visible swelling after non-incisional eyelid procedures may take around two weeks to one month to subside. After incisional eyelid surgery, swelling and scar maturation may continue to improve over three to six months. Individual recovery varies.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can revision eyelid surgery fix a previous result?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Revision surgery may improve selected concerns, but it is usually more complex than first-time surgery. Scar tissue, previous tissue removal and eyelid function affect what can be safely changed. A consultation is needed to assess realistic options.'
      }
    }
  ]
};

export default function AsianEyelidSurgeryPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navigation />

      <article className="article-page">
        <section className="article-hero">
          <div className="container article-hero-grid">
            <div>
              <div className="eyebrow">Asian eyelid surgery</div>
              <h1>Asian Eyelid Surgery in Singapore</h1>
              <p className="lead">
                Patient information on double eyelid surgery, upper blepharoplasty, ptosis assessment, recovery, risks and consultation planning.
              </p>
              <div className="hero-actions">
                <a href="#enquire" className="btn btn-primary">Enquire about assessment</a>
                <Link href="/#procedures" className="btn btn-ghost">Back to procedures</Link>
              </div>
            </div>
            <aside className="article-summary-card">
              <h2>On this page</h2>
              <ul>
                <li><a href="#what-is-asian-eyelid-surgery">What is Asian eyelid surgery?</a></li>
                <li><a href="#double-eyelid-surgery">Double eyelid surgery</a></li>
                <li><a href="#approaches">Incisional and non-incisional approaches</a></li>
                <li><a href="#ptosis-assessment">Ptosis assessment</a></li>
                <li><a href="#recovery">Recovery</a></li>
                <li><a href="#faq">FAQs</a></li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section article-content">
          <div className="container article-narrow">
            <p>
              Asian eyelid surgery refers to a group of procedures that assess and refine the upper eyelid fold, eyelid skin, eyelid opening and surrounding soft tissue. It may include double eyelid surgery, upper blepharoplasty, ptosis correction, revision eyelid surgery or a combination of approaches.
            </p>
            <p>
              The aim is not to create a standardised eyelid. A well-planned operation should respect each patient’s facial proportions, ethnic anatomy, eyelid function and personal preferences. The most appropriate plan depends on the existing eyelid crease, skin thickness, fat distribution, brow position, eyelid muscle function, asymmetry, scars from previous surgery and the patient’s goals.
            </p>
            <p>
              Dr Jeremy Sun is a Senior Consultant plastic surgeon in Singapore with experience in reconstructive and aesthetic plastic surgery. His aesthetic training includes structured exposure to Asian eyelid surgery and facial aesthetic surgery through international fellowship and mentorship experience. His reconstructive background is relevant because eyelid surgery requires attention to both appearance and eyelid function.
            </p>
            <p className="notice-text">
              This page provides general information and should not replace consultation with a qualified medical practitioner. Suitability, risks, recovery and outcomes vary between individuals.
            </p>

            <h2 id="what-is-asian-eyelid-surgery">What is Asian eyelid surgery?</h2>
            <p>
              Asian eyelid surgery is commonly discussed in relation to the upper eyelid crease. Some patients naturally have a defined crease, some have a low or partial crease, and others have little or no visible crease. The eyelid may also have skin hooding, fullness, asymmetry or drooping caused by ptosis.
            </p>
            <p>Depending on the assessment, surgery may involve:</p>
            <ul>
              <li>creating or defining an upper eyelid crease</li>
              <li>removing selected excess skin</li>
              <li>adjusting eyelid fat or soft tissue fullness</li>
              <li>correcting eyelid droop when ptosis is present</li>
              <li>revising a previous eyelid operation</li>
              <li>improving symmetry between the two eyelids where possible</li>
            </ul>
            <p>
              The surgical plan should be individualised. A crease that looks natural on one person may not suit another person’s eyelid structure, brow position or facial proportions.
            </p>

            <h2>Who may consider eyelid surgery?</h2>
            <p>Eyelid surgery may be considered by patients who are concerned about:</p>
            <ul>
              <li>absent, low, partial or unstable upper eyelid crease</li>
              <li>excess upper eyelid skin or hooding</li>
              <li>heaviness around the upper eyelids</li>
              <li>eyelid asymmetry</li>
              <li>eyelid drooping or a tired appearance</li>
              <li>difficulty applying eye makeup because of eyelid fold anatomy</li>
              <li>previous eyelid surgery with an unsatisfactory crease, asymmetry or scarring</li>
              <li>functional symptoms from upper eyelid skin or ptosis affecting the visual field</li>
            </ul>
            <p>
              Some concerns are mainly aesthetic. Others may have a functional component, particularly when ptosis or significant skin hooding is present. A consultation is needed to distinguish these issues because the treatment plan can be different.
            </p>

            <h2 id="double-eyelid-surgery">Double eyelid surgery</h2>
            <p>
              Double eyelid surgery aims to create or define an upper eyelid crease. In Asian eyelids, crease design must consider eyelid skin thickness, orbital fat, the position of the brow, eyelid opening, the natural fold pattern and the patient’s preferred appearance.
            </p>
            <p>
              The crease may be planned as a lower, more subtle fold or a more defined crease depending on anatomy and goals. A natural-looking result usually depends on careful matching of crease height, skin tension, soft tissue handling and eyelid function rather than simply choosing a crease measurement.
            </p>
            <p>
              Broadly, double eyelid surgery may be performed using an incisional or non-incisional technique in selected patients. The right approach depends on the patient’s anatomy, the amount of skin or fat fullness, whether ptosis is present, and whether revision surgery is needed.
            </p>

            <h2 id="approaches">Incisional and non-incisional approaches</h2>
            <h3>Incisional double eyelid surgery</h3>
            <p>
              An incisional approach uses a planned upper eyelid incision to create the crease and address skin, fat or soft tissue issues where appropriate. It may be considered when there is excess skin, thicker eyelid tissue, asymmetry, ptosis, previous surgery or a need for more structural control.
            </p>
            <p>
              Potential trade-offs include a longer recovery period, a visible scar while healing, swelling, and the usual risks of surgery. Scar appearance usually changes over time, but a scar may remain visible.
            </p>

            <h3>Non-incisional or suture techniques</h3>
            <p>
              Non-incisional techniques use sutures to create a crease without a full-length skin incision. They may be suitable for selected patients with thinner eyelid skin, minimal excess skin and appropriate anatomy.
            </p>
            <p>
              These techniques may involve a different recovery profile, but they are not suitable for everyone. The crease may weaken or change over time, and some patients may later require revision or an incisional approach.
            </p>

            <h2 id="ptosis-assessment">Ptosis assessment and eyelid function</h2>
            <p>
              Ptosis means drooping of the upper eyelid due to eyelid muscle or tendon function. It can make the eyes appear smaller or tired and may sometimes affect vision. Ptosis is different from simply having no double eyelid crease or having excess eyelid skin, although these issues can occur together.
            </p>
            <p>A careful eyelid examination may assess:</p>
            <ul>
              <li>eyelid opening height</li>
              <li>levator muscle function</li>
              <li>brow position and forehead compensation</li>
              <li>eyelid symmetry</li>
              <li>visual field symptoms</li>
              <li>dry eye or ocular surface symptoms</li>
              <li>previous surgery or contact lens history</li>
            </ul>
            <p>
              In Singapore, Ministry of Health regulations require patients to be assessed independently by an eye doctor before a plastic surgeon can operate on the patient as a medical case. This is particularly relevant when eyelid surgery is being considered for functional concerns such as ptosis or visual-field obstruction.
            </p>
            <p>
              If ptosis is present, crease creation alone may not address the main problem. Ptosis correction may need to be planned as part of the operation, and the risks, recovery and symmetry considerations should be discussed separately.
            </p>

            <h2>Revision Asian eyelid surgery</h2>
            <p>
              Revision eyelid surgery may be considered after previous double eyelid surgery or blepharoplasty if there are concerns such as asymmetry, an overly high or low crease, multiple creases, visible scarring, hollowing, persistent fullness or functional issues.
            </p>
            <p>
              Revision surgery can be more complex than primary surgery because scar tissue, altered anatomy and limited tissue flexibility may affect the options available. It is important to understand what can realistically be improved and what limitations may remain.
            </p>

            <h2>What happens during consultation?</h2>
            <p>An Asian eyelid surgery consultation may include:</p>
            <ul>
              <li>discussion of the patient’s goals and preferred eyelid appearance</li>
              <li>review of previous eyelid procedures, scars or complications</li>
              <li>assessment of eyelid crease, skin, fat fullness and asymmetry</li>
              <li>evaluation for ptosis, brow compensation and eyelid function</li>
              <li>discussion of incisional, non-incisional or combined options where appropriate</li>
              <li>explanation of scars, swelling, recovery and possible revision needs</li>
              <li>review of medical history, medications, dry eye symptoms and contact lens use</li>
              <li>discussion of realistic expectations and limitations</li>
            </ul>
            <p>
              Photos may be taken for clinical documentation and planning. Patients may also be asked to describe whether they prefer a subtle crease, a more defined crease, or correction of functional heaviness rather than a purely cosmetic change.
            </p>

            <h2 id="recovery">Recovery after eyelid surgery</h2>
            <p>
              Recovery varies according to the procedure performed and the patient’s healing response. Swelling and bruising are common after eyelid surgery. For non-incisional procedures, swelling may take around two weeks to one month to subside. For incisional procedures, swelling and scar maturation may continue to improve over three to six months, sometimes longer depending on the individual patient and the extent of surgery.
            </p>
            <p>
              Patients may be advised to use cold compresses, keep the head elevated, avoid strenuous activity temporarily, attend follow-up appointments and avoid contact lens use or eye makeup for a period of time. The exact instructions depend on the operation and surgeon’s assessment.
            </p>
            <p>
              Final eyelid crease appearance can continue to evolve over weeks to months as swelling reduces and scar tissue matures. Early asymmetry may improve as swelling settles, but persistent asymmetry can occur.
            </p>

            <h2>Risks and limitations</h2>
            <p>All surgery carries risks. Potential risks of eyelid surgery may include:</p>
            <ul>
              <li>bleeding or haematoma</li>
              <li>infection</li>
              <li>swelling and bruising</li>
              <li>scarring</li>
              <li>asymmetry</li>
              <li>crease that is higher, lower or less defined than desired</li>
              <li>multiple creases or crease loosening</li>
              <li>dry eye, irritation or watering</li>
              <li>difficulty closing the eyes fully in the early recovery period or, rarely, longer term</li>
              <li>undercorrection or overcorrection of ptosis</li>
              <li>visible or thickened scar</li>
              <li>need for revision surgery</li>
              <li>anaesthetic risks</li>
            </ul>
            <p>
              Eyelid surgery can refine eyelid shape, but it cannot make both eyes perfectly identical or ensure a specific appearance. Facial asymmetry, brow position, skin quality and healing response all affect the final result.
            </p>

            <h2 id="faq">Frequently asked questions</h2>
            <h3>Is Asian eyelid surgery the same as double eyelid surgery?</h3>
            <p>
              Double eyelid surgery is one type of Asian eyelid surgery. Asian eyelid surgery may also include upper blepharoplasty, ptosis correction, revision eyelid surgery or combined procedures depending on the patient’s anatomy and goals.
            </p>
            <h3>Will the result look natural?</h3>
            <p>
              The goal is usually to create an eyelid shape that suits the patient’s existing anatomy and facial proportions. Naturalness depends on crease design, tissue handling, eyelid function, healing and realistic planning. A consultation is needed to discuss what may be achievable for the individual patient.
            </p>
            <h3>Is incisional or non-incisional double eyelid surgery better?</h3>
            <p>
              There is no single option that is right for every patient. Non-incisional techniques may suit selected patients with favourable anatomy and minimal excess skin. Incisional surgery may be more appropriate when there is excess skin, thicker tissue, ptosis, asymmetry or previous surgery. The choice should be based on clinical assessment.
            </p>
            <h3>Is ptosis surgery different from double eyelid surgery?</h3>
            <p>
              Yes. Ptosis surgery addresses drooping of the upper eyelid related to eyelid muscle or tendon function. Double eyelid surgery mainly creates or defines an eyelid crease. Some patients need both issues assessed together.
            </p>
            <h3>How long does swelling last?</h3>
            <p>
              Most visible swelling after non-incisional eyelid procedures may take around two weeks to one month to subside. After incisional eyelid surgery, swelling and scar maturation may continue to improve over three to six months. Individual recovery varies.
            </p>
            <h3>Can revision eyelid surgery fix a previous result?</h3>
            <p>
              Revision surgery may improve selected concerns, but it is usually more complex than first-time surgery. Scar tissue, previous tissue removal and eyelid function affect what can be safely changed. A consultation is needed to assess realistic options.
            </p>
          </div>
        </section>

        <section id="enquire" className="section article-enquiry">
          <div className="container grid-2">
            <div>
              <h2>Enquiry and consultation</h2>
              <p className="section-intro">
                A consultation can help clarify whether eyelid surgery, ptosis assessment, revision surgery or non-surgical alternatives may be appropriate. The discussion should include the patient’s goals, eyelid function, surgical options, recovery, risks and limitations.
              </p>
              <p className="section-intro">
                Use the enquiry form to request an appointment or ask about eyelid surgery assessment. Please do not send urgent medical concerns through the website form.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </article>
    </main>
  );
}
