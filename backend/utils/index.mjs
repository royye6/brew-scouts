import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

export const hashPassword = async (userValue) => {
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(userValue, salt);

    return hashedPassword;
};

export const comparePassword = async (userPassword, password) => {
    try {
        const isMatch = await bcrypt.compare(userPassword, password);

        return isMatch;
    } catch (err) {
        console.log(err);
    }
};

export const createJWT = (id) => {
    return JWT.sign({ userId: id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
};
