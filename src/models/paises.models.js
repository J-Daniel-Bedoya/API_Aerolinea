const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const Paises = db.define(
  "paises",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{
    timestamps: false
  }
);

module.exports = Paises;