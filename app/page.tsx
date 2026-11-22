import { BrandIntroduction } from "@/features/home/components/BrandIntroduction";
import { BrandPhilosophy } from "@/features/home/components/BrandPhilosophy";
import { GuideOverview } from "@/features/home/components/GuideOverview";
import { HeroSection } from "@/features/home/components/HeroSection";
import { HowItWorks } from "@/features/home/components/HowItWorks";
import { LifestyleCategories } from "@/features/home/components/LifestyleCategories";
import { NotebookFeatures } from "@/features/home/components/NotebookFeatures";
import { NotebookShowcase } from "@/features/home/components/NotebookShowcase";
import { ScoreboardOverview } from "@/features/home/components/ScoreboardOverview";

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
