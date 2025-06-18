import express from "express";
import { protectRoute } from "../middleware/auth.middeware";
import { getUsersForSidebar, getMessage } from "../controllers/message.controller";

const router = express.Router();

router.get("/user", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessage);

router.post("/send/:id", protectRoute, sendMessage);
export default router;
