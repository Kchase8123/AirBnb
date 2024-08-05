'use strict';

const { Image } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images', [
      {
        url: 'https://example.com/image1.jpg',
        preview: true,
        imageableId: 1,
        imageableType: 'spot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://example.com/image2.jpg',
        preview: false,
        imageableId: 1,
        imageableType: 'spot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://example.com/image3.jpg',
        preview: true,
        imageableId: 2,
        imageableType: 'spot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Images';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      url: { [Op.in]: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg', 'https://example.com/image3.jpg'] }
    }, {});
  }
};
