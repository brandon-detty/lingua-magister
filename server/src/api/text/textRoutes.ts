import { Router } from "express";

const router = Router();

const repo = new Map<number, string>();
repo.set(0, "De snelle bruine vos springt over de luie hond heen.");

router.get("/text", (_, res) => {
  const id = 0;
  res.json(repo.get(id));
});

export default router;
