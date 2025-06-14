import bcrypt from "bcryptjs";
import { generateToken } from "../lib/utils";
import User from "../models/user.model";

export const signup = async (req, res) => {
    const { fullName, email, password } = req.body;
    try {

        if(!fullname || !email || !password) {
            return res.status(400).json({ message: "All field are required" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        generateToken(newUser._id, res); 

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            email: newUser.email,
            profile: newUser.profilePic,
        });

    } catch (error) {
        console.error("Error in signup controller:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
