import JWT from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    // Check if the auth token exists
    const authHeader = req?.headers?.authorization;

    if (!authHeader || !authHeader?.startsWith("Bearer")) {
        return res.status(401).json({
            status: "Auth failed",
            message: "Authentication failed",
        });
    }

    /**
     * Split because the information comes as eg. Bearer agjhfgahsddasdghkb
     * Then take the value at index 1
     * */
    const token = authHeader?.split(" ")[1];

    try {
        // Verify the token by attaching the user id to it
        const userToken = JWT.verify(
            token,
            process.env.JWT_SECRET
        );

        req.body.user = {
            userId: userToken.userId,
        };

        // Proceed to next middleware
        next();
    } catch (err) {
        console.log(err);
        return res
            .status(401)
            .json({ status: "Auth failed", message: "Authentication failed" });
    }
};

export default authMiddleware;
