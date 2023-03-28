"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "trips",
      [
        {
          fromStation: 1,
          toStation: 2,
          startTime: "2021-06-13 08:30:00",
          price: 200000,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
        },
        {
          fromStation: 3,
          toStation: 4,
          startTime: "2021-06-13 08:30:00",
          price: 250000,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
        },
        {
          fromStation: 1,
          toStation: 4,
          startTime: "2021-06-13 08:30:00",
          price: 300000,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("trips", null, {});
  },
};
