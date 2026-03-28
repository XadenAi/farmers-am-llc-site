'use client';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { SocialProofBar } from '@/components/SocialProofBar';
import { Services } from '@/components/Services';
import { WhyOpus } from '@/components/WhyOpus';
import { CaseStudies } from '@/components/CaseStudies';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-950 via-brand-900 to-brand-950">
      <Navbar />
      <Hero />
      <SocialProofBar />
      <Services />
      <WhyOpus />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
