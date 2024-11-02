const SignupController = (req, res) => {
    console.log('post method called');
    
    const { email, password } = req.body;
    console.log(email, password);
    
    res.status(200).send(`Email is: ${email}, Password is: ${password}`);
}