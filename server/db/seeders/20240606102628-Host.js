"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Hosts",
      [
        {
          name: "Isabella Gonzalez",
          email: "isabella@email.com",
          password: "1",
        },
        {
          name: "Jacob Diaz",
          email: "jacob@email.com",
          password: "1",
        },
        {
          name: "Sophia Ramirez",
          email: "sophia@email.com",
          password: "1",
        },
        {
          name: "William Morales",
          email: "william@email.com",
          password: "1",
        },
        {
          name: "Mia Flores",
          email: "mia@email.com",
          password: "1",
        },
        {
          name: "Alexander Reyes",
          email: "alexander@email.com",
          password: "1",
        },
        {
          name: "Emma Castillo",
          email: "emma@email.com",
          password: "1",
        },
        {
          name: "Benjamin Gutierrez",
          email: "benjamin@email.com",
          password: "1",
        },
        {
          name: "Abigail Jimenez",
          email: "abigail@email.com",
          password: "1",
        },
        {
          name: "Lucas Rojas",
          email: "lucas@email.com",
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
