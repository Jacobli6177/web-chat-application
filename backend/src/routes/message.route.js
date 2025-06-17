import express from "express";
import { protectRoute } from "../middleware/auth.middeware";
import { getUsersForSidebar } from "../controllers/message.controller";

const router = express.Router();

router.get("/user", protectRoute, getUsersForSidebar);

export default router;
