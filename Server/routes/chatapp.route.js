import { Router } from "express";
import {getUserChat, sendUserChat} from '../controllers/chat.controller.js';
const ChatRouter= Router();

ChatRouter.get('/:id',getUserChat );

ChatRouter.post('/:id',sendUserChat);

export default ChatRouter;