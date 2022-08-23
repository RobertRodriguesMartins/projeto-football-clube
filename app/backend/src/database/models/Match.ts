import { Model } from 'sequelize';
import { matchesAttributes } from './tableAttributes';
import db from './db';

class Match extends Model {
  id: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: number;
}

Match.init(
  {
    ...matchesAttributes,
  },
  {
    sequelize: db,
    tableName: 'matches',
    modelName: 'match',
    timestamps: false,
  },
);

export default Match;
