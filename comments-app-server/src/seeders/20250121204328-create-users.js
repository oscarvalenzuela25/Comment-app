'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'amyrobson',
        password: 'password123',
        avatar: 'image-amyrobson.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'maxblagun',
        password: 'password123',
        avatar: 'image-maxblagun.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'ramsesmiron',
        password: 'password123',
        avatar: 'image-ramsesmiron.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'juliusomo',
        password: 'password123',
        avatar: 'image-juliusomo.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
