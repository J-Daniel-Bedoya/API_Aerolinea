const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const Tarifas = db.define(
  "tarifas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tarifaBase: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "tarifa_base"
    },
    equipaje: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }
);

module.exports = Tarifas;
