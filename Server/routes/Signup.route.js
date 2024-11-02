import express from 'express';

const SignupRouter= express.Router();

SignupRouter.post('/',(req,res)=>{
    const { email, password } = req.body;
    
    res.status(200).send(`Email is: ${email}, Password is: ${password}`);
}).get('/',(req,res)=>{
    console.log('tried to acess the signup page');
    res.send('work is done');
})

export default SignupRouter;