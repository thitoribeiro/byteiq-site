import { Hero } from "@/components/home/Hero";
import { PositioningTree } from "@/components/home/PositioningTree";
import { AiEngineeringSection } from "@/components/home/AiEngineeringSection";
import { AutomationSection } from "@/components/home/AutomationSection";
import { SoftwareSection } from "@/components/home/SoftwareSection";
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
      <AiEngineeringSection />
      <AutomationSection />
      <SoftwareSection />
      <PortfolioSection />
      <EngineeringPrinciplesSection />
      <TechnologiesSection />
      <ProcessSection />
      <FinalCtaSection />
    </>
  );
}
