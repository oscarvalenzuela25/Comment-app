'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    const usersQuery = `SELECT * FROM Users WHERE username in ('amyrobson', 'maxblagun')`;
    const [users] = await queryInterface.sequelize.query(usersQuery);

    const amyrobson = users.find(user => user.username === 'amyrobson');
    const maxblagun = users.find(user => user.username === 'maxblagun');

    await queryInterface.bulkInsert('Comments', [
      {
        userId: amyrobson.id,
        content:
          "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        score: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: maxblagun.id,
        content:
          "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        score: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
