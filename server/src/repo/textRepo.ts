import { env } from "process";

import { nlEn } from "@lingua-magister/mock-data";
import { LibraryMap, Text } from "@lingua-magister/types";

import { ListableRepo } from "./Repo.js";

const m: LibraryMap =
  env["NODE_ENV"] === "development" ? nlEn.library : new Map();

const r: ListableRepo<Text["id"], Text> = {
  get: m.get.bind(m),
  delete: m.delete,
  list: () => Array.from(m.values()),
  set: m.set.bind(m),
};

export default r;
