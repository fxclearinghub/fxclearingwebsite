import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Industries from '@/components/Industries';
import Solutions from '@/components/Solutions';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks';
import CaseStudy from '@/components/CaseStudy';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'FX Clearing Hub | Payment Solutions for High-Risk Merchants',
  description: 'Secure, compliant payment processing for forex brokers, gaming platforms, and high-risk businesses. Get approved in 3-7 days with our global banking network.',
  keywords: 'payment processing, high-risk merchants, forex payments, gaming payments, crypto payments, merchant accounts, secure payments, compliant payments',
  openGraph: {
    title: 'FX Clearing Hub | Payment Solutions for High-Risk Merchants',
    description: 'Secure, compliant payment processing for forex brokers, gaming platforms, and high-risk businesses.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Industries />
      <Solutions />
      <WhyChooseUs />
      <HowItWorks />
      <CaseStudy />
      <CTA />
    </main>
  );
}