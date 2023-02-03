import { ListableRepo } from "./Repo.js";

const m = new Map<number, string>();

const r: ListableRepo<number, string> = {
  get: m.get.bind(m),
  delete: m.delete,
  list: () => Array.from(m.entries()),
  set: m.set.bind(m),
};

r.set(0, "De snelle bruine vos springt over de luie hond heen.");

export default r;
