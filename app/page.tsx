import { BrandIntroduction } from "@/app/components/BrandIntroduction";
import { BrandPhilosophy } from "@/app/components/BrandPhilosophy";
import { GuideOverview } from "@/app/components/GuideOverview";
import { HeroSection } from "@/app/components/HeroSection";
import { HowItWorks } from "@/app/components/HowItWorks";
import { LifestyleCategories } from "@/app/components/LifestyleCategories";
import { NotebookFeatures } from "@/app/components/NotebookFeatures";
import { NotebookShowcase } from "@/app/components/NotebookShowcase";
import { ScoreboardOverview } from "@/app/components/ScoreboardOverview";

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <BrandIntroduction />
      <BrandPhilosophy />
      <NotebookShowcase />
      <NotebookFeatures />
      <LifestyleCategories />
      <HowItWorks />
      <ScoreboardOverview />
      <GuideOverview />
    </main>
  );
}
