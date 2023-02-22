import validatedLangDataFromJson from "./validatedLangDataFromJson.js";

import nlEnDict from "./nl-en/dictionary.json" assert { type: "json" };
import nlEnLib from "./nl-en/library.json" assert { type: "json" };

export const nlEn = validatedLangDataFromJson(nlEnDict, nlEnLib);

export default { nlEn };
