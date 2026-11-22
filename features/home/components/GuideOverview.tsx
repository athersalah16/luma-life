import { ArrowLink } from "@/components/shared/ArrowLink";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function GuideOverview() {
  return (
    <section className="bg-mist py-16 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 sm:px-5 md:grid-cols-[0.6fr_1.4fr] md:gap-12">
        <div className="mx-auto grid aspect-square w-40 content-center justify-items-center rounded-full border border-light text-navy sm:w-56" aria-hidden="true">
          <span className="text-lg text-royal">دليل</span>
          <strong className="font-display text-4xl">كامل</strong>
        </div>
        <div>
          <SectionHeading
            className="mb-5"
            eyebrow="دليلك في أي وقت"
            title="ابدأ من هنا، وارجع متى احتجت."
            description="إرشادات عملية للتعرّف على أقسام الدفتر والتخطيط اليومي وفهم لوحة النقاط."
          />
          <ArrowLink href="/qr-guide">اقرأ دليل الاستخدام</ArrowLink>
        </div>
      </div>
    </section>
  );
}
