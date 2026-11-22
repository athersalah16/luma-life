import type { Metadata } from "next";
import { AboutContent } from "@/features/about/components/AboutContent";
import { PageIntro } from "@/components/shared/PageIntro";
import { company } from "@/data/company.data";

export const metadata: Metadata = {
  title: "من نحن",
  description: "تعرّف على قصة LUMA Life ورسالتها ورؤيتها وقيمها.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="من نحن"
        title="حياة أكثر اتزاناً، تبدأ بخطوة."
        description="LUMA Life علامة تهتم بأدوات التخطيط الورقية التي تساعدك على تنظيم جوانب حياتك والعودة إلى ما يهمك."
      />
      <AboutContent company={company} />
    </main>
  );
}
