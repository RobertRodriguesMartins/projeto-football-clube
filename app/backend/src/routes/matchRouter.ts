import { Router } from 'express';
import { Token } from '../middlewares';
import matchController from '../controller/matchController';

const matchRouter = Router();

matchRouter
  .get('/', matchController.findAll)
  .use(Token.validateToken)
  .post('/', matchController.save);

export default matchRouter;
