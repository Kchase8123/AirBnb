'use strict';

const { Spot } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Spots', [
        {
          ownerId: 1,
          address: '123 Main St',
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
          lat: 37.7749,
          lng: -122.4194,
          name: 'Cozy Apartment',
          description: 'A nice and cozy apartment in SF.',
          price: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ownerId: 2,
          address: '456 Elm St',
          city: 'Los Angeles',
          state: 'CA',
          country: 'USA',
          lat: 34.0522,
          lng: -118.2437,
          name: 'Luxury Condo',
          description: 'A luxurious condo in LA.',
          price: 200,
          createdAt: new Date(),
          updatedAt: new Date()
        }])
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      ownerId: { [Op.in]: [1, 2] }
    }, {});
  }
};
