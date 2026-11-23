import type { ResourceCategory } from "@/types/resource.types";

export function CategoryNavigation({
  categories,
}: {
  categories: readonly ResourceCategory[];
}) {
  return (
    <nav
      id="resource-categories"
      className="sticky top-1 z-10 mb-10 rounded-card border border-line bg-paper/95 p-4 shadow-card backdrop-blur-md md:mb-16"
      aria-label="فئات الأدوات الرقمية"
    >
      <p className="mb-3 text-xs font-semibold text-grey">انتقل إلى فئة</p>
      <ul className="m-0 flex gap-2 overflow-x-auto p-0 pb-1 scrollbar-thin">
        {categories.map((category, index) => (
          <li key={category.id}>
            <a
              className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-pill border border-line px-3 text-sm font-bold text-navy transition-colors hover:border-light hover:bg-mist focus-visible:outline-2 focus-visible:outline-gold"
              href={`#category-${category.id}`}
            >
              <span className="text-xs text-royal" aria-hidden="true">
                {index + 1}
              </span>
              {category.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
