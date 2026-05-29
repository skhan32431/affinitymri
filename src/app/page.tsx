import { Hero } from "@/components/sections/hero";
import { OpenMriShowcase } from "@/components/sections/open-mri-showcase";
import { ServicesGrid } from "@/components/sections/services-grid";
import { InsuranceBanner } from "@/components/sections/insurance-banner";
import { ExpertReports } from "@/components/sections/expert-reports";
import { ReviewsMarquee } from "@/components/sections/reviews-marquee";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <OpenMriShowcase />
      <ServicesGrid />
      <InsuranceBanner />
      <ExpertReports />
      <ReviewsMarquee />
      <CtaSection />
    </>
  );
}
