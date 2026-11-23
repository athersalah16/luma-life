export const navigation = [
  { label: "الرئيسية", href: "/" },
  { label: "قصتنا", href: "/about" },
  { label: "دليل الدفتر", href: "/qr-guide" },
] as const;



export const footerNavigation = navigation.slice(1);
