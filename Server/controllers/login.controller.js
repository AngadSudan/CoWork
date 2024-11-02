const loginController =(req,res)=>{
    console.log('post method called');
    
    const { email, password } = req.body;
    console.log(email, password);   
    
    //create a mongodb function  to check if the user exists and if the password is correct

    const storedData={email:'angadsudan453@gmail.com', password:'Pokemon@898'};

    if(email && email!==storedData.email){               //the email from mongodb response
        console.log('user entered',email, 'but email from database',storedData.email);
        res.send({"success":false, "response":"email not found"});
    }else if(password && password!==storedData.password){              //password from mongodb
        res.send({"success":false, "response":"password not found"});
    }else{
        res.status(200).send({"success":true,"response":"Login successful "});
    }

}

export default loginController;