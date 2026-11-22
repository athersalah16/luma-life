import type { ResourceCategory } from "@/features/qr-guide/types/resource.types";

export const studyWorkResources = {
  id: "study-work",
  title: "الدراسة والعمل",
  englishTitle: "Study & Work",
  description:
    "أدوات لتنظيم المهام والتركيز والدراسة. أضفنا TickTick كترشيح أولي، دون افتراض تفاصيل أو ميزات غير موثّقة.",
  tip: "اكتب أولوياتك ومراجعتك في الدفتر. إن احتجت إلى تذكير رقمي بمهمة، استخدم أداة مساندة دون أن تجعلها بديلاً عن تخطيطك.",
  resources: [
    {
      id: "ticktick",
      name: "TickTick",
      description: "ترشيح ضمن فئة الدراسة والعمل.",
      purpose: "أداة رقمية مساندة لتنظيم المهام.",
      notebookUse:
        "احتفظ بأولويات يومك وملاحظاتك في الدفتر، واستخدم التطبيق كمساند رقمي عند الحاجة.",
    },
  ],
} satisfies ResourceCategory;
