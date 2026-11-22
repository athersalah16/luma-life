import type { ResourceCategory } from "@/features/qr-guide/types/resource.types";

export const worshipResources = {
  id: "worship",
  title: "العبادة",
  englishTitle: "Worship",
  description:
    "أدوات قرآنية وتذكيرات وموارد مساندة للعبادة. الترشيحات أدناه مقدّمة كأسماء فقط إلى حين إضافة تفاصيل وروابط رسمية موثّقة.",
  tip: "حدّد في الدفتر ما تريد الاهتمام به، ثم استخدم التطبيق المناسب لممارسة ذلك. اترك التخطيط والمراجعة في صفحاتك الورقية.",
  resources: [
    {
      id: "khatmah",
      name: "Khatmah",
      description: "ترشيح ضمن فئة العبادة.",
      purpose: "أداة رقمية مساندة لجانب العبادة.",
      notebookUse:
        "استخدم الدفتر لتحديد نيتك ووقتك، واترك للتطبيق دور المساندة الرقمية.",
    },
    {
      id: "tarteel",
      name: "Tarteel",
      description: "ترشيح ضمن فئة العبادة.",
      purpose: "أداة رقمية مساندة لجانب العبادة.",
      notebookUse:
        "دوّن في الدفتر ما تريد تخصيص وقت له، واستخدم التطبيق أثناء الممارسة.",
    },
    {
      id: "bilal",
      name: "Bilal",
      description: "ترشيح ضمن فئة العبادة.",
      purpose: "أداة رقمية مساندة لجانب العبادة.",
      notebookUse:
        "اجعل التطبيق مكمّلاً لخطة العبادة التي وضعتها في دفتر LUMA Life.",
    },
  ],
} satisfies ResourceCategory;
