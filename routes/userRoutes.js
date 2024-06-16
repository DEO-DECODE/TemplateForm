import express from "express";
const router = express.Router();
import { submitHandler, getDownloadUrl } from "../controllers/userController.js";
import { upload } from "../middlewares/uploadMiddleware.js";
router.post("/submit", upload.single("attachment"), submitHandler);
router.get("/geturl/:id", getDownloadUrl);
export default router;
