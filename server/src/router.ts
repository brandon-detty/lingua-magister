import { Router } from "express";

import textRoutes from "./api/text/textRoutes.js";
import translationRoutes from "./api/translation/translationRoutes.js";

const router = Router();

router.use(translationRoutes);
router.use(textRoutes);

export default router;
