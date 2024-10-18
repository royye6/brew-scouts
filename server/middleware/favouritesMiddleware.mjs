import { pool } from "../utils/database.mjs";

export const findFavouriteById = async (req, res, next) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res
            .status(400)
            .json({ status: "Failed", message: "Invalid favourite ID" });
    }

    try {
        const favouriteExists = await pool.query({
            text: "SELECT * FROM favourites WHERE id = $1",
            values: [id],
        });

        if (!favouriteExists) {
            return res
                .status(404)
                .json({ status: "Failed", message: "Favourite not found" });
        }

        req.favourite = favouriteExists.rows[0];

        next();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "Failed", message: err.message });
    }
};
