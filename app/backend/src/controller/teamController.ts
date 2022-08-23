import { Response, Request, NextFunction } from 'express';
import runSchema from '../errors/utils/runSchema';
import teamService from '../service/teamService';

class TeamController {
  static async findAll(
    _req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response<string>> {
    const response = await teamService.findAll();

    return res.status(200).json(response);
  }

  static async byId(
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response<string>> {
    const team: { id: number } = await runSchema('teamById', { ...req.params });
    const response = await teamService.byId(team.id);

    return res.status(200).json(response);
  }
}

export default TeamController;
