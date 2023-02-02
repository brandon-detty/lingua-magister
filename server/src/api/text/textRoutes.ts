import { Router } from "express";

import repo from "../../repo/textRepo.js";

const router = Router();

router.get("/text", (_, res) => {
  const id = 0;
  res.json(repo.get(id));
});

export default router;
