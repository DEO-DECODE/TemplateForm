import express from "express";
const router = express.Router();
import { submitHandler } from "../controllers/userController.js";
router.post("/submit", submitHandler);
export default router;
