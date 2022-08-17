const { QueryInterface } = require('sequelize');
const { userAttributes: attributes } = require('./tableAttributes');
('use strict');

module.exports = {
  /**
   * @param {QueryInterface} queryInterface
   */
  up: async (queryInterface) => {
    return queryInterface.createTable('users', {
      ...attributes,
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('users');
  },
};
