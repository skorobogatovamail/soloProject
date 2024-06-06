"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Kate Smith",
          email: "kate@email.com",
          password: "1",
        },
        {
          name: "John Doe",
          email: "john@email.com",
          password: "1",
        },
        {
          name: "Sarah Lee",
          email: "sarah@email.com",
          password: "1",
        },
        {
          name: "Michael Johnson",
          email: "michael@email.com",
          password: "1",
        },
        {
          name: "Emily Davis",
          email: "emily@email.com",
          password: "1",
        },
        {
          name: "David Wilson",
          email: "david@email.com",
          password: "1",
        },
        {
          name: "Jessica Anderson",
          email: "jessica@email.com",
          password: "1",
        },
        {
          name: "Christopher Thompson",
          email: "christopher@email.com",
          password: "1",
        },
        {
          name: "Olivia Martinez",
          email: "olivia@email.com",
          password: "1",
        },
        {
          name: "Daniel Hernandez",
          email: "daniel@email.com",
          password: "1",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
