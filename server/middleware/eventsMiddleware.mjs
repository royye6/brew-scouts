import { pool } from "../utils/database.mjs";

export const findEventById = async (req, res, next) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res
            .status(400)
            .json({ status: "Failed", message: "Invalid event ID" });
    }

    try {
        const eventExists = await pool.query({
            text: "SELECT * FROM events WHERE id = $1",
            values: [id],
        });

        if (!eventExists) {
            return res
                .status(404)
                .json({ status: "Failed", message: "Event not found" });
        }

        req.event = eventExists.rows[0];

        next();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "Failed", message: err.message });
    }
};
