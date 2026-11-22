export const scoreboardCategories = [
  {
    name: "العبادة",
    englishName: "Worship",
    points: 40,
    description: "مساحة للالتزامات والعبادات.",
  },
  {
    name: "الدراسة والعمل",
    englishName: "Study and Work",
    points: 30,
    description: "مساحة للدراسة والعمل والتركيز.",
  },
  {
    name: "الحركة",
    englishName: "Move",
    points: 15,
    description: "مساحة للنشاط البدني والحركة.",
  },
  {
    name: "القراءة",
    englishName: "Read",
    points: 15,
    description: "مساحة للقراءة.",
  },
] as const;

export const maximumDailyScore = 100;

export const scoreboardGuidance = [
  "النقاط مرجع للتخطيط ومراجعة اليوم، وليست حكماً على قيمة الشخص.",
  "تختلف الظروف والقدرة من يوم لآخر؛ اجعل التخطيط مناسباً ليومك.",
  "الراحة والظروف الفردية مهمة، ولا يُطلب منك السعي إلى الكمال.",
] as const;
