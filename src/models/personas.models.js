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
    nombres: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellidos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    paisRecidencia: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "pais_recidencia"
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{
    timestamps: false
  }
);

module.exports = Personas;
