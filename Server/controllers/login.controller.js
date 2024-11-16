import User from "../models/user.models.js";
import generateAccessAndRefreshToken from "../utils/Tokens.utils.js";
const loginController =async (req,res)=>{
    const { email, password } = req.body; 

    if(!email || !password){
        res.status(404).send('please enter some data');
    } 

    const storedData= await User.findOne({email});  
    if(!storedData){
        res.status(404).send('Please enter a registered email');
    }
    const DBpassword= await storedData.isPasswordCorrect(password,storedData.password);
    const AccessToken= await storedData.generateAccessToken();
    
    const cookieData= {AccessToken, id:storedData?._id,};
    if(storedData.email!==null && email!==storedData.email){        

        console.log('user entered',email, 'but email from database',storedData.email);
        res.send({"success":false, "response":"email not found"});
    
    }else if(DBpassword!==null && !DBpassword){              
        
        res.send({"success":false, "response":"password not found"});
    
    }else{
        res.cookie('AccessToken',cookieData, {
            httpOnly: true,
            secure: true,
        })
        res.status(200).send({"success":true,"response":"Login successful "});
    
    }
}
const SignupController = async (req, res) => {
    const { username,email,password } = req.body;

    if(username && email && password){
        const returnedUser = await User.create({username,email,password});
        try {  
            const {AccessToken,RefreshToken}= await generateAccessAndRefreshToken(returnedUser);
            await User.updateOne({email},{$set:{RefreshToken}});
            res.cookie('AccessToken',AccessToken, {
                httpOnly: true,
                secure: true,
            });
            console.log(returnedUser);
        } catch (error) {
            console.log(error);
            res.send('some internal error occured');
        }
        
        if(returnedUser){
            res.status(200).send(`Email is: ${email}, Password is: ${password}`);
        }else{
            res.status(414).send('user not created');
        }
    }else{
        res.status(444).send('missing information');
    }
}
const logoutController= async(req,res)=>{
    res.clearCookie('AccessToken', {
        httpOnly: true,
        secure: true,
    });
    res.status(200).json({ success: true, message: 'Logout successful' });
}
export { loginController, SignupController, logoutController };