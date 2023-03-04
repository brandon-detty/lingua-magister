import { Router } from "express";

import textRoutes from "./api/text/textRoutes.js";
import translationRoutes from "./api/translation/translationRoutes.js";

const router = Router();

if (process.env.NODE_ENV === "development") {
  router.use((req, res, next) => setTimeout(next, 500));
}

router.use(translationRoutes);
router.use(textRoutes);

export default router;
