import express from 'express';
import { SignupController } from '../controllers/login.controller.js';
const SignupRouter= express.Router();

SignupRouter.post('/',SignupController)
.get('/',(req,res)=>{
    console.log('tried to acess the signup page');
    res.send('work is done');
})

export default SignupRouter;