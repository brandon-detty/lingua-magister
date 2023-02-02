import { Router } from "express";
import repo from "../../repo/translationRepo.js";

const router = Router();

router.get("/translation", (_, res) => {
  const word = "vos";
  const def = repo.get(word) || null;
  res.json(def);
});

export default router;
