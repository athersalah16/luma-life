import type { ResourceCategory } from "@/types/resource.types";
import { AppCard } from "@/app/qr-guide/components/AppCard";

export function AppCategorySection({
  category,
  index,
}: {
  category: ResourceCategory;
  index: number;
}) {
  return (
    <section
      id={`category-${category.id}`}
      className="scroll-mt-32 border-t border-line py-10 md:scroll-mt-40 md:py-16"
      aria-labelledby={`category-title-${category.id}`}
    >
      <header className="mb-6 grid max-w-4xl grid-cols-[auto_minmax(0,1fr)] items-start gap-3 sm:gap-4">
        <span className="grid size-11 place-items-center rounded-full bg-mist text-sm font-bold text-navy sm:size-13" aria-hidden="true">
          {index + 1}
        </span>
        <div>
          <p className="mb-1 text-[0.7rem] font-bold tracking-widest text-royal">
            {category.englishTitle}
          </p>
          <h2
            className="mb-2 text-2xl font-bold leading-snug text-navy sm:text-3xl"
            id={`category-title-${category.id}`}
          >
            {category.title}
          </h2>
          <p className="mb-0 leading-7 text-grey">{category.description}</p>
        </div>
      </header>
      {category.resources.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {category.resources.map((resource) => (
            <AppCard key={resource.id} resource={resource} />
          ))}
        </div>
      ) : (
        <p className="mb-0 rounded-card border border-dashed border-line p-4 leading-7 text-grey">
          ستُضاف ترشيحات هذا القسم بعد توفير تطبيقات وروابط موثوقة.
        </p>
      )}
      <aside className="mt-4 grid grid-cols-[auto_1fr] items-start gap-3 border-s-2 border-gold py-3 ps-4">
        <span className="text-xs font-bold text-royal" aria-hidden="true">
          نصيحة
        </span>
        <p className="mb-0 text-sm leading-7 text-grey">{category.tip}</p>
      </aside>
    </section>
  );
}
