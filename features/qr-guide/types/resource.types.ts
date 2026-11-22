export type ResourceCategoryId = "worship" | "study-work" | "move" | "read";

export type AppResource = {
  id: string;
  name: string;
  description: string;
  purpose: string;
  keyFeatures?: readonly string[];
  notebookUse: string;
  logoSrc?: string;
  officialWebsite?: string;
  googlePlayUrl?: string;
  appStoreUrl?: string;
};

export type ResourceCategory = {
  id: ResourceCategoryId;
  title: string;
  englishTitle: string;
  description: string;
  tip: string;
  resources: readonly AppResource[];
};
