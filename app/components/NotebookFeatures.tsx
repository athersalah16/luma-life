import { SectionHeading } from "@/components/common/SectionHeading";
import { notebook } from "@/help_data/company/notebook.data";

export function NotebookFeatures() {
  return (
    <section className="bg-mist py-16 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-5">
        <SectionHeading
          eyebrow="في الدفتر"
          title="بسيط في فكرته، واسع في استخدامه."
          description="مساحات وأدوات ورقية تساعدك على بناء روتين يناسب حياتك."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {notebook.features.map((feature, index) => (
            <article
              className="min-h-52 rounded-card border border-line bg-paper p-6 shadow-card"
              key={feature}
            >
              <span className="text-sm font-bold text-royal">{index + 1}</span>
              <span className="my-5 block h-0.5 w-9 bg-gold" aria-hidden="true" />
              <h3 className="mb-0 text-lg font-bold leading-7 text-navy">
                {feature}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
