const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const Personas = db.define(
  "personas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recidencia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    puesto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{
    timestamps: false
  }
);

module.exports = Personas;
