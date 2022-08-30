import { Response, Request, NextFunction } from 'express';
import teamService from '../service/teamService';
import runSchema from '../errors/utils/runSchema';
import matchService from '../service/matchService';
import { DuplicatedMatchTeam, MatchAlreadyDone } from '../errors';

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
    const { user, ...bodyWithoutUser } = req.body;
    const newMatch = await runSchema('matchSave', bodyWithoutUser);
    const teamsId: number[] = await teamService.findMatchTeamsById(newMatch);
    if (teamsId[0] === teamsId[1]) throw new DuplicatedMatchTeam();
    const response = await matchService.save(newMatch);

    return res.status(201).json(response);
  }

  static async finish(
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response<string>> {
    const match: { id: number } = await runSchema('matchFinish', {
      ...req.params,
    });
    await matchService.finish(match.id);

    return res.status(200).json({ message: 'Finished' });
  }

  static async update(
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response<string>> {
    const match: { id: number } = await runSchema('matchFinish', {
      ...req.params,
    });

    const matchScore = await runSchema('matchUpdate', { ...req.body });
    const { inProgress } = await matchService.findOne(match.id);
    if (!inProgress) throw new MatchAlreadyDone();
    await matchService.update(matchScore, match.id);

    return res.status(200).json({ message: 'Match information updated!' });
  }
}

export default MatchController;
