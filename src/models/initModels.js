const { Paises, Personas, Recervas, Tarifas, Tikets } = require("./index");

const initModels = () => {

  Recervas.belongsTo(Paises, { as: "recerva_paisOrigen", foreignKey: "id_pais_origen" });
  Paises.hasMany(Recervas, { as: "paisOrigen", foreignKey: "id_pais_origen" });

  Recervas.belongsTo(Paises, { as: "recerva_paisDestino", foreignKey: "id_pais_destino" });
  Paises.hasMany(Recervas, { as: "paisDestino", foreignKey: "id_pais_destino" });


  Personas.belongsTo(Paises, {as: "pais_recidencia", foreignKey: "id_pais_recidencia"});
  Paises.hasMany(Personas, {as: "recidencia", foreignKey: "id_pais_recidencia"});

  Tikets.belongsTo(Personas, {as: "persona", foreignKey: "id_personas"});
  Personas.hasMany(Tikets, {as: "tiket_persona", foreignKey: "id_personas"});

  Tikets.belongsTo(Tarifas, { as: "tiket_tarifa", foreignKey: "id_costo" });
  Tarifas.hasMany(Tikets, { as: "tarifas", foreignKey: "id_costo" });

};

module.exports = initModels;