import express from "express";
import { ChatRouter, FileUploadRotuer, LoginRouter, logoutRouter , SignupRouter } from "./routes/index.js";
import { configDotenv } from "dotenv";
import cors from  "cors";
import bodyParser from "body-parser";
import http from 'http';
import mongodb from "./utils/database.utils.js";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
import SearchRoute from "./routes/search.route.js";
// import redisConnection from './utils/redis.utils.js';

const app= express();
configDotenv('./.env');
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongodb(process.env.DATABASE);
// const redisConnectedUser= redisConnection();

//added basic use Authentication and Authorization page
app.use('/Login',LoginRouter);
app.use('/Register',SignupRouter);
app.use('/logout',logoutRouter);
//file uploading 
app.use('/upload',FileUploadRotuer);
//real time chat application
app.use('/chat', ChatRouter);
//search User
app.use('/search',SearchRoute);

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('A user connected');
});

server.listen(process.env.PORT || 8000 ,()=>{console.log("server started 8000");
})