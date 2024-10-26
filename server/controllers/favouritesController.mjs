import { pool } from "../utils/database.mjs";
import { matchedData, validationResult } from "express-validator";

export const getFavourites = async (req, res) => {
    try {
        const { userId } = req.body.user;

        const allFavourites = await pool.query({
            text: "SELECT f.id, f.user_id, f.event_id, f.created_at, e.name AS event_name FROM favourites f JOIN events e ON f.event_id = e.id WHERE f.user_id = $1",
            values: [userId],
        });

        if (!allFavourites) {
            return res.status(404).json({
                status: "Failed",
                message: "Error fetching all favourites",
            });
        }

        const favourites = allFavourites.rows;

        return res.status(200).json({
            status: "Success",
            message: "Fetched all favourites successfully",
            favourites,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "Failed", message: err.message });
    }
};

export const newFavourite = async (req, res) => {
    try {
        const result = validationResult(req);

        if (!result.isEmpty()) {
            return res
                .status(400)
                .json({ status: "Failed", erros: result.array() });
        }

        try {
            const data = matchedData(req);
            const { user_id, event_id } = data;

            const createNewFavourite = await pool.query({
                text: "INSERT INTO favourites (user_id, event_id) VALUES ($1, $2) RETURNING *",
                values: [user_id, event_id],
            });

            if (!createNewFavourite) {
                return res.status(400).json({
                    status: "Failed",
                    message: "Error creating favourite",
                });
            }

            const newFavourite = createNewFavourite.rows;

            return res.status(201).json({
                status: "Success",
                message: "New favourite created successfully",
                newFavourite,
            });
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                status: "Failed",
                message: "Error creating favourite",
            });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "Failed", message: err.message });
    }
};

export const getFavourite = async (req, res) => {
    try {
        const favourite = req.favourite;

        return res.status(200).json({
            status: "Success",
            message: "Found favourite successfully",
            favourite,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "Failed", message: err.message });
    }
};

export const deleteFavourite = async (req, res) => {
    try {
        const favouriteId = req.favourite.id;

        const deleteFavourite = await pool.query({
            text: "DELETE FROM favourites WHERE id = $1",
            values: [favouriteId],
        });

        if (!deleteFavourite) {
            return res.status(400).json({
                status: "Failed",
                message: "Error deleting favourite",
            });
        }

        return res.status(200).json({
            status: "Success",
            message: "Favourite deleted successfully",
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "Failed", message: err.message });
    }
};
