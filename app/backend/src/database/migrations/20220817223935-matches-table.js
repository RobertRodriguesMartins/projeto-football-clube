const { QueryInterface, DataTypes } = require('sequelize');

module.exports = {
  /**
   * @param {QueryInterface} queryInterface
   */
  up: async (queryInterface) => {
    return queryInterface.createTable('matches', {
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
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('matches');
  },
};
