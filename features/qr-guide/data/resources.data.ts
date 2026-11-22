import { moveResources } from "@/features/qr-guide/data/move.data";
import { readingResources } from "@/features/qr-guide/data/reading.data";
import { studyWorkResources } from "@/features/qr-guide/data/study-work.data";
import { worshipResources } from "@/features/qr-guide/data/worship.data";

export const resourceCategories = [
  worshipResources,
  studyWorkResources,
  moveResources,
  readingResources,
] as const;
