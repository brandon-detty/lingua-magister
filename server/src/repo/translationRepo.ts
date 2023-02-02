import { Repo } from "./Repo.js";

type Word = string;
type Definition = string | Array<string>;

const r: Repo<Word, Definition> = new Map<Word, Definition>();

r.set("vos", "fox");
r.set("springt", "jumps");

export default r;
