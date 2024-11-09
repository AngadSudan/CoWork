import express from "express";
import { FileUploadRotuer, LoginRouter, logoutRouter , SignupRouter } from "./routes/index.js";
import { configDotenv } from "dotenv";
import cors from  "cors";
import bodyParser from "body-parser";
import http from 'http';
import mongodb from "./utils/database.utils.js";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";

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
app.use('/upload',FileUploadRotuer);

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: process.env.CORS,
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('A user connected');
});

server.listen(process.env.PORT || 8000 ,()=>{console.log("server started"+process.env.PORT);
})