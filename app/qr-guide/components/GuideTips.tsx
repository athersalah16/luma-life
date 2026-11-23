const tips = [
  {
    title: "ابدأ بالورق",
    description:
      "حدّد أولوياتك ومواعيدك في الدفتر قبل فتح التطبيقات، ليبقى التخطيط واضحاً أمامك.",
  },
  {
    title: "اختر ما تحتاجه",
    description:
      "لا تحتاج إلى استخدام كل أداة. اختر ما يساعدك فعلاً واترك ما لا يناسب روتينك.",
  },
  {
    title: "اجعل التقنية في خدمتك",
    description:
      "استخدم التطبيقات لتنفيذ نشاطك أو تسهيله، ثم عُد إلى الدفتر للتخطيط والتأمل.",
  },
] as const;

export function GuideTips() {
  return (
    <section className="mt-10 rounded-card bg-mist p-5 sm:p-8 md:mt-14 md:p-10">
      <div className="max-w-2xl">
        <p className="mb-3 text-xs font-bold tracking-widest text-royal">
          توازن رقمي وورقي
        </p>
        <h2 className="mb-0 text-2xl font-bold leading-snug text-navy sm:text-3xl">
          الأداة وسيلة. والدفتر يبقى مساحتك.
        </h2>
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {tips.map((tip, index) => (
          <article className="rounded-card border border-line bg-paper p-5" key={tip.title}>
            <span className="text-xs font-bold text-royal">٠{index + 1}</span>
            <h3 className="mb-2 mt-2 text-base font-bold text-navy">
              {tip.title}
            </h3>
            <p className="mb-0 text-sm leading-7 text-grey">
              {tip.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
