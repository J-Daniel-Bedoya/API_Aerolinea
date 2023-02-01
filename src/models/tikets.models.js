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
    idCosto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "id_costo"
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
    idPersonas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "id_personas"
    },
  }
);

module.exports = Tikets;
