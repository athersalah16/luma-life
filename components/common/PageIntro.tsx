type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="bg-mist py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-5">
        <p className="mb-4 text-xs font-bold tracking-widest text-royal">
          {eyebrow}
        </p>
        <h1 className="mb-3 max-w-5xl font-display text-display font-bold leading-tight tracking-tight text-navy">
          {title}
        </h1>
        <p className="mb-0 max-w-3xl text-lg leading-8 text-grey">
          {description}
        </p>
      </div>
    </section>
  );
}
