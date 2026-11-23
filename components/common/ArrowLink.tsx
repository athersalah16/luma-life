import Link from "next/link";
import { cn } from "@/lib/utils";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
};

export function ArrowLink({
  href,
  children,
  secondary = false,
}: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-4 rounded-pill border border-navy bg-navy px-6 py-3 font-semibold text-paper transition duration-150 hover:-translate-y-0.5 hover:shadow-card",
        secondary && "border-transparent bg-transparent text-navy hover:bg-mist hover:shadow-none",
      )}
    >
      {children}
      <span className="text-lg transition-transform group-hover:-translate-x-1" aria-hidden="true">
        ←
      </span>
    </Link>
  );
}
