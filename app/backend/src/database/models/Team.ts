import { Model } from 'sequelize';
import { teamsAttributes } from './tableAttributes';
import db from './db';

class Team extends Model {
  id: number;
  teamName: string;
}

Team.init(
  {
    ...teamsAttributes,
  },
  {
    sequelize: db,
    tableName: 'teams',
    modelName: 'team',
    timestamps: false,
  },
);

export default Team;
