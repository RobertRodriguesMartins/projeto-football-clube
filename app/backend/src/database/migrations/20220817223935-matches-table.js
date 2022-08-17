const { QueryInterface } = require('sequelize');
const { matchesAttributes: attributes } = require('./tableAttributes');

module.exports = {
  /**
   * @param {QueryInterface} queryInterface
   */
  up: async (queryInterface) => {
    return queryInterface.createTable('matches', {
      ...attributes,
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('matches');
  },
};
