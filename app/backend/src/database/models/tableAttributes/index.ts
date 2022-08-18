import { ModelAttributes, DataTypes } from 'sequelize';

const teamsAttributes: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'team_name',
  },
};

const userAttributes: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const matchesAttributes: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeam: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team',
    references: {
      key: 'id',
      model: 'teams',
    },
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_goals',
  },
  awayTeam: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team',
    references: {
      key: 'id',
      model: 'teams',
    },
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team_goals',
  },
  inProgress: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: '0',
    field: 'in_progress',
  },

};

export {
  teamsAttributes,
  userAttributes,
  matchesAttributes,
};
