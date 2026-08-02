import type { Metadata } from 'next';
import Image from 'next/image';
import Navigation from '../Navigation';
import ContactForm from '../ContactForm';

export const metadata: Metadata = {
  title: 'Training & International Fellowships',
  description: 'International fellowship and mentorship training across lymphatic surgery, aesthetic surgery, rhinoplasty, eyelid surgery, body contouring, breast surgery and facial rejuvenation.',
  alternates: { canonical: '/training-and-fellowships' }
};

const trainingMentorship = [
  {
    area: 'Lymphatic surgery',
    mentor: 'Dr Takumi Yamamoto and Dr Akitatsu Hayashi',
    focus: 'MOH-accredited dedicated lymphedema surgery training program in Tokyo, focused specifically on lymphovenous bypass, lymphatic reconstruction and complex lymphedema care.',
    note: 'Structured subspecialty lymphatic surgery training, distinct from broader microsurgical fellowships where lymphedema may be only one component of training.',
    photos: [
      { src: '/images/mentors/takumi-yamamoto-lymphatic-group.jpg', alt: 'Dr Jeremy Sun with Dr Takumi Yamamoto during lymphatic surgery training in Tokyo', className: 'photo-takumi-yamamoto' },
      { src: '/images/mentors/akitatsu-hayashi.jpg', alt: 'Dr Jeremy Sun with Dr Akitatsu Hayashi during lymphatic surgery training in Tokyo', className: 'photo-akitatsu-hayashi' }
    ]
  },
  {
    area: 'Body contouring & liposuction',
    mentor: 'Dr David Sieber and Mexican body-contouring surgical groups',
    focus: 'High-definition liposuction, abdominoplasty, cosmetic body contouring and breast augmentation principles.',
    note: 'ASAPS travelling fellowship exposure.',
    photos: [
      { src: '/images/mentors/david-sieber.jpg', alt: 'Dr Jeremy Sun with Dr David Sieber during aesthetic surgery training', className: 'photo-david-sieber' }
    ]
  },
  {
    area: 'Breast aesthetic surgery',
    mentor: 'Dr William Adams and Dr Dennis Hammond',
    focus: 'Breast augmentation, rapid-recovery concepts and advanced breast shaping approaches.',
    note: 'Mentored international aesthetic surgery training.',
    photos: [
      { src: '/images/mentors/william-adams.jpg', alt: 'Dr Jeremy Sun with Dr William Adams during breast aesthetic surgery training' },
      { src: '/images/mentors/dennis-hammond.jpg', alt: 'Dr Jeremy Sun with Dr Dennis Hammond during breast aesthetic surgery training' }
    ]
  },
  {
    area: 'Asian rhinoplasty',
    mentor: 'Dr Jeong Jae Yong, Dr Charles Lee, Dr Yasushi Sugawara and Dr Kim Taek Kyun',
    focus: 'Asian rhinoplasty, structural rhinoplasty and rib cartilage techniques.',
    note: 'Training exposure across South Korea, Japan and Los Angeles.',
    photos: [
      { src: '/images/mentors/jeong-jae-yong.jpg', alt: 'Dr Jeremy Sun with Dr Jeong Jae Yong during rhinoplasty training' },
      { src: '/images/mentors/charles-lee.jpg', alt: 'Dr Jeremy Sun with Dr Charles Lee during rhinoplasty training', className: 'photo-charles-lee' },
      { src: '/images/mentors/yasushi-sugawara.jpg', alt: 'Dr Jeremy Sun with Dr Yasushi Sugawara during rhinoplasty training', className: 'photo-yasushi-sugawara' },
      { src: '/images/mentors/kim-taek-kyun.jpg', alt: 'Dr Jeremy Sun with Dr Kim Taek Kyun during rhinoplasty training', className: 'photo-kim-taek-kyun' }
    ]
  },
  {
    area: 'Eyelid surgery',
    mentor: 'Dr Moon Seop Choi and Dr Keizo Fukuta',
    focus: 'Asian blepharoplasty and plastic/aesthetic eyelid surgery concepts.',
    note: 'Procedure-specific mentorship and observership exposure.',
    photos: [
      { src: '/images/mentors/moon-seop-choi.jpg', alt: 'Dr Jeremy Sun with Dr Moon Seop Choi during eyelid surgery training', className: 'photo-moon-seop-choi' },
      { src: '/images/mentors/keizo-fukuta.jpg', alt: 'Dr Jeremy Sun with Dr Keizo Fukuta during eyelid surgery training' }
    ]
  },
  {
    area: 'Facial rejuvenation',
    mentor: 'Dr Tim Martyn, Dr Giovanni Botti and Dr Zekeriya Kul',
    focus: 'Sub-SMAS and deep-plane facelift concepts, facial rejuvenation and aesthetic facial surgery.',
    note: 'International facelift training exposure in the USA, Italy and Türkiye.',
    photos: [
      { src: '/images/mentors/tim-martyn.jpg', alt: 'Dr Jeremy Sun with Dr Tim Martyn during facial rejuvenation training', className: 'photo-tim-martyn' }
    ]
  }
];

export default function TrainingAndFellowshipsPage() {
  return (
    <main className="article-page">
      <Navigation />
      <section className="article-hero">
        <div className="container article-hero-grid">
          <div>
            <div className="eyebrow">Training & international fellowships</div>
            <h1>Focused surgical training across Asia, Europe and North America.</h1>
            <p className="lead">Dr Jeremy Sun is a Singapore plastic surgeon with structured local specialist training and focused international fellowship and mentorship exposure across lymphatic surgery, aesthetic surgery, Asian rhinoplasty, eyelid surgery, breast surgery, body contouring and facial rejuvenation.</p>
          </div>
          <aside className="article-summary-card">
            <h2>Training regions</h2>
            <ul>
              <li>Singapore specialist training</li>
              <li>Tokyo lymphatic surgery training</li>
              <li>South Korea and Japan facial aesthetic training</li>
              <li>United States aesthetic surgery fellowship exposure</li>
              <li>Italy, Türkiye and Mexico aesthetic surgery exposure</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mentor-grid">
            {trainingMentorship.map((x) => (
              <article className="mentor-card" key={x.area}>
                <div className={`mentor-collage collage-${Math.min(x.photos.length, 4)}`}>
                  {x.photos.length > 0 ? x.photos.map((photo) => (
                    <Image key={photo.src} src={photo.src} alt={photo.alt} className={photo.className} width={640} height={520} />
                  )) : <span>Mentor photo</span>}
                </div>
                <div className="mentor-content">
                  <small>{x.area}</small>
                  <h3>{x.mentor}</h3>
                  <p>{x.focus}</p>
                  <span className="mentor-note">{x.note}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section article-enquiry">
        <div className="container grid-2">
          <div>
            <h2>Contact</h2>
            <p className="section-intro">Use the enquiry form to request an appointment or ask a non-urgent question. Please do not send urgent medical concerns through the website form.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
