//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"

import express from "express"
import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"
import connectDB from "./db/index.js"

const app=express()
dotenv.config({
    path:'./env'
})

connectDB().then(
    ()=>{
        app.listen(process.env.PORT || 8000,()=>{
            console.log(`server running at port ${process.env.PORT}`)
        })
    }
).catch((err)=>{
    console.log("mongodb connection failed !!",err)
})

// ;( async ()=>{
// try {
    
//    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//    app.on("error",(error)=>{
//      console.log("error",error);
//      throw error    
//    })

//    app.listen(process.env.PORT,()=>{
//     console.log(`app is listening on port ${process.env.PORT}`)
//    })

// } catch (error) {
//     console.error("error",error)
//     throw error
// }
// })()


