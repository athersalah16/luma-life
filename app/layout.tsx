import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "LUMA Life | خطّط • ركّز • انمُ",
    template: "%s | LUMA Life",
  },
  description:
    "مساحة تساعدك على تنظيم يومك والاهتمام بما يهمك، بخطوات واقعية وتقدّم بلا سعي إلى الكمال.",
  applicationName: "LUMA Life",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className="h-full scroll-smooth scroll-pt-24 font-sans antialiased">
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <a
          className="absolute inset-s-3 top-3 z-20 -translate-y-[160%] rounded-pill bg-navy px-4 py-3 text-paper focus:translate-y-0"
          href="#main-content"
        >
          انتقل إلى المحتوى
        </a>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
