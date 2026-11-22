export const desktopNavigation = [
  { label: "الرئيسية", href: "/" },
  { label: "قصتنا", href: "/about" },
  { label: "دليل الدفتر", href: "/qr-guide" },
] as const;

export const mobileNavigation = [
  { label: "الرئيسية", href: "/" },
  { label: "قصتنا", href: "/about" },
  { label: "الدليل", href: "/qr-guide" },
] as const;

export const footerNavigation = desktopNavigation.slice(1);
