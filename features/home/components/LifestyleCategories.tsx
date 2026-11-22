import { SectionHeading } from "@/components/shared/SectionHeading";
import { notebook } from "@/data/notebook.data";

export function LifestyleCategories() {
  return (
    <section className="bg-paper py-16 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-5">
        <SectionHeading
          eyebrow="جوانب الحياة"
          title="ليومك أكثر من اتجاه."
          description="يجمع الدفتر مساحات للاهتمام بما يهمك، دون أن يحصر يومك في جانب واحد."
          centered
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          {notebook.categories.map((category, index) => (
            <article
              className="min-h-44 rounded-card border border-line bg-paper p-5 shadow-card transition-transform hover:-translate-y-1"
              key={category.title}
            >
              <span className="mb-4 inline-grid size-9 place-items-center rounded-full bg-mist text-xs font-bold text-royal">
                ٠{index + 1}
              </span>
              <h3 className="mb-2 text-base font-bold text-navy">
                {category.title}
              </h3>
              <p className="mb-0 text-sm leading-7 text-grey">
                {category.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
