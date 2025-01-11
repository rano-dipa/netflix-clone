import express from "express";
import { authCheck, login, logout, signup } from "../controllers/auth.cotroller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.get("/autCheck", protectRoute. authCheck);

export default router;