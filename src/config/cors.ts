import { CorsOptions } from "cors";

export const corsConfig: CorsOptions = {
    origin: (origin, callback) => {
        const whiteList = [process.env.FRONTEND_URL]
        if (whiteList.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Error CORS'))
        }
    }
}