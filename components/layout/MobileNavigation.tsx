import Link from "next/link";
import { mobileNavigation } from "@/data/navigation.data";

export function MobileNavigation() {
  return (
    <nav
      className="grid flex-1 grid-cols-2 justify-end gap-x-3 gap-y-1 md:hidden"
      aria-label="التنقل الرئيسي"
    >
      {mobileNavigation.map((item) => (
        <Link
          className="text-center text-xs font-semibold text-ink transition-colors hover:text-royal sm:text-sm"
          key={item.href}
          href={item.href}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
