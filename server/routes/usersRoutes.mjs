import express, { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.mjs";
import { changePassword, getUser, updateUser } from "../controllers/usersController.mjs";


const router = express.Router();

router.get("/", authMiddleware, getUser);
router.put("/change-password", authMiddleware, changePassword)
router.patch("/", authMiddleware, updateUser);
export default router;

