import { Router } from 'express';
import { Token } from '../middlewares';
import matchController from '../controller/matchController';

const matchRouter = Router();

matchRouter
  .get('/', matchController.findAll)
  .patch('/:id/finish', matchController.finish)
  .patch('/:id', matchController.update)
  .use(Token.validateToken)
  .post('/', matchController.save);

export default matchRouter;
