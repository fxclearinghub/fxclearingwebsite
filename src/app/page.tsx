import Hero from '@/components/Hero';
import Industries from '@/components/Industries';
import Solutions from '@/components/Solutions';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks';
import CaseStudy from '@/components/CaseStudy';
import CTA from '@/components/CTA';

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