const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const Recervas = db.define(
  "recervas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tipoVuelo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: "tipo_vuelo"
    },
    idPaisOrigen: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "id_pais_origen"
    },
    idPaisDestino: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "id_pais_destino"
    },
    salida: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    regreso: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    adultos: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    niños: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    bebes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }
);

module.exports = Recervas;

