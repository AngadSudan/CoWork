import chat from "../models/Chat.models.js";
import User from "../models/user.models.js";
async function  getUserChat(req,res){
    const getuser= await User.findOne({username :req.params.id}).select("_id"); 
    const user= req.cookies.AccessToken.id;
    if(getuser===null || getuser===undefined){
        res.status(459).send('User doesn"t exists');
    }    
      const messages= await chat.find(
        {
            sender:{ $in: [user, getuser._id]},
            reciever:{ $in: [[user], [getuser._id]]}
        }
    )
    res.send(messages);
}

async function sendUserChat(req,res){
    const {message}= req.body;
    
    const user= await User.findOne({username:req.params.id}).select('_id email');
    if(user===null){
        res.send('no such user found');
    }
    const saveMessage= await chat.create({message, sender: req.cookies.AccessToken.id, reciever: user._id});
    if (saveMessage!==null){
        res.send({message, sender: req.cookies.AccessToken.id, reciever: req.params.id});
    }else{
        res.send('error in saving message to db');
    }
}

export {getUserChat, sendUserChat};