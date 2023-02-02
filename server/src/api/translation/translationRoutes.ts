import { Router } from "express";

const router = Router();

type Word = string;
type Definition = string | Array<string>;

const repo = new Map<Word, Definition>();
repo.set("vos", "fox");
repo.set("springt", "jumps");

router.get("/definition", (_, res) => {
  const word = "vos";
  const def = repo.get(word) || null;
  res.json(def);
});

export default router;
