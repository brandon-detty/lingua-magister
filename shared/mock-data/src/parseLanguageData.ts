import { readFileSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

import { isDictionary, isText, type Text } from "@lingua-magister/types";

import type Language from "./Language.js";
import type LanguageData from "./LanguageData.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const parseJsonFile = <T>(
  fromLang: Language,
  toLang: Language,
  filename: string
) => {
  let data;
  try {
    data = JSON.parse(
      readFileSync(
        `${__dirname}/${fromLang}-${toLang}/${filename}.json`,
        "utf8"
      )
    );
  } catch {
    data = null;
  }
  return data;
};

const parseLanguageData = (
  fromLang: Language,
  toLang: Language
): LanguageData => {
  let dict = parseJsonFile(fromLang, toLang, "dictionary");
  if (!isDictionary(dict)) {
    throw Error(`Bad mock-data JSON for ${fromLang}-${toLang} dictionary`);
  }
  let lib = parseJsonFile(fromLang, toLang, "library");
  if (!Array.isArray(lib) || !lib.every((v) => isText(v))) {
    throw Error(`Bad mock-data JSON for ${fromLang}-${toLang} library`);
  }
  return {
    dictionary: new Map(Object.entries(dict)),
    library: new Map(lib.map((t: Text) => [t.id, t])),
  };
};

export default parseLanguageData;
