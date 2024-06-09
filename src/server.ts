import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db"
import router from "./routes/projectRoutes"

dotenv.config()

connectDB()

const app = express()
app.use(express.json())

// Routes
app.use('/api/projects', router)

export default app