import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.drjeremysun.com'),
  title: {
    default: 'Dr Jeremy Sun | Senior Consultant Plastic, Reconstructive & Aesthetic Surgeon in Singapore',
    template: '%s | Dr Jeremy Sun'
  },
  description: 'Dr Jeremy Sun is a Senior Consultant plastic, reconstructive and aesthetic surgeon in Singapore with expertise in microsurgical reconstruction, lymphatic surgery, aesthetic body contouring, breast surgery, rhinoplasty, eyelid surgery and facial rejuvenation.',
  keywords: ['plastic surgeon Singapore', 'reconstructive surgery Singapore', 'aesthetic surgery Singapore', 'lymphedema surgery Singapore', 'Dr Jeremy Sun'],
  openGraph: {
    title: 'Dr Jeremy Sun | Senior Consultant Plastic, Reconstructive & Aesthetic Surgeon',
    description: 'Professional profile, training, procedures and educational articles by Dr Jeremy Sun in Singapore.',
    images: ['/images/dr-jeremy-sun-hero.jpg'],
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
