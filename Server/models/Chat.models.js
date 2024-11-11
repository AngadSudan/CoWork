import mongoose from "mongoose";

const chatSchema= new mongoose.Schema({
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        
    },
    groupChat:{
        type:Boolean,
        default:false
    },
    message:{
        type:String,
        default:"",
        required:true
    }, reciever:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"User",
        required:true
    }
}, {timestamps:true});

const chat= mongoose.model("Chat",chatSchema);
export default chat;