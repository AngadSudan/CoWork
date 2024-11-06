import express from 'express';
import { logoutController } from '../controllers/login.controller.js';

const logoutRouter = express.Router();
logoutRouter.get('/',logoutController)
export default logoutRouter;