import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact FX Clearing Hub | Get Payment Processing Support',
  description: 'Ready to start processing payments? Contact our experts for high-risk merchant accounts, forex payments, and gaming solutions. Get approved in 3-7 days.',
  keywords: 'contact payment processing, merchant account support, forex payment help, gaming payment solutions, high-risk merchant support',
  openGraph: {
    title: 'Contact FX Clearing Hub | Get Payment Processing Support',
    description: 'Ready to start processing payments? Contact our experts for high-risk merchant accounts and payment solutions.',
    type: 'website',
  },
};

export default function Contact() {
  return (
    <main id="contact-form" className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>
      <p className="text-lg mb-12 text-center">
        Ready to start processing payments or need expert advice? Fill out the form below and our team will get back to you within 24 hours.
      </p>

      <div className="max-w-md mx-auto">
        <ContactForm />
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: support@fxclearinghub.com</p>
      </div>
    </main>
  );
}