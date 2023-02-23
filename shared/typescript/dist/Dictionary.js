import { isWord } from "./Word.js";
import { isDefinitionList } from "./DefinitionList.js";
export const isDictionary = (d) => {
    if (typeof d !== "object" ||
        d === null ||
        Array.isArray(d) ||
        Object.getOwnPropertySymbols(d).length > 0) {
        return false;
    }
    return Object.getOwnPropertyNames(d).every((p) => isWord(p) && isDefinitionList(d[p]));
};
