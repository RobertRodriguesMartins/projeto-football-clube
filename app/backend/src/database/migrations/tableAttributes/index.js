const { ModelAttributes, DataTypes } = require('sequelize');

/**
 * @type {ModelAttributes}
 */
const teamsAttributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "team_name"
  }
};

/**
 * @type {ModelAttributes}
 */
const userAttributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
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

/**
 * @type {ModelAttributes}
 */
const matchesAttributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  homeTeam: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "home_team",
    references: {
      key: 'id',
      model: 'teams'
    }
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "home_team_goals"
  },
  awayTeam: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "away_team",
    references: {
      key: 'id',
      model: 'teams'
    }
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "away_team_goals"
  },
  inProgress: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: '0',
    field: 'in_progress'
  }
 
};

module.exports = {
  teamsAttributes,
  userAttributes,
  matchesAttributes
}