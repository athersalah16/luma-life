export function GuideIntroduction() {
  return (
    <section className="mb-10 grid items-center gap-4 md:grid-cols-[auto_1fr] md:gap-9">
      <div className="hidden size-24 place-items-center rounded-full border border-light font-display text-3xl font-bold text-navy md:grid">
        L
      </div>
      <div className="max-w-4xl">
        <p className="mb-3 text-xs font-bold tracking-[0.1em] text-royal">
          كيف تستخدم هذا الدليل؟
        </p>
        <h2 className="mb-3 text-2xl font-bold leading-snug text-navy sm:text-3xl">
          أدوات يومية، واختيارك يبقى لك.
        </h2>
        <p className="mb-0 leading-8 text-grey">
          هذه قائمة موارد اختيارية مرتبة بحسب فئات الدفتر. اختر منها ما يناسب
          احتياجك؛ لا يوجد ربط بين الموقع والتطبيقات، ولا حاجة إلى إنشاء حساب
          هنا أو مشاركة بياناتك.
        </p>
      </div>
    </section>
  );
}
