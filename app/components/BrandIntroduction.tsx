import { SectionHeading } from "@/components/common/SectionHeading";
import { company } from "@/help_data/company/company.data";

export function BrandIntroduction() {
  return (
    <section id="introduction" className="bg-paper py-16 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-4 px-4 sm:px-5 md:grid-cols-[0.85fr_1.15fr] md:gap-16 lg:gap-24">
        <SectionHeading
          className="mb-0"
          eyebrow="عن LUMA Life"
          title="مساحة تجمع جوانب يومك."
        />
        <div className="border-t-2 border-gold pt-4 leading-8 text-grey md:border-s-2 md:border-t-0 md:ps-10 md:pt-0">
          <p>{company.introduction}</p>
          <p className="mb-0">{company.purpose}</p>
        </div>
      </div>
    </section>
  );
}
