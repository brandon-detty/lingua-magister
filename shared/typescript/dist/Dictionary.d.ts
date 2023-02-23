import Word from "./Word.js";
import DefinitionList from "./DefinitionList.js";
export type Dictionary = Record<Word, DefinitionList>;
export type DictionaryMap = Map<Word, DefinitionList>;
export declare const isDictionary: (d: unknown) => d is Dictionary;
export default Dictionary;
