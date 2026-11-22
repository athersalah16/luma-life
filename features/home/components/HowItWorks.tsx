import { SectionHeading } from "@/components/shared/SectionHeading";
import { notebook } from "@/data/notebook.data";

export function HowItWorks() {
  return (
    <section className="bg-mist py-16 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-5">
        <SectionHeading
          eyebrow="كيف تبدأ؟"
          title="ثلاث خطوات، بلا تعقيد."
          description="اجعل الدفتر جزءاً هادئاً من يومك، وامنح نفسك مساحة للعودة متى احتجت."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {notebook.steps.map((step) => (
            <article
              className="rounded-card border border-line bg-paper p-6 shadow-card"
              key={step.number}
            >
              <span className="mb-5 inline-flex size-12 items-center justify-center rounded-full border border-light font-bold text-navy">
                {step.number}
              </span>
              <h3 className="mb-2 text-lg font-bold text-navy">
                {step.title}
              </h3>
              <p className="mb-0 text-sm leading-7 text-grey">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
