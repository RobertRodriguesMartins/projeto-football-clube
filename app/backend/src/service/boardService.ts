import { QueryTypes } from 'sequelize';
import { IBoard } from '../database/models/interfaces';
import findHomeLeaderBoard from './utils/boardServiceUtils';
import db from '../database/models/db';

class BoardService {
  static async getHomeLeaderBoard(): Promise<IBoard[]> {
    const homeLeaderBoard = (await db.query(findHomeLeaderBoard, {
      type: QueryTypes.SELECT,
    })) as IBoard[];
    return homeLeaderBoard;
  }
}

export default BoardService;
