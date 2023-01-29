const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const Tikets = db.define(
  "tikets",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    costo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    codigoVuelo: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "codigo_vuelo"
    },
    numeroRecerva: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "numero_recerva"
    },
    idPersona: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "id_persona"
    },
  }
);

module.exports = Tikets;
