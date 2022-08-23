import Team from '../database/models/Team';
import { ITeam } from '../database/models/interfaces';
import { NotFound } from '../errors';

class TeamService {
  static async findAll(): Promise<ITeam[]> {
    const rawResponse = await Team.findAll({
      raw: true,
    });

    return rawResponse as ITeam[];
  }

  static async byId(teamId: number): Promise<ITeam> {
    const rawResponse = await Team.findOne({
      raw: true,
      where: {
        id: teamId,
      },
    });

    if (!rawResponse) throw new NotFound('Team');

    return rawResponse as ITeam;
  }
}

export default TeamService;
