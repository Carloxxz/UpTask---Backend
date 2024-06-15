import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db"
import cors from "cors"
import morgan from "morgan"
import { corsConfig } from "./config/cors"
import projectRoutes from "./routes/projectRoutes"
import authRoutes from "./routes/authRoutes"

dotenv.config()

connectDB()

const app = express()
app.use(cors(corsConfig))

// Leer datos de formularios
app.use(express.json())

// Login
app.use(morgan('dev'))

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/projects', projectRoutes)

export default app