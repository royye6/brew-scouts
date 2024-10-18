import express, { Router } from "express";
import {
    deleteEvent,
    getEvent,
    getEvents,
    newEvent,
    updateEvent,
} from "../controllers/eventsController.mjs";
import { checkSchema } from "express-validator";
import { newEventsValidationSchema } from "../utils/validationSchemas.mjs";
import { findEventById } from "../middleware/eventsMiddleware.mjs";

const router = express.Router();

router.get("/", getEvents);
router.post("/", checkSchema(newEventsValidationSchema), newEvent);
router.get("/:id", findEventById, getEvent);
router.put("/:id", findEventById, checkSchema(newEventsValidationSchema), updateEvent);
router.delete("/:id", findEventById, deleteEvent)

export default router;
