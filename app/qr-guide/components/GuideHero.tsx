import { ArrowLink } from "@/components/common/ArrowLink";

export function GuideHero() {
  return (
    <section className="overflow-hidden bg-mist py-14 md:py-28">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-5">
        <p className="mb-4 text-xs font-bold tracking-[0.1em] text-royal">
          الدليل الرقمي لـ LUMA Life
        </p>
        <h1 className="mb-5 font-display text-display font-bold leading-tight tracking-tight text-navy">
          الدفتر هو الأساس.
          <br />
          <span>والتقنية مساحة مساندة.</span>
        </h1>
        <p className="mb-7 max-w-3xl text-base leading-8 text-grey sm:text-lg">
          اكتشف أدوات رقمية قد تساعدك على ممارسة ما تخطط له. احتفظ بالتخطيط
          والتأمل في دفتر LUMA Life، واستخدم التطبيقات كمكمّل لا كبديل.
        </p>
        <div className="flex flex-wrap items-center gap-2 sm:gap-5">
          <ArrowLink href="#resource-categories">استكشف الأدوات</ArrowLink>
        </div>
        <div className="mt-8 flex items-center gap-3 border-t border-line pt-4 sm:mt-12">
          <span className="font-display text-xs font-bold text-royal" aria-hidden="true">
            01
          </span>
          <p className="mb-0 text-sm font-semibold text-navy">
            خطّط على الورق. واستخدم التقنية عندما تخدم يومك.
          </p>
        </div>
      </div>
    </section>
  );
}
