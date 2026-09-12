import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import MotionObserver from './MotionObserver';
import GaTracker from './GaTracker';
import './globals.css';

const headingFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.drjeremysun.com'),
  title: {
    default: 'Dr Jeremy Sun Mingfa | Senior Consultant Plastic Surgeon Singapore',
    template: '%s | Dr Jeremy Sun'
  },
  description: 'Dr Jeremy Sun Mingfa is a Senior Consultant plastic surgeon in Singapore with clinical focus in aesthetic surgery, microsurgical reconstruction, lymphedema surgery, body contouring, breast surgery, rhinoplasty, eyelid surgery and facial rejuvenation.',
  keywords: [
    'plastic surgeon Singapore',
    'Senior Consultant plastic surgeon Singapore',
    'aesthetic surgery Singapore',
    'reconstructive surgery Singapore',
    'lymphedema surgery Singapore',
    'lymphatic surgery Singapore',
    'body contouring Singapore',
    'breast reconstruction Singapore',
    'rhinoplasty Singapore',
    'eyelid surgery Singapore',
    'Dr Jeremy Sun',
    'Dr Jeremy Sun Mingfa',
    'Sun Mingfa Jeremy'
  ],
  alternates: {
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  openGraph: {
    title: 'Dr Jeremy Sun Mingfa | Senior Consultant Plastic Surgeon Singapore',
    description: 'Senior Consultant plastic surgeon in Singapore with focus in aesthetic surgery, reconstructive microsurgery and lymphedema surgery. Also listed professionally as Sun Mingfa Jeremy.',
    url: '/',
    siteName: 'Dr Jeremy Sun Plastic Surgery',
    images: [{ url: '/images/dr-jeremy-sun-hero.jpg', width: 896, height: 1280, alt: 'Dr Jeremy Sun, plastic surgeon in Singapore' }],
    locale: 'en_SG',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr Jeremy Sun Mingfa | Senior Consultant Plastic Surgeon Singapore',
    description: 'Aesthetic, reconstructive and lymphedema surgery information by Dr Jeremy Sun Mingfa in Singapore.',
    images: ['/images/dr-jeremy-sun-hero.jpg']
  }
};

const globalStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id': 'https://www.drjeremysun.com/#physician',
      name: 'Dr Jeremy Sun Mingfa',
      alternateName: ['Dr Jeremy Sun', 'Sun Mingfa Jeremy'],
      url: 'https://www.drjeremysun.com/',
      image: 'https://www.drjeremysun.com/images/dr-jeremy-sun-hero.jpg',
      medicalSpecialty: ['PlasticSurgery', 'ReconstructiveSurgery'],
      knowsAbout: [
        'plastic surgery in Singapore',
        'aesthetic surgery',
        'microsurgical reconstruction',
        'lymphedema surgery',
        'lymphovenous bypass surgery',
        'breast surgery',
        'body contouring'
      ],
      areaServed: {
        '@type': 'Country',
        name: 'Singapore'
      },
      mainEntityOfPage: 'https://www.drjeremysun.com/'
    },
    {
      '@type': 'MedicalBusiness',
      '@id': 'https://www.drjeremysun.com/#medicalbusiness',
      name: 'Dr Jeremy Sun Plastic Surgery',
      url: 'https://www.drjeremysun.com/',
      image: 'https://www.drjeremysun.com/images/dr-jeremy-sun-hero.jpg',
      medicalSpecialty: ['PlasticSurgery', 'ReconstructiveSurgery'],
      areaServed: {
        '@type': 'Country',
        name: 'Singapore'
      }
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.drjeremysun.com/#website',
      name: 'Dr Jeremy Sun Plastic Surgery',
      url: 'https://www.drjeremysun.com/',
      inLanguage: 'en-SG',
      publisher: {
        '@id': 'https://www.drjeremysun.com/#physician'
      }
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={headingFont.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalStructuredData) }}
        />
        <MotionObserver />
        {children}
        <GaTracker />
      </body>
    </html>
  );
}
