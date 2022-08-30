import { Router } from 'express';
import boardController from '../controller/boardController';

const boardRouter = Router();

boardRouter
  .get('/home', boardController.leaders);

export default boardRouter;
