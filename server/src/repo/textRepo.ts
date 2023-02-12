import { env } from "process";

import nlEn from "@lingua-magister/mock-data/nl-en";

import { ListableRepo } from "./Repo.js";

const m =
  env["NODE_ENV"] === "development" ? nlEn.library : new Map<number, string>();

const r: ListableRepo<number, string> = {
  get: m.get.bind(m),
  delete: m.delete,
  list: () => Array.from(m.values()),
  set: m.set.bind(m),
};

export default r;
