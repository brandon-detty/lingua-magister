import { Definition, DefinitionList, Word } from "@lingua-magister/types";
import { Repo } from "./Repo.js";

const r: Repo<Word, Definition | DefinitionList> = new Map<
  Word,
  Definition | DefinitionList
>();

r.set("vos", "fox");
r.set("springt", "jumps");

export default r;
