const { QueryInterface } = require('sequelize');
const { teamsAttributes: attributes } = require('./tableAttributes');

module.exports = {
  /**
   * @param {QueryInterface} queryInterface
   */
  up: async (queryInterface) => {
    return queryInterface.createTable('teams', {
      ...attributes,
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('teams');
  },
};
