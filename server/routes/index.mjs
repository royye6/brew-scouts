import express, { Router } from "express";
import authRoutes from "./authRoutes.mjs";
import brewersRoutes from "./brewersRoutes.mjs";
import eventsRoutes from "./eventsRoutes.mjs";
import usersRoutes from "./usersRoutes.mjs";
import favouritesRoutes from "./favouritesRoutes.mjs"

const router = express.Router();

router.use("/auth", authRoutes)
router.use("/brewers", brewersRoutes);
router.use("/events", eventsRoutes);
router.use("/users", usersRoutes);
router.use("/favourites", favouritesRoutes);


export default router;
