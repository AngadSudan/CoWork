import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { configDotenv } from 'dotenv';
configDotenv();
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        index:true
    },
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        unique:true,
        sparse:true
    },RefreshToken:{
        type:String, 
    },Avatar:{
        type:String,  //cloudinary url
        default:""
        
    }
},{timestamps:true});

userSchema.pre('save',async function (next){
    if(!this.isModified('password')) return next();
    this.password= await bcrypt.hash(this.password,10);
    next();
})
userSchema.methods.isPasswordCorrect= async function(password){
    const encryptpassword= await bcrypt.compare(password,this.password);
    return encryptpassword;
}
userSchema.methods.generateAccessToken= function(){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username   
        },process.env.JWT_SECRET_KEY,
        {
            expiresIn: process.env.JWT_TOKEN_EXPIRY
        }
    )

}
userSchema.methods.generateRefreshToken= function(){
    return jwt.sign(
        {
            _id:this.id
        }, process.env.JWT_SECRET_KEY,
        {
            expiresIn: process.env.JWT_TOKEN_EXPIRY
        }
    )
}
const User= mongoose.model('User',userSchema);
export default User;
