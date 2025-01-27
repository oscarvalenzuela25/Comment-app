'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    const usersQuery = `SELECT * FROM Users WHERE username in ('ramsesmiron', 'juliusomo')`;
    const [users] = await queryInterface.sequelize.query(usersQuery);

    const ramsesmiron = users.find(user => user.username === 'ramsesmiron');
    const juliusomo = users.find(user => user.username === 'juliusomo');

    const comment = `SELECT * FROM Comments WHERE score = 5`;
    const [[commentSelected]] = await queryInterface.sequelize.query(comment);

    await queryInterface.bulkInsert('Replies', [
      {
        commentId: commentSelected.id,
        userId: ramsesmiron.id,
        content:
          "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
        score: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        commentId: commentSelected.id,
        userId: juliusomo.id,
        content:
          "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
        score: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Replies', null, {});
  },
};
