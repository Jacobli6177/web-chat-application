import express from "express"
import { checkAuth, login, logout, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middeware.js";
const router = express.Router()

router.post("/signup", signup);

router.post("/login", logout);

router.post("/logout", login);

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth);

export default router;