import type { ResourceLinks } from "@/types/resource.types";

type AppDownloadLinksProps = {
  links?: ResourceLinks;
};

const linkLabels = [
  { field: "website", label: "الموقع الرسمي" },
  { field: "android", label: "Google Play" },
  { field: "ios", label: "App Store" },
] as const;

export function AppDownloadLinks(props: AppDownloadLinksProps) {
  const links = linkLabels.filter((link) => props.links?.[link.field]);

  if (links.length === 0) {
    return (
      <p className="mb-0 mt-auto pt-4 text-xs text-grey">
        الروابط الرسمية لم تُضف بعد.
      </p>
    );
  }

  return (
    <ul className="mb-0 mt-auto flex list-none flex-wrap gap-2 p-0 pt-4" aria-label="روابط التطبيق">
      {links.map((link) => (
        <li key={link.field}>
          <a
            className="inline-flex min-h-10 items-center rounded-pill border border-light px-3 text-xs font-bold text-navy transition-colors hover:bg-mist focus-visible:outline-2 focus-visible:outline-gold"
            href={props.links?.[link.field]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
            <span className="sr-only"> (يفتح في نافذة جديدة)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
