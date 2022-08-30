import { Response, Request, NextFunction } from 'express';
import boardService from '../service/boardService';

class boardController {
  static async leaders(
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response<string>> {
    const response = await boardService.getHomeLeaderBoard();
    return res.status(200).json(response);
  }
}

export default boardController;
