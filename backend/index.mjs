import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import router from "./routes/index.mjs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors("*"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.use("*", (req, res) => {
    return res.status(404).json({
        status: "404 Not Found",
        message: "Route not found",
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
