import express from "express";
import { LoginRouter, logoutRouter , SignupRouter } from "./routes/index.js";
import { configDotenv } from "dotenv";
import cors from  "cors";
import bodyParser from "body-parser";
import mongodb from "./utils/database.utils.js";
import cookieParser from "cookie-parser";

const app= express();
configDotenv('./.env');
app.use(cors({origin:process.env.CORS}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongodb(process.env.DATABASE);

//added basic use Authentication and Authorization page
app.use('/Login',LoginRouter);
app.use('/Register',SignupRouter);
app.use('/logout',logoutRouter);


app.listen(process.env.PORT || 8000 ,()=>{console.log("server started");
})