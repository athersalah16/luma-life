import type { ResourceCategory } from "@/types/resource.types";

export const readResources = {
  id: "read",
  title: "القراءة",
  englishTitle: "Read",
  description: "تطبيقات ومواقع لاكتشاف الكتب والقراءة وتنظيمها.",
  tip: "اختر وقت القراءة في الدفتر، واستخدم مصدراً رقمياً للقراءة أو اكتشاف الكتب عند الحاجة.",
  resources: [
    
    {
      id: "abjjad",
      name: "أبجد",
      description: "منصة عربية لاكتشاف الكتب ومشاركة المراجعات ومتابعة القراءة.",
      purpose: "اكتشاف الكتب العربية.",
      notebookUse: "اختر كتابك من التطبيق، وسجّل فكرة اليوم في الدفتر.",
      icon: "/icons/apps/abjjad.png",
      pricing: "freemium",
      links: { website: "https://www.abjjad.com" },
    },
    {
      id: "hindawi",
      name: "هنداوي",
      description: "مؤسسة تنشر كتباً عربية مجانية للقراءة والتحميل.",
      purpose: "قراءة كتب عربية مجانية.",
      notebookUse: "ابدأ بربع ساعة يومية من كتاب مجاني، وسجّل التقدم في الدفتر.",
      icon: "/icons/apps/hindawi.png",
      pricing: "free",
      links: { website: "https://www.hindawi.org" },
    },

  ],
} satisfies ResourceCategory;
