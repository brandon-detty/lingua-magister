import { Router } from "express";

import repo from "../../repo/textRepo.js";

const router = Router();

router.get("/text", (_, res) => {
  res.json(repo.list());
});

router.get("/text/:id", (req, res) => {
  const { id } = req.params;
  res.json(repo.get(parseInt(id, 10)));
});

export default router;
