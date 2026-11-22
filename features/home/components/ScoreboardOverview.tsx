import { ArrowLink } from "@/components/shared/ArrowLink";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  maximumDailyScore,
  scoreboardCategories,
} from "@/data/scoreboard.data";

export function ScoreboardOverview() {
  return (
    <section className="bg-paper py-16 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 sm:px-5 md:grid-cols-[1fr_0.75fr] md:gap-16">
        <div>
          <SectionHeading
            eyebrow="مرجع يومي"
            title="لوحة نقاط تساعدك على الرؤية."
            description="تعرّف على التوزيع العام للفئات في اللوحة المطبوعة، واستخدمه كمرجع للتخطيط فقط."
          />
        </div>
        <div
          className="rounded-card border border-line bg-paper p-6 shadow-card sm:p-9"
          aria-label={`إجمالي اللوحة ${maximumDailyScore} نقطة`}
        >
          <div className="mb-4 flex items-baseline justify-between border-b border-line pb-4 text-grey">
            <strong className="font-display text-5xl leading-none text-navy">
              {maximumDailyScore}
            </strong>
            <span>نقطة كحد أقصى</span>
          </div>
          {scoreboardCategories.map((category) => (
            <div
              className="flex justify-between border-b border-line/65 py-3 last:border-0"
              key={category.englishName}
            >
              <span>{category.name}</span>
              <span className="font-bold text-royal">{category.points}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
