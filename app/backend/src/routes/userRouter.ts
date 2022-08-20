import { Router } from 'express';
import userController from '../controller/userController';
import { Token } from '../middlewares';

const userRouter = Router();

userRouter.post('/', userController.login)
  .get('/validate', Token.validateToken, userController.validate);

export default userRouter;
