import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { desktopNavigation } from "@/data/navigation.data";

export function Header() {
  return (
    <header className="relative z-10 border-b border-line bg-paper">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-2 gap-y-1 px-4 py-1.5 sm:flex-nowrap sm:gap-6 sm:px-5 sm:py-0 sm:min-h-21">
        <Link
          href="/"
          className="inline-flex shrink-0"
          aria-label="LUMA Life — الرئيسية"
        >
          <Logo compact />
        </Link>
        <nav
          className="hidden items-center gap-6 md:flex lg:gap-10"
          aria-label="التنقل الرئيسي"
        >
          {desktopNavigation.map((item) => (
            <Link
              key={item.href}
              className="text-sm font-semibold text-ink transition-colors hover:text-royal"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <MobileNavigation />
      </div>
    </header>
  );
}
