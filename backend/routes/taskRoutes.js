import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { createTask, deleteTask, getTaskById, getTasks, updateTask } from "../controllers/taskController.js";

const router = express.Router();

router.post('/create', protect, createTask);
router.get('/all-tasks', protect, getTasks);
router.get('/:id', protect, getTaskById);
router.put('/update/:id', protect, updateTask);
router.delete('/delete/:id', protect, deleteTask);

export default router;