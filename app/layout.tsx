import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.drjeremysun.com'),
  title: {
    default: 'Dr Jeremy Sun | Plastic Surgeon Singapore | Aesthetic, Reconstructive & Lymphedema Surgery',
    template: '%s | Dr Jeremy Sun'
  },
  description: 'Dr Jeremy Sun is a Senior Consultant plastic surgeon in Singapore with clinical focus in aesthetic surgery, microsurgical reconstruction, lymphedema surgery, body contouring, breast surgery, rhinoplasty, eyelid surgery and facial rejuvenation.',
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
    'Dr Jeremy Sun'
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
    title: 'Dr Jeremy Sun | Plastic Surgeon Singapore',
    description: 'Senior Consultant plastic surgeon in Singapore with focus in aesthetic surgery, reconstructive microsurgery and lymphedema surgery.',
    url: '/',
    siteName: 'Dr Jeremy Sun Plastic Surgery',
    images: [{ url: '/images/dr-jeremy-sun-hero.jpg', width: 896, height: 1280, alt: 'Dr Jeremy Sun, plastic surgeon in Singapore' }],
    locale: 'en_SG',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr Jeremy Sun | Plastic Surgeon Singapore',
    description: 'Aesthetic, reconstructive and lymphedema surgery information by Dr Jeremy Sun in Singapore.',
    images: ['/images/dr-jeremy-sun-hero.jpg']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
