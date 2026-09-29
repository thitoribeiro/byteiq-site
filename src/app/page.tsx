import { Hero } from "@/components/home/Hero";
import { PositioningTree } from "@/components/home/PositioningTree";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { EngineeringPrinciplesSection } from "@/components/home/EngineeringPrinciplesSection";
import { TechnologiesSection } from "@/components/home/TechnologiesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PositioningTree />
      <CapabilitiesSection />
      <PortfolioSection />
      <EngineeringPrinciplesSection />
      <TechnologiesSection />
      <ProcessSection />
      <FinalCtaSection />
    </>
  );
}
