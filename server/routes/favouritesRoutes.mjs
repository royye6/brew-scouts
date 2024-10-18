import express, { Router } from "express";
import {
    deleteFavourite,
    getFavourites,
    newFavourite,
    getFavourite,
} from "../controllers/favouritesController.mjs";
import { checkSchema } from "express-validator";
import { newFavValidationSchema } from "../utils/validationSchemas.mjs";
import { findFavouriteById } from "../middleware/favouritesMiddleware.mjs";
import authMiddleware from "../middleware/authMiddleware.mjs";

const router = express.Router();

router.get("/", authMiddleware, getFavourites);
router.post("/", checkSchema(newFavValidationSchema), newFavourite);
router.get("/:id", findFavouriteById, getFavourite);
router.delete("/:id", findFavouriteById, deleteFavourite);

export default router;
