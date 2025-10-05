import { Router } from 'express';
import { userLogin, userLogout, userRegister } from '../controllers/user.controller';

const userRouter = Router();

userRouter.route('/login').post(userLogin);
userRouter.route('/signin').post(userRegister);
userRouter.route('/logout').post(userLogout);
