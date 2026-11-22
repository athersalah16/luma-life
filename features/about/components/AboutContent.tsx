import { SectionHeading } from "@/components/shared/SectionHeading";

type Company = {
  purpose: string;
  mission: string;
  vision: string;
  philosophy: string;
  values: readonly { title: string; description: string }[];
};

export function AboutContent({ company }: { company: Company }) {
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
      <div className="mb-16 grid gap-4 md:mb-24 md:grid-cols-2">
        <article className="rounded-card bg-navy p-6 text-paper shadow-card sm:p-10">
          <p className="mb-3 text-xs font-bold tracking-[0.1em] text-light">
            رسالتنا
          </p>
          <h2 className="mb-4 text-2xl font-bold leading-snug text-paper sm:text-3xl">
            أدوات عملية لحياة متوازنة.
          </h2>
          <p className="mb-0 leading-8 text-paper/80">{company.mission}</p>
        </article>
        <article className="rounded-card bg-mist p-6 sm:p-10">
          <p className="mb-3 text-xs font-bold tracking-[0.1em] text-royal">
            رؤيتنا
          </p>
          <h2 className="mb-4 text-2xl font-bold leading-snug text-navy sm:text-3xl">
            تخطيط يساندك، لا يضغط عليك.
          </h2>
          <p className="mb-0 leading-8 text-grey">{company.vision}</p>
        </article>
      </div>
      <section>
        <SectionHeading
          eyebrow="ما نؤمن به"
          title="قيم توجه كل خطوة."
          description={company.philosophy}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {company.values.map((value, index) => (
            <article
              className="rounded-card border border-line bg-paper p-5 shadow-card"
              key={value.title}
            >
              <span className="text-sm font-bold text-royal">
                ٠{index + 1}
              </span>
              <h3 className="mb-2 mt-4 text-lg font-bold text-navy">
                {value.title}
              </h3>
              <p className="mb-0 text-sm leading-7 text-grey">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
