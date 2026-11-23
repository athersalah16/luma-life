import type { ResourceCategory } from "@/types/resource.types";

export const worshipResources = {
  id: "worship",
  title: "العبادة",
  englishTitle: "Worship",
  description:
    "أدوات قرآنية وتذكيرات وموارد مساندة للعبادة. اختر منها ما يخدم خطتك، وابقَ على الدفتر للتخطيط والمراجعة.",
  tip: "حدّد في الدفتر ما تريد الاهتمام به، ثم استخدم التطبيق المناسب لممارسة ذلك. اترك التخطيط والمراجعة في صفحاتك الورقية.",
  resources: [
    {
      id: "khatmah",
      name: "Khatmah",
      description: "مصحف وخطة لختم القرآن في المدة التي تحددها، مع تنبيهات يومية ومواقيت الصلاة والأذكار.",
      purpose: "متابعة ورد القرآن وموضع التوقف.",
      notebookUse: "اكتب ورد اليوم في الدفتر، واستخدم التطبيق للقراءة ومتابعة التقدم.",
      icon: "/icons/apps/khatmah.png",
      pricing: "freemium",
      links: { ios: "https://apps.apple.com/app/id543090051" },
    },
    {
      id: "tarteel",
      name: "Tarteel",
      description: "تطبيق للقراءة والحفظ يستمع إلى تلاوتك ويساعدك على اكتشاف الأخطاء.",
      purpose: "مراجعة الحفظ وتحسين التلاوة.",
      notebookUse: "دوّن في الدفتر الصفحات التي تريد مراجعتها، وراجعها بالتطبيق.",
      icon: "/icons/apps/tarteel.png",
      pricing: "freemium",
      links: { website: "https://www.tarteel.ai" },
    },
    {
      id: "bilal",
      name: "Bilal",
      description: "تطبيق مساند لمواقيت الصلاة والأذان والتذكير اليومي بالعبادات.",
      purpose: "التذكير بمواقيت الصلاة والعبادات اليومية.",
      notebookUse: "حدّد صلواتك في الدفتر أولاً، واستخدم التطبيق للتنبيه فقط.",
      icon: "/icons/apps/bilal.png",
      pricing: "free",
    },
    {
      id: "muslim-pro",
      name: "Muslim Pro",
      description: "مواقيت الصلاة والقبلة والقرآن، مع متابعة الصلوات والصيام وتذكيرات حسب موقعك.",
      purpose: "معرفة وقت الصلاة واتجاه القبلة.",
      notebookUse: "علّم الفروض في الدفتر، واستخدم التطبيق لمعرفة الوقت والقبلة.",
      icon: "/icons/apps/muslim-pro.png",
      pricing: "freemium",
      links: {
        ios: "https://apps.apple.com/app/388389451",
        android: "https://play.google.com/store/apps/details?id=com.bitsmedia.android.muslimpro",
        website: "https://www.muslimpro.com",
      },
    },
  ],
} satisfies ResourceCategory;
