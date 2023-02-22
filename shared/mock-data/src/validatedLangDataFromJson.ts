import { isDictionary, isLibrary, type Text } from "@lingua-magister/types";

import type LanguageData from "./LanguageData.js";

const validatedLangDataFromJson = (
  dictionary: unknown,
  library: unknown
): LanguageData => {
  if (!isDictionary(dictionary)) {
    throw Error(`parameter 'dictionaryJson' doesn't define a valid dictionary`);
  }
  if (!isLibrary(library)) {
    throw Error(`parameter 'libraryJson' doesn't define a valid library`);
  }
  return {
    dictionary: new Map(Object.entries(dictionary)),
    library: new Map(library.map((t: Text) => [t.id, t])),
  };
};

export default validatedLangDataFromJson;
