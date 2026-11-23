import type { ResourceCategory } from "@/types/resource.types";

export const moveResources = {
  id: "move",
  title: "الحركة",
  englishTitle: "Move",
  description: "أدوات تساعد على ممارسة النشاط البدني والحركة وتتبعها.",
  tip: "خطّط في الدفتر لحركة تناسب يومك، ثم ارجع إليه لتدوين ما تريد تذكّره.",
  resources: [
 
    {
      id: "hevy",
      name: "Hevy",
      description: "دفتر تمارين الجيم: سجّل المجموعات والأوزان وتابع تطورك.",
      purpose: "تسجيل تفاصيل تمارين القوة.",
      notebookUse: "سجّل درجة اليوم في الدفتر، وتفاصيل الأوزان في التطبيق.",
      icon: "/icons/apps/hevy.png",
      pricing: "freemium",
      links: { website: "https://www.hevyapp.com" },
    },
    {
      id: "strava",
      name: "Strava",
      description: "تتبع المشي والجري وركوب الدراجة بالمسافة والزمن، مع مجتمع للتحديات.",
      purpose: "قياس مدة النشاط ومسافته.",
      notebookUse: "دوّن مدة النشاط في الدفتر لتحسب درجة التمرين.",
      icon: "/icons/apps/strava.png",
      pricing: "freemium",
      links: { website: "https://www.strava.com" },
    },
    
  ],
} satisfies ResourceCategory;

