import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { footerNavigation } from "@/data/navigation.data";

export function Footer() {
  return (
    <footer className="bg-navy py-12 text-paper">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-x-5 gap-y-8 px-4 pb-10 sm:grid-cols-2 sm:px-5 lg:grid-cols-[1.1fr_0.7fr_1.2fr] lg:gap-12">
        <div>
          <Link className="inline-flex" href="/" aria-label="LUMA Life — الرئيسية">
            <Logo compact />
          </Link>
          <p className="mb-1 mt-2 font-bold text-paper">خطّط • ركّز • انمُ</p>
          <span className="text-sm text-paper/70">التقدّم، لا الكمال.</span>
        </div>
        <nav className="grid justify-items-start gap-3" aria-label="روابط الموقع">
          <p className="mb-0 text-xs font-bold text-light">استكشف</p>
          {footerNavigation.map((item) => (
            <Link
              className="text-sm text-paper/85 transition-colors hover:text-light"
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="mb-0 max-w-xs text-sm leading-7 text-paper/70 sm:col-span-2 lg:col-span-1">
          مساحة للتخطيط الواعي، والعودة إلى ما يهمك كل يوم.
        </p>
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 border-t border-paper/20 px-4 pt-4 text-xs text-paper/65 sm:flex-row sm:justify-between sm:px-5">
        <span>© LUMA Life</span>
        <span>صُمّم ليكون دليلك، لا مقياساً لقيمتك.</span>
      </div>
    </footer>
  );
}
