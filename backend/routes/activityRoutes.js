import express from "express";
import { getActivities } from "../controllers/activityController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getActivities);

export default router;