import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Enquiry response',
  description: 'Information after submitting a non-urgent website enquiry.',
  robots: { index: false, follow: true }
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ status: 'received' }, { status: 'unconfirmed' }];
}

export default async function EnquiryResponsePage({ params }: { params: Promise<{ status: string }> }) {
  const { status } = await params;
  if (status !== 'received' && status !== 'unconfirmed') notFound();
  const received = status === 'received';

  return (
    <main className="article-page">
      <section className="article-hero">
        <div className="container article-narrow">
          <h1>{received ? 'Thank you for your enquiry' : 'Sending could not be confirmed'}</h1>
          <p className="lead">{received
            ? 'Your submission has been accepted by the enquiry service. This is not an appointment confirmation.'
            : 'We could not confirm that your enquiry was sent. Please contact the clinic before submitting again.'}</p>
        </div>
      </section>
      <section className="section article-content">
        <div className="container article-narrow">
          {received ? <p>The clinic team will respond using the contact details provided. If you opened this page directly without submitting the form, no enquiry has been sent.</p> : null}
          <p>For non-urgent enquiries, you can <a href="https://wa.me/6587649219" target="_blank" rel="noreferrer">message Astrid on WhatsApp</a> or <a href="https://www.astridplasticsurgery.com/contact-us/" target="_blank" rel="noreferrer">use Astrid Plastic Surgery’s contact form</a>.</p>
          <p><Link href="/#contact">Return to the contact section</Link></p>
        </div>
      </section>
    </main>
  );
}
