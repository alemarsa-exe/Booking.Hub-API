//Libraries
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import cors from "cors"

//Routes
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import calendarsRoute from "./routes/calendars.js"
import resourcesRoute from "./routes/resources.js"
import labsRoute from "./routes/labs.js"
import devicesRoute from "./routes/devices.js"
import softwareRoute from "./routes/softwares.js"
import reservationRoute from "./routes/reservations.js"
import allRoute from "./routes/all.js"

const app = express()
dotenv.config()

const port = 8800

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!")
})

//Middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/calendars", calendarsRoute)
app.use("/api/resources", resourcesRoute)
app.use("/api/labs", labsRoute)
app.use("/api/users", usersRoute)
app.use("/api/devices", devicesRoute)
app.use("/api/software", softwareRoute)
app.use("/api/reservation", reservationRoute)
app.use("/api/all", allRoute)

//Error handler   || el next es necesario porque sino, no funciona
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message:errorMessage,
        stack: err.stack,
    })
})



app.get("/", (req, res)=>{
    res.send("Hello, first request")
})


app.listen(port, function (error) {
    
    if (error) {
        console.log("Something went wrong", error)
    }

    else {
        connect()
        console.log(`Server is listening on ${port}.`)
    }
})