import { env } from "process";

import nlEn from "@lingua-magister/mock-data/nl-en";
import { Definition, DefinitionList, Word } from "@lingua-magister/types";

import { Repo } from "./Repo.js";

const r: Repo<Word, DefinitionList> =
  env["NODE_ENV"] === "development" ? nlEn.dictionary : new Map();

export default r;
