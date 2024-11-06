import {Router} from 'express';
import {loginController} from '../controllers/login.controller.js';
import { configDotenv } from 'dotenv';
configDotenv();
const LoginRouter= Router();
LoginRouter.post('/',loginController);
export default LoginRouter;