import Link from "next/link";
import { Logo } from "@/components/common/Logo";
import {navigation } from "@/help_data/company/navigation.data";

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
          className="flex  items-center gap-6  lg:gap-10"
          aria-label="التنقل الرئيسي"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              className="text-sm font-semibold text-ink transition-colors hover:text-royal"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
