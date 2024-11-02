import express from "express";
import { LoginRouter,SignupRouter } from "./routes/index.js";
import cors from  "cors";
import bodyParser from "body-parser";

const app= express();

app.use(cors({origin:'*'}));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//added basic use Authentication and Authorization page
app.use('/Login',LoginRouter);
app.use('/Register',SignupRouter);




app.listen(8000,()=>{console.log("server started");
})