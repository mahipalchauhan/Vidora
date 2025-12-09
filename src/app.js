import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

// app.use(cors({
//     origin:process.env.CORS_ORIGIN,
//     credentials:true
// }))
app.use(cookieParser())

//route import 
import userRouter from "./routes/user_routes.js"

//router declaration
app.use("/api/v1/users",userRouter)

// https://localhost:8000/api/v1/users/registerUser


export {app}