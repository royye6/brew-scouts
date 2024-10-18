import { pool } from "../utils/database.mjs";
import { matchedData, validationResult } from "express-validator";

export const getBrewers = async (req, res) => {
    try {
        const allBrewers = await pool.query({
            text: "SELECT * FROM brewers",
            values: [],
        });

        if (!allBrewers) {
            return res.status(404).json({
                status: "Failed",
                message: "Error fetching all brewers",
            });
        }

        const brewers = allBrewers.rows;

        return res.status(200).json({
            status: "Success",
            message: "Fetched all brewers successfully",
            brewers,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "Failed", message: err.message });
    }
};

export const newBrewer = async (req, res) => {
    try {
        const result = validationResult(req);

        if (!result.isEmpty()) {
            return res
                .status(400)
                .json({ status: "Failed", erros: result.array() });
        }

        try {
            const data = matchedData(req);
            const { name, description, website } = data;

            const createNewBrewer = await pool.query({
                text: "INSERT INTO brewers (name, description, website) VALUES ($1, $2, $3) RETURNING *",
                values: [name, description, website],
            });

            if (!createNewBrewer) {
                return res.status(400).json({
                    status: "Failed",
                    message: "Error creating brewer",
                });
            }

            const newBrewer = createNewBrewer.rows;

            return res.status(201).json({
                status: "Success",
                message: "New brewer created successfully",
                newBrewer,
            });
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                status: "Failed",
                message: "Error creating brewer",
            });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "Failed", message: err.message });
    }
};

export const getBrewer = async (req, res) => {
    try {
        const brewer = req.brewer;

        return res.status(200).json({
            status: "Success",
            message: "Found brewer successfully",
            brewer,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "Failed", message: err.message });
    }
};

export const updateBrewer = async (req, res) => {
    try {
        const result = validationResult(req);

        if (!result.isEmpty()) {
            return res
                .status(400)
                .json({ status: "Failed", erros: result.array() });
        }

        try {
            const data = matchedData(req);
            const { name, description, website } = data;
            const brewerId = req.brewer.id;

            const updatedBrewer = await pool.query({
                text: "UPDATE brewers SET name = $1, description = $2, website = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4 RETURNING *",
                values: [name, description, website, brewerId],
            });

            if (!updatedBrewer) {
                return res.status(400).json({
                    status: "Failed",
                    message: "Error updating brewer",
                });
            }

            const updatedBrewerInfo = updatedBrewer.rows

            return res.status(201).json({
                status: "Success",
                message: "Brewer updated successfully",
                updatedBrewerInfo,
            });
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                status: "Failed",
                message: "Error updating brewer",
            });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "Failed", message: err.message });
    }
};

export const deleteBrewer = async (req, res) => {
    try {
        const brewerId = req.brewer.id;

        const deleteBrewer = await pool.query({
            text: "DELETE FROM brewers WHERE id = $1",
            values: [brewerId],
        });

        if (!deleteBrewer) {
            return res.status(400).json({
                status: "Failed",
                message: "Error deleting brewer",
            });
        }

        return res.status(200).json({
            status: "Success",
            message: "Brewer deleted successfully",
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "Failed", message: err.message });
    }
};
