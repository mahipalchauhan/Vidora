import mongoose from "mongoose";

const videoSchema=new Schema({
     videoFile:{
        type:String,  //cloudinary url
        require:true
     },
     thumbnail:{
        type:String, //cloudinary url
        require:true,
     },
     title:{
        type:String,
        require:true,
     },
     description:{
        type:String,
        require:true
     },
     duration:{
        type:Number, //cloudinary url
        require:true,
     },


   },
{timestamps:true}
)

export const Video=mongoose.model("Video",videoSchema)