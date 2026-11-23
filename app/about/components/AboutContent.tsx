import { SectionHeading } from "@/components/common/SectionHeading";
import OurValues from "./OurValues";
import VissionAndMission from "./VissionAndMission";
import { company } from "@/help_data/company/company.data";


export function AboutContent() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-5 md:py-24">
      <section className="mb-14 grid items-start gap-6 md:mb-24 md:grid-cols-[0.85fr_1.15fr] md:gap-16 lg:gap-24">
        <SectionHeading
          className="mb-0"
          eyebrow="قصتنا"
          title="لماذا بدأت LUMA Life؟"
        />
        <p className="mb-0 border-t-2 border-gold pt-4 leading-8 text-grey md:border-s-2 md:border-t-0 md:ps-6 md:pt-0">
          {company.purpose}
        </p>
      </section>
      <VissionAndMission />
      <OurValues />
    </div>
  );
}
