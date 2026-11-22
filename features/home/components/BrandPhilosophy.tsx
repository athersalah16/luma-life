import { SectionHeading } from "@/components/shared/SectionHeading";
import { company } from "@/data/company.data";

export function BrandPhilosophy() {
  return (
    <section className="bg-mist py-16 text-center md:py-28">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-5">
        <span className="block h-14 font-serif text-7xl leading-[0.6] text-sky" aria-hidden="true">
          “
        </span>
        <SectionHeading
          className="mb-0"
          eyebrow="فلسفتنا"
          title="التقدّم، لا الكمال."
          description={company.philosophy}
          centered
        />
        <div className="mx-auto my-8 h-0.5 w-14 bg-gold" />
        <p className="mb-0 font-bold text-navy">
          خطّط <span className="px-1 text-sky">•</span> ركّز{" "}
          <span className="px-1 text-sky">•</span> انمُ
        </p>
      </div>
    </section>
  );
}
