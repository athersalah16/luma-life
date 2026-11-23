export type ResourcePricing = "free" | "freemium" | "paid";

export type ResourceLinks = {
  ios?: string;
  android?: string;
  website?: string;
};

export type Resource = {
  id: string;
  name: string;
  /** يظهر تحت الاسم: بيعمل إيه */
  description: string;
  purpose: string;
  notebookUse: string;
  icon?: string;
  pricing?: ResourcePricing;
  links?: ResourceLinks;
};

export type ResourceCategory = {
  id: string;
  title: string;
  englishTitle: string;
  description: string;
  tip: string;
  resources: Resource[];
};
