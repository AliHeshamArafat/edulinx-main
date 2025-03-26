import { University } from "./university";
import { Program } from "./program";

export interface SearchData {
  universities: { result: University[]; totalCount: number; genericTotalCount: number };
  programs: { result: Program[]; totalCount: number; genericTotalCount: number };
}
