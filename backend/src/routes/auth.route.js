import express from "express"
import { login, logout, signup } from "../controllers/auth.controller";

const router = express.Router()

router.post("/signup", signup);

router.post("/login", logout)

router.post("/logout", login)

export default router;