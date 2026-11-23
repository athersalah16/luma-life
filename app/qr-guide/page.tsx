import type { Metadata } from "next";
import { AppCategorySection } from "@/app/qr-guide/components/AppCategorySection";
import { CategoryNavigation } from "@/app/qr-guide/components/CategoryNavigation";
import { GuideHero } from "@/app/qr-guide/components/GuideHero";
import { GuideIntroduction } from "@/app/qr-guide/components/GuideIntroduction";
import { GuideTips } from "@/app/qr-guide/components/GuideTips";
import { resourceCategories } from "@/help_data/qr-guide/resources.data";

export const metadata: Metadata = {
  title: "الدليل الرقمي",
  description:
    "دليل موارد رقمية اختيارية تساعدك على ممارسة ما تخطط له مع إبقاء دفتر LUMA Life أداتك الأساسية للتخطيط.",
};

export default function GuidePage() {
  return (
    <main id="main-content">
      <GuideHero />
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-5 md:py-16">
        <GuideIntroduction />
        <CategoryNavigation categories={resourceCategories} />
        {resourceCategories.map((category, index) => (
          <AppCategorySection
            key={category.id}
            category={category}
            index={index}
          />
        ))}
        <GuideTips />
      </div>
    </main>
  );
}
