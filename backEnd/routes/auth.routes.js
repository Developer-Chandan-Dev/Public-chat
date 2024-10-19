import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

// SignUp Route
router.post("/signup", signup);

// Login Route
router.post("/login", login);

// Logout Route
router.post("/logout", logout);

export default router;
