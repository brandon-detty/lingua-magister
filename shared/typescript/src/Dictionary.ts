import Word, { isWord } from "./Word.js";
import DefinitionList, { isDefinitionList } from "./DefinitionList.js";

export type Dictionary = Record<Word, DefinitionList>;
export type DictionaryMap = Map<Word, DefinitionList>;

export const isDictionary = (d: unknown): d is Dictionary => {
  if (
    typeof d !== "object" ||
    d === null ||
    Array.isArray(d) ||
    Object.getOwnPropertySymbols(d).length > 0
  ) {
    return false;
  }
  return Object.getOwnPropertyNames(d).every(
    (p) => isWord(p) && isDefinitionList(d[p as keyof typeof d])
  );
};

export default Dictionary;
