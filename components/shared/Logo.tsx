import Image from "next/image";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Image
      src="/icon.png"
      alt="LUMA Life — خطّط، ركّز، انمُ"
      width={compact ? 72 : 112}
      height={compact ? 72 : 112}
      priority
      className={
        compact
          ? "size-14 object-contain sm:size-18"
          : "size-28 rounded-lg object-contain"
      }
    />
  );
}
