import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import connectDB from '../src/lib/db.js'
import cookieParser from "cookie-parser"

dotenv.config()

const app = express();

const PORT = process.env.PORT || 5001;

app.use("/api/auth", authRoutes);
app.use(cookieParser);

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
    connectDB(); // <-- Now defined
})
