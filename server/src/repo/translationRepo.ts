import { env } from "process";

import { nlEn } from "@lingua-magister/mock-data";
import { DefinitionList, Word } from "@lingua-magister/types";

import { Repo } from "./Repo.js";

const r: Repo<Word, DefinitionList> =
  env["NODE_ENV"] === "development" ? nlEn.dictionary : new Map();

export default r;
