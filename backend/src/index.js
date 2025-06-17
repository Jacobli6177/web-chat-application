import express from "express"
import dotenv from "dotenv"
import authRoutes from "../src/routes/auth.route.js"
import authRoutes from "../src/routes/message.route.js"

import connectDB from '../src/lib/db.js'
import cookieParser from "cookie-parser"
import { connectDB } from "../src/lib/db.js"

dotenv.config()

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser);

app.use("/api/auth", authRoutes);
app.use("/api/auth", messageRoutes);


app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
    connectDB(); // <-- Now defined
})
