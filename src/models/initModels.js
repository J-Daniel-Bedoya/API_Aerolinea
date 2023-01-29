const { Paises, Personas, Recervas, Tarifas, Tikets } = require("./index");

const initModels = () => {

  Recervas.belongsTo(Paises, { as: "recerva_paisOrigen", foreignKey: "id_pais_origen" });
  Paises.hasMany(Recervas, { as: "paisOrigen", foreignKey: "id_pais_origen" });

  Recervas.belongsTo(Paises, { as: "recerva_paisDestino", foreignKey: "id_pais_destino" });
  Paises.hasMany(Recervas, { as: "paisDestino", foreignKey: "id_pais_destino" });


  Personas.belongsTo(Paises, {as: "pais_recidencia", foreignKey: "id_pais_recidencia"});
  Paises.hasMany(Personas, {as: "recidencia", foreignKey: "id_pais_recidencia"});

  Tikets.belongsTo(Personas, {as: "tiket_persona", foreignKey: "persona_id"});
  Personas.hasMany(Tikets, {as: "persona", foreignKey: "persona_id"});

  Tarifas.belongsTo(Tikets, { as: "tiket_tarifa", foreignKey: "tarifa_id" });
  Tikets.hasMany(Tarifas, { as: "tarifa", foreignKey: "tarifa_id" });

};

module.exports = initModels;