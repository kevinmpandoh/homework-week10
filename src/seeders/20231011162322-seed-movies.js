'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Movies', [{
      title: 'Naruto',
      genres: "Action",
      year: "2001",
    },
    {
      title: 'One Piece',
      genres: "Kartun",
      year: "1999",
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
