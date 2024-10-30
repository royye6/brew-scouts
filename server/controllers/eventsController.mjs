import { pool } from "../utils/database.mjs";
import { matchedData, validationResult } from "express-validator";

export const getEvents = async (req, res) => {
    try {
        const location = req.query.location
        const searchTerm = req.query.search

        console.log(`location: ${location}, search-term: ${searchTerm}`)

        const allEvents = await pool.query({
            text: "SELECT * FROM events WHERE location ILIKE $1 AND (name ILIKE $2 OR description ILIKE $2)",
            values: [`${location}`, `${searchTerm}`],
        });


        if (!allEvents) {
            return res.status(404).json({
                status: "Failed",
                message: "Error fetching all events",
            });
        }

        const events = allEvents.rows;

        return res.status(200).json({
            status: "Success",
            message: "Fetched all events successfully",
            events,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "Failed", message: err.message });
    }
};

export const newEvent = async (req, res) => {
    try {
        const result = validationResult(req);

        if (!result.isEmpty()) {
            return res
                .status(400)
                .json({ status: "Failed", erros: result.array() });
        }

        try {
            const data = matchedData(req);
            const {
                name,
                brewer_id,
                date,
                description,
                location,
                latitude,
                longitude,
                promotions,
            } = data;

            const createNewEvent = await pool.query({
                text: "INSERT INTO events (name, brewer_id, date, description, location, latitude, longitude, promotions) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
                values: [
                    name,
                    brewer_id,
                    date,
                    description,
                    location,
                    latitude,
                    longitude,
                    promotions,
                ],
            });

            if (!createNewEvent) {
                return res.status(400).json({
                    status: "Failed",
                    message: "Error creating event",
                });
            }

            return res.status(201).json({
                status: "Success",
                message: "New event created successfully",
                createNewEvent,
            });
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                status: "Failed",
                message: "Error creating event",
            });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "Failed", message: err.message });
    }
};

export const getEvent = async (req, res) => {
    try {
        const event = req.event;

        return res.status(200).json({
            status: "Success",
            message: "Found event successfully",
            event,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "Failed", message: err.message });
    }
};

export const updateEvent = async (req, res) => {
    try {
        const result = validationResult(req);

        if (!result.isEmpty()) {
            return res
                .status(400)
                .json({ status: "Failed", erros: result.array() });
        }

        try {
            const data = matchedData(req);

            const {
                name,
                brewer_id,
                date,
                description,
                location,
                latitude,
                longitude,
                promotions,
            } = data;
            const eventId = req.event.id;

            const updatedEvent = await pool.query({
                text: "UPDATE events SET name = $1, brewer_id = $2, date = $3, description = $4, location = $5, latitude = $6, longitude = $7, promotions = $8, updated_at = CURRENT_TIMESTAMP WHERE id = $9 RETURNING *",
                values: [
                    name,
                    brewer_id,
                    date,
                    description,
                    location,
                    latitude,
                    longitude,
                    promotions,
                    eventId,
                ],
            });

            if (!updatedEvent) {
                return res.status(400).json({
                    status: "Failed",
                    message: "Error updating event",
                });
            }

            const updatedEventInfo = updatedEvent.rows;

            return res.status(201).json({
                status: "Success",
                message: "Event updated successfully",
                updatedEventInfo,
            });
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                status: "Failed",
                message: "Error updating event",
            });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "Failed", message: err.message });
    }
};

export const deleteEvent = async (req, res) => {
    try {
        const eventId = req.event.id;

        const deleteEvent = await pool.query({
            text: "DELETE FROM events WHERE id = $1",
            values: [eventId],
        });

        if (!deleteEvent) {
            return res.status(400).json({
                status: "Failed",
                message: "Error deleting event",
            });
        }

        return res.status(200).json({
            status: "Success",
            message: "Event deleted successfully",
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "Failed", message: err.message });
    }
};
