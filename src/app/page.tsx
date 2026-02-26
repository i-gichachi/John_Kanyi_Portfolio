import HeroSection from "@/components/sections/HeroSection";
import TrustStrip from "@/components/sections/TrustStrip";
import AboutSnapshot from "@/components/sections/AboutSnapshot";
import ExpertisePillars from "@/components/sections/ExpertisePillars";
import FeaturedCaseStudies from "@/components/sections/FeaturedCaseStudies";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AdvisorySnapshot from "@/components/sections/AdvisorySnapshot";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <AboutSnapshot />
      <ExpertisePillars />
      <FeaturedCaseStudies />
      <TestimonialsSection />
      <AdvisorySnapshot />
    </>
  );
}
