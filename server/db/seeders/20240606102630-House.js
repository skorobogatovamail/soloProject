"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Houses",
      [
        {
          name: "Apartment at the Sea",
          address: "Rua António Maria Cardoso, 26, Lisboa",
          lat: "38.708594",
          lon: "-9.142388",
          hostId: 1,
          booked: false,
          img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/520236265.jpg?k=8da2c4299980f665ca16219710dda3ac1579e84485485e2beb57768efdb80fe5&o=&hp=1",
        },
        {
          name: "Beachside Bungalow",
          address: "Rua do Comércio, 12, Lisboa",
          lat: "38.707234",
          lon: "-9.141234",
          hostId: 2,
          booked: false,
          img: "https://www.redfin.com/blog/wp-content/uploads/2022/09/spacejoy-xkJ2_THgKmk-unsplash.jpg",
        },
        {
          name: "Coastal Cottage",
          address: "Rua da Misericórdia, 34, Lisboa",
          lat: "38.706234",
          lon: "-9.140234",
          hostId: 3,
          booked: false,
        },
        {
          name: "Seafront Apartment",
          address: "Rua do Arsenal, 18, Lisboa",
          lat: "38.705234",
          lon: "-9.139234",
          hostId: 3,
          booked: false,
        },
        {
          name: "Oceanview Villa",
          address: "Rua do Tejo, 42, Lisboa",
          lat: "38.704234",
          lon: "-9.138234",
          hostId: 4,
          booked: false,
        },
        {
          name: "Beachside House",
          address: "Rua do Funchal, 50, Lisboa",
          lat: "38.703234",
          lon: "-9.137234",
          hostId: 2,
          booked: false,
        },
        {
          name: "Coastal Condo",
          address: "Rua do Porto, 68, Lisboa",
          lat: "38.702234",
          lon: "-9.136234",
          hostId: 1,
          booked: false,
        },
        {
          name: "Seafront Studio",
          address: "Rua do Tejo, 86, Lisboa",
          lat: "38.701234",
          lon: "-9.135234",
          hostId: 1,
          booked: false,
        },
        {
          name: "Oceanview Cottage",
          address: "Rua do Arsenal, 104, Lisboa",
          lat: "38.700234",
          lon: "-9.134234",
          hostId: 2,
          booked: false,
        },
        {
          name: "Beachside Apartment",
          address: "Rua do Comércio, 122, Lisboa",
          lat: "38.699234",
          lon: "-9.133234",
          hostId: 5,
          booked: false,
        },
        {
          name: "Coastal Bungalow",
          address: "Rua da Misericórdia, 140, Lisboa",
          lat: "38.698234",
          lon: "-9.132234",
          hostId: 4,
          booked: false,
          img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/455613071.jpg?k=680a0f6fab928725bbb5ece932800731883b705a355331386c3ea12f5e6c10be&o=&hp=1",
        },
        {
          name: "Seafront House",
          address: "Rua do Funchal, 158, Lisboa",
          lat: "38.697234",
          lon: "-9.131234",
          hostId: 5,
          booked: false,
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
