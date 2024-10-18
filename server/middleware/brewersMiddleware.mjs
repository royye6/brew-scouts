import { pool } from "../utils/database.mjs";

export const findBrewerById = async (req, res, next) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res
            .status(400)
            .json({ status: "Failed", message: "Invalid brewer ID" });
    }

    try {
        const brewerExists = await pool.query({
            text: "SELECT * FROM brewers WHERE id = $1",
            values: [id],
        });

        if (!brewerExists) {
            return res.status(404).json({ status: "Failed", message: "Brewer not found"})
        }

        req.brewer = brewerExists.rows[0]

        next();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "Failed", message: err.message });
    }
};
