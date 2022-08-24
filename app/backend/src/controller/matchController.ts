import { Response, Request, NextFunction } from 'express';
import teamService from '../service/teamService';
import runSchema from '../errors/utils/runSchema';
import matchService from '../service/matchService';

class MatchController {
  static async findAll(
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response<string>> {
    const { inProgress }: { inProgress: boolean } = await runSchema(
      'matchFindByQuery',
      { ...req.query },
    );
    const response = inProgress !== undefined
      ? await matchService.findByQuery(inProgress)
      : await matchService.findAll();

    return res.status(200).json(response);
  }

  static async save(
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response<string>> {
    const newMatch = await runSchema('matchSave', { ...req.body });
    await teamService.findMatchTeamsById(newMatch);
    const response = await matchService.save(newMatch);

    return res.status(201).json(response);
  }
}

export default MatchController;
