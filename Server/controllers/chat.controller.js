import redisConnectedUser from "../utils/redis.utils.js";
import chat from "../models/Chat.models.js";
import User from "../models/user.models.js";
async function  getUserChat(req,res){
    const getuser= await User.findOne({username :req.params.id}).select("_id"); 
    // const user= req.cookies.AccessToken.id;
    const user= await User.findOne({username:'angad'}).select('_id');
    if(getuser===null || getuser===undefined){
        res.status(459).send('User doesn"t exists');
}    
    const Cachemessages= await redisConnectedUser.get('chat:Akshat');
    if(Cachemessages){
        res.send(JSON.parse(Cachemessages));
    }else{
        const messages= await chat.find(
            {
                sender:{ $in: [user, getuser._id]},
                reciever:{ $in: [user, getuser._id]}
            }
        ).select('sender groupChat message reciever')
        const setcachemessage = await redisConnectedUser.set('chat:Akshat', JSON.stringify(messages), { EX: 1300 });
        res.send(messages);
    }
}

async function sendUserChat(req,res){
    const {message}= req.body;

    const user= await User.findOne({username:req.params.id}).select('_id email');
    if(user===null){
        res.send('no such user found');
    }
    const saveMessage= await chat.create({message, sender: req.cookies.AccessToken.id, reciever: user._id});
    // const cachekey= saveMessage.groupChat?`groupChat:${saveMessage.reciever.join('_')}`:`chat:${saveMessage.reciever[0]}`
    const cachekey= saveMessage.groupChat?'':'chat:Akshat';
    const cachedata= await redisConnectedUser.get(cachekey);
    const messages= cachedata? JSON.parse(cachedata):[];
    messages.push(saveMessage);

    const redissavedata= await redisConnectedUser.set(cachekey,JSON.stringify(messages), {EX:36000});

    if (redissavedata!==null){
        res.send({message, sender: req.cookies.AccessToken.id, reciever: req.params.id});
    }else{
        res.send('error in saving message to db');
    }
}

export {getUserChat, sendUserChat};