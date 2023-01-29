const { Paises, Personas, Recervas, Tarifas, Tikets } = require("./index");

const initModels = () => {

  Recervas.belongsTo(Paises, { as: "recerva_paisOrigen", foreignKey: "paisOrigen_id" });
  Paises.hasMany(Recervas, { as: "paisOrigen", foreignKey: "paisOrigen_id" });

  Recervas.belongsTo(Paises, { as: "recerva_paisDestino", foreignKey: "paisDestino_id" });
  Paises.hasMany(Recervas, { as: "paisDestino", foreignKey: "paisDestino_id" });


  Personas.belongsTo(Tikets, {as: "tiket_persona", foreignKey: "persona_id"});
  Tikets.hasMany(Personas, {as: "perosnas", foreignKey: "persona_id"});

  Tarifas.belongsTo(Tikets, { as: "tiket_tarifa", foreignKey: "tarifa_id" });
  Tikets.hasMany(Tarifas, { as: "tarifa", foreignKey: "tarifa_id" });

};

module.exports = initModels;