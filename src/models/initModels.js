const { Paises, Personas, Recervas, Tarifas, Tikets } = require("./index");

const initModels = () => {

  Tikets.belongsTo(Personas, {as: "persona", foreignKey: "id_personas"});
  Personas.hasMany(Tikets, {as: "tiket_persona", foreignKey: "id_personas"});

  Tikets.belongsTo(Tarifas, { as: "tiket_tarifa", foreignKey: "id_costo" });
  Tarifas.hasMany(Tikets, { as: "tarifas", foreignKey: "id_costo" });

};

module.exports = initModels;