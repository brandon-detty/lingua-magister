import { Router } from "express";
import repo from "../../repo/translationRepo.js";

const router = Router();

router.get("/translation/:str", (req, res) => {
  const { str } = req.params;
  const def = repo.get(str) || null;
  res.json(def);
});

export default router;
