import { comparePassword, createJWT, hashPassword } from "../utils/index.mjs";
import { pool } from "../utils/database.mjs";

export const getUser = async (req, res) => {
    try {
        const { userId } = req.body.user;

        const userExists = await pool.query({
            text: "SELECT * FROM users WHERE id = $1",
            values: [userId],
        });

        const user = userExists.rows[0];

        if (!user) {
            return res.status(404).json({
                status: "Failed",
                message: "User not found",
            });
        }

        user.password = undefined;

        return res.status(201).json({ status: "Success", user });
    } catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ status: "Failed", message: err.message });
    }
};

export const changePassword = async (req, res) => {
    try {
        const { userId } = req.body.user;
        const { currentPassword, newPassword, repeatPassword } = req.body;

        const userExists = await pool.query({
            text: "SELECT * FROM users WHERE id = $1",
            values: [userId],
        });

        const user = userExists.rows[0];

        if (!user) {
            return res.status(404).json({
                status: "Failed",
                message: "User not found",
            });
        }

        if (newPassword !== repeatPassword) {
            return res.status(400).json({
                status: "Failed",
                message: "New password and repeat password do not match",
            });
        }

        // Check if the provided password is a match with the password belonging to the user in the database
        const isMatch = await comparePassword(currentPassword, user?.password);

        if (!isMatch) {
            return res
                .status(400)
                .json({ status: "Failed", message: "Incorrect password" });
        }

        const hashedPassword = await hashPassword(newPassword);

        const updatePassword = await pool.query({
            text: "UPDATE users SET password = $1 WHERE id = $2",
            values: [hashedPassword, userId],
        });

        return res.status(200).json({
            status: "Success",
            message: "Password changed successfully",
        });
    } catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ status: "Failed", message: err.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const { userId } = req.body.user;
        const { username, email } = req.body;

        const userExists = await pool.query({
            text: "SELECT * FROM users WHERE id = $1",
            values: [userId],
        });

        const user = userExists.rows[0];

        if (!user) {
            return res.status(404).json({
                status: "Failed",
                message: "User not found",
            });
        }

        const updatedUser = await pool.query({
            text: "UPDATE users SET username = $1, email = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *",
            values: [username, email, userId],
        });

        updatedUser.rows[0].password = undefined;

        return res
            .status(200)
            .json({
                status: "Success",
                message: "User updated successfully",
                user: updatedUser.rows[0],
            });
    } catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ status: "Failed", message: err.message });
    }
};
