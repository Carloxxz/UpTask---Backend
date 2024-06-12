import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db"
import router from "./routes/projectRoutes"
import cors from "cors"
import morgan from "morgan"
import { corsConfig } from "./config/cors"

dotenv.config()

connectDB()

const app = express()
app.use(cors(corsConfig))

// Leer datos de formularios
app.use(express.json())

// Login
app.use(morgan('dev'))

// Routes
app.use('/api/projects', router)

export default app