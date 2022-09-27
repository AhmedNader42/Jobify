import express from "express"
import dotenv from "dotenv"
const app = express()
dotenv.config()
import "express-async-errors"
// DB and auth
import connectDB from "./db/connect.js"
import authRoutes from "./routes/authRoutes.js"
import jobsRoutes from "./routes/jobsRoutes.js"

// Middleware
import notFoundMiddleware from "./middleware/not-found.js"
import errorHandlerMiddleware from "./middleware/error-handler.js"
import morgan from "morgan"

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"))
}
// Parses incoming requests with JSON payload
app.use(express.json())

// Main route
// TODO: Remove or set to home
app.get("/", (req, res) => {
  res.send("Welcome!")
})

// Available routes
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/jobs", jobsRoutes)
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.port || 5000

// Connect to the database. If connection can't be established then abort
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () =>
      console.log(`Server listening on  http://localhost:${port}`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
