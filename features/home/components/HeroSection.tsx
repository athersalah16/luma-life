import { ArrowLink } from "@/components/shared/ArrowLink";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-bl from-paper via-paper to-mist py-16 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-4 px-4 sm:px-5 md:min-h-140 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
        <div className="max-w-2xl pb-0 md:pb-8">
          <p className="mb-4 text-xs font-bold tracking-widest text-royal">
            حياة أكثر وعياً، يوماً بعد يوم
          </p>
          <h1 className="mb-5 font-display text-display font-bold tracking-tight text-navy">
            خطّط ليومك.
            <br />
            <span>وافسح مجالاً لما يهم.</span>
          </h1>
          <p className="mb-8 max-w-xl text-base leading-8 text-grey sm:text-lg">
            دفتر ورقي يساعدك على تنظيم عبادتك وتعلّمك وعملك وحركتك وقراءتك،
            بخطوات واقعية وتقدّم بلا سعي إلى الكمال.
          </p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-5">
            <ArrowLink href="#notebook">اكتشف الدفتر</ArrowLink>
            <ArrowLink href="/qr-guide" secondary>
              اقرأ الدليل
            </ArrowLink>
          </div>
          <div className="mt-8 flex items-center gap-3 sm:mt-12">
            <span className="h-px w-9 bg-gold" aria-hidden="true" />
            <p className="mb-0 font-display text-xs font-bold tracking-[0.16em] text-navy">
              PLAN <span className="px-1 text-sky">•</span> FOCUS
              <span className="px-1 text-sky">•</span> GROW
            </p>
          </div>
        </div>
        <div
          className="relative isolate grid  place-items-center md:min-h-124"
          role="img"
          aria-label="تصميم توضيحي لدفتر LUMA Life"
        >
          <div className="absolute -z-10 size-[92vw]  md:min-h-100 rounded-full border border-sky/20 before:absolute before:inset-5 before:rounded-full before:border before:border-sky/15 before:content-[''] after:absolute after:inset-10 after:rounded-full after:border after:border-sky/15 after:content-['']" />
          <div className="relative flex aspect-[0.72] w-60 max-w-[66vw] flex-col items-center justify-center overflow-hidden rounded-xl border border-paper/60 bg-linear-to-br from-sky to-navy text-paper shadow-2xl sm:w-72">
            <div className="absolute inset-y-0 inset-s-3 w-px bg-paper/30" />
            <div className="grid size-17 place-items-center rounded-full border border-paper/70" aria-hidden="true">
              <span className="size-5 translate-x-0.5 -translate-y-0.5 rotate-45 border-b-[3px] border-e-[3px] border-paper" />
            </div>
            <p className="mb-0 mt-6 font-display text-4xl font-extrabold tracking-[0.22em]">
              LUMA
            </p>
            <p className="mb-0 mt-1 font-display text-xl font-semibold tracking-[0.38em]">
              LIFE
            </p>
            <span className="my-5 h-0.5 w-16 bg-gold" />
            <p className="mb-2 text-sm tracking-wide">90 يوماً من التوازن</p>
            <p className="mb-0 font-display text-[0.5rem] tracking-[0.16em]">
              PLAN • FOCUS • GROW
            </p>
          </div>
          <div className="absolute bottom-4 flex items-center gap-3 text-xs text-grey sm:bottom-6">
            <span>دفتر ورقي</span>
            <span className="h-px w-5 bg-gold" aria-hidden="true" />
            <span>مساحة ليومك</span>
          </div>
        </div>
      </div>
      <a
        className="mx-auto mt-2 flex w-fit items-center justify-center gap-3 text-xs text-grey md:mt-6"
        href="#introduction"
      >
        <span>اكتشف LUMA Life</span>
        <span className="text-royal" aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
