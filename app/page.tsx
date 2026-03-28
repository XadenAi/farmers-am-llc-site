import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import Services from "@/components/Services";
import WhyOpus from "@/components/WhyOpus";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <Services />
      <WhyOpus />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
