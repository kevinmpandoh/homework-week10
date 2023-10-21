'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      email: "kevinmpandoh@gmail.com",
      gender: "Male",
      password: "mc465800",
      role: "Admin",
    },
    {
      email: "mesiasi@gmail.com",
      gender: "Female",
      password: "sasi123",
      role: "Pegawai",      
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
