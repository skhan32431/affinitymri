import { Hero } from "@/components/sections/hero";
import { OpenMriShowcase } from "@/components/sections/open-mri-showcase";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ExpertReports } from "@/components/sections/expert-reports";
import { ReviewsMarquee } from "@/components/sections/reviews-marquee";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <OpenMriShowcase />
      <ServicesGrid />
      <ExpertReports />
      <ReviewsMarquee />
      <CtaSection />
    </>
  );
}
