import { comparePassword, createJWT, hashPassword } from "../utils/index.mjs";
import { pool } from "../utils/database.mjs";

export const signUp = async (req, res) => {
    try {
        // Destructure the data coming in from the request body object
        const { username, email, password } = req.body;

        // For debugging
        console.log(req.body);

        // Check if there are any missing fields
        if (!username || !email || !password) {
            return res.status(404).json({
                status: "Failed",
                message: "Please provie all required fields",
            });
        }

        // Check if the user already exists in the database
        const userExists = await pool.query({
            text: "SELECT * FROM users WHERE email = $1",
            values: [email],
        });

        if (userExists.rows.length > 0) {
            return res.status(409).json({
                status: "Failed",
                message: "A user with this email already exists",
            });
        }

        // Hash the user provided password string
        const hashedPassword = await hashPassword(password);

        // Create the user in the database and also return the user
        const user = await pool.query({
            text: "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
            values: [username, email, hashedPassword],
        });

        // Hide the hashed password from the returned information
        user.rows[0].password = undefined;

        return res.status(201).json({
            status: "Success",
            message: "User created successfully",
            user,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: "Failed", message: err.message });
    }
};

export const signIn = async (req, res) => {
    try {
        // Destructure the data coming in from the request body object
        const { email, password } = req.body;
        // Check if the user exists in the database by email
        const result = await pool.query({
            text: "SELECT * FROM users WHERE email = $1",
            values: [email],
        });

        // Get the first result if there is a match found
        const user = result.rows[0];

        if (!user) {
            return res.status(404).json({
                status: "Failed",
                message: "Invalid email or password",
            });
        }

        // Check if the provided password is a match with the password belonging to the user in the database
        const isMatch = await comparePassword(password, user?.password);

        if (!isMatch) {
            return res.status(404).json({
                status: "Failed",
                message: "Invalid email or password",
            });
        }

        // Assign a session token to the user
        const token = createJWT(user.id);

        // Hide the hashed password from the returned information
        user.password = undefined;

        return res.status(200).json({
            status: "Success",
            message: "Logged in successfully",
            user,
            token,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: "Failed", message: err.message });
    }
};
