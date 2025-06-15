import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


export const protectRoute = async(req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(400).json({ message: "Unauthroized - No Token Provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(!decoded) {
            return res.status(401).json({ message: "Unauthorized - Invalid Token"});
        }

        if (!user) {
            return res.status(404).json({message: "User not found"});
        }
    } catch (error) {

    }
}