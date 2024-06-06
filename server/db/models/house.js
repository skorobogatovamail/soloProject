"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class House extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Host }) {
      this.belongsTo(Host, { foreignKey: "hostId" });
    }
  }
  House.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.TEXT,
      lat: DataTypes.STRING,
      lon: DataTypes.STRING,
      hostId: DataTypes.INTEGER,
      booked: DataTypes.BOOLEAN,
      img: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "House",
    }
  );
  return House;
};
