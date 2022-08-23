import { Router } from 'express';
import teamController from '../controller/teamController';

const teamRouter = Router();

teamRouter.get('/', teamController.findAll)
  .get('/:id', teamController.byId);

export default teamRouter;
