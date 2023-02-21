import type { DictionaryMap, Text } from "@lingua-magister/types";

interface LanguageData {
  dictionary: DictionaryMap;
  library: Map<Text["id"], Text>;
}

export default LanguageData;
