import express, { Router } from "express";
import {
    deleteBrewer,
    getBrewer,
    getBrewers,
    newBrewer,
    updateBrewer,
} from "../controllers/brewersController.mjs";
import { checkSchema } from "express-validator";
import { newBrewerValidationSchema } from "../utils/validationSchemas.mjs";
import { findBrewerById } from "../middleware/brewersMiddleware.mjs";

const router = express.Router();

router.get("/", getBrewers);
router.post("/", checkSchema(newBrewerValidationSchema), newBrewer);
router.get("/:id", findBrewerById, getBrewer);
router.put("/:id", findBrewerById, checkSchema(newBrewerValidationSchema), updateBrewer);
router.delete("/:id", findBrewerById, deleteBrewer);

export default router;
