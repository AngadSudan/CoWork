import User from '../models/user.models.js'
const searchUser= async (req,res)=>{
    const {username}= req.body;
    const users= await User.find({username}).select("_id email username");
    if(users.length!== 0){
        res.send(users);
    }else{
        res.send([{username:"No User Found"}]);
    }
}
export {
    searchUser
};