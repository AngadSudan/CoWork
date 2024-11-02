import {Router} from 'express';
import loginController from '../controllers/login.controller.js';
const LoginRouter= Router();

LoginRouter.post('/',loginController);

export default LoginRouter;