import express, { Router } from "express";
import authRoutes from "./authRoutes.mjs";
import businessRoutes from "./businessRoutes.mjs";
import eventRoutes from "./eventRoutes.mjs";
import userRoutes from "./userRoutes.mjs";

const router = express.Router();

router.use("/auth", authRoutes)
router.use("/business", businessRoutes);
router.use("/event", eventRoutes);
router.use("/user", userRoutes);


export default router;
