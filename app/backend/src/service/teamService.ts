import { Model } from 'sequelize';
import Team from '../database/models/Team';
import { IMatch, ITeam } from '../database/models/interfaces';
import { InvalidTeam, NotFound } from '../errors';

class TeamService {
  static async findAll(): Promise<ITeam[]> {
    const rawResponse = await Team.findAll({
      raw: true,
    });

    return rawResponse as ITeam[];
  }

  static async findMatchTeamsById(
    matchTeams: Pick<IMatch, 'homeTeam' | 'awayTeam'>,
  ): Promise<number[]> {
    const teamsId: number[] = [matchTeams.homeTeam, matchTeams.awayTeam];
    const teamsData: Promise<Model<Team> | null>[] = [];
    teamsId.forEach((teamId) => {
      const findTeam = Team.findOne({
        where: {
          id: teamId,
        },
      });

      teamsData.push(findTeam);
    });

    const response = await Promise.all(teamsData);
    if (response.includes(null)) throw new InvalidTeam();
    return teamsId;
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
