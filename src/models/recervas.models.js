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
    salida: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    regreso: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // personas: {
    //   type: DataTypes.ARRAY(DataTypes.INTEGER),
    //   allowNull: false,
    // },
  }
);

module.exports = Recervas;

