import { ArrowLink } from "@/components/common/ArrowLink";
import { SectionHeading } from "@/components/common/SectionHeading";
import { notebook } from "@/help_data/company/notebook.data";

export function NotebookShowcase() {
  return (
    <section id="notebook" className="bg-paper py-16 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 sm:px-5 md:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            className="mb-5"
            eyebrow="أداة ورقية لحياة متوازنة"
            title={notebook.name}
            description={notebook.description}
          />
          <p className="mb-3 inline-block rounded-pill bg-mist px-4 py-2 font-bold text-navy">
            {notebook.duration}
          </p>
          <p className="mb-7 leading-8 text-grey">
            ليس المطلوب أن تملأ كل صفحة، بل أن تجد مساحة واضحة لما تريد أن
            تمنحه وقتك واهتمامك.
          </p>
          <ArrowLink href="/qr-guide">تعرّف على طريقة الاستخدام</ArrowLink>
        </div>
        <div className="relative grid min-h-92 place-items-center overflow-hidden rounded-card bg-linear-to-br from-mist to-paper sm:min-h-[26rem]" aria-hidden="true">
          <div className="absolute size-68 rounded-full bg-light/20 blur-sm" />
          <div className="relative flex aspect-[0.73] w-52 flex-col items-center justify-center rounded-xl bg-linear-to-br from-royal to-navy text-paper shadow-2xl sm:w-56">
            <div className="absolute inset-y-0 inset-s-3 w-px bg-paper/30" />
            <div className="absolute top-[18%] size-16 rounded-full border border-paper/70" />
            <div className="absolute top-[18%] text-3xl leading-[4.1rem] text-gold">✓</div>
            <span className="mt-14 font-display text-3xl font-extrabold tracking-[0.18em]">
              LUMA
            </span>
            <span className="font-display text-base tracking-[0.4em]">LIFE</span>
            <span className="my-4 h-0.5 w-12 bg-gold" />
            <span className="text-xs">90 يوماً</span>
          </div>
          <span className="absolute bottom-5 inset-s-5 text-xs text-grey">
            خطوة صغيرة، كل يوم.
          </span>
        </div>
      </div>
    </section>
  );
}
