import { readFileSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

import { type DefinitionList, type Word } from "@lingua-magister/types";

import type Language from "./Language.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const parseJsonFile = <T>(
  fromLang: Language,
  toLang: Language,
  filename: string,
  defaultVal: T
): T => {
  let data: T;
  try {
    data = JSON.parse(
      readFileSync(
        `${__dirname}/${fromLang}-${toLang}/${filename}.json`,
        "utf8"
      )
    );
  } catch {
    data = defaultVal;
  }
  return data;
};

const parseLanguageData = (fromLang: Language, toLang: Language) => {
  let dict = parseJsonFile(
    fromLang,
    toLang,
    "dictionary",
    {} as Record<Word, DefinitionList>
  );
  let lib = parseJsonFile(
    fromLang,
    toLang,
    "library",
    {} as Record<number, Word>
  );
  return {
    dictionary: new Map<Word, DefinitionList>(Object.entries(dict)),
    library: new Map<number, Word>(
      Object.entries(lib).map(([k, v]) => [parseInt(k), v])
    ),
  };
};

export default parseLanguageData;
