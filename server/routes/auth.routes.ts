import { Router } from "express";
import { LoginHandler, profileHandler } from "../controllers/auth.controllers";
import { requireAuth } from "../middlewares/requireAuth";

const router = Router();

router.post("/login", LoginHandler);
router.get("/profile", requireAuth, profileHandler);

export default router;
