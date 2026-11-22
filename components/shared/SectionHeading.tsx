import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-3xl",
        centered && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold tracking-[0.1em] text-royal">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mb-3 font-display text-3xl font-bold leading-snug tracking-tight text-navy sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mb-0 max-w-2xl leading-8 text-grey">{description}</p>
      ) : null}
    </div>
  );
}
