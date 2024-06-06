"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, House }) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.belongsTo(House, { foreignKey: "hostId" });
    }
  }
  Booking.init(
    {
      userId: DataTypes.INTEGER,
      houseId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
