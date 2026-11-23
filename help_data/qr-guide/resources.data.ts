import { moveResources } from "./move.data";
import { studyWorkResources } from "./study-work.data";
import { worshipResources } from "./worship.data";
import { readResources } from "./reading.data";


export const resourceCategories = [
  worshipResources,
  studyWorkResources,
  moveResources,
  readResources,
] as const;
