const {
  readPais,
  createPais,
  deletePais,
} = require("./paises.controllers");

const {
  readPersonas,
  readPersona,
  createPersona,
  updatePersona,
  deletePersona,
} = require("./personas.controllers");

const {
  readRecervas,
  readRecerva,
  createRecerva,
  updateRecerva,
  deleteRecerva,
} = require("./recervas.controllers");

const {
  readTarifa,
  createTarifa,
  updateTarifa,
  deleteTarifa,
} = require("./tarifas.controllers");

const {
  readTikets,
  readTiket,
  createTiket,
  updateTiket,
  deleteTiket,
} = require("./tikets.controllers");

module.exports = {
  readPais,
  createPais,
  deletePais,
  readPersonas,
  readPersona,

  createPersona,
  updatePersona,
  deletePersona,

  readRecervas,
  readRecerva,
  createRecerva,
  updateRecerva,
  deleteRecerva,

  readTarifa,
  createTarifa,
  updateTarifa,
  deleteTarifa,

  readTikets,
  readTiket,
  createTiket,
  updateTiket,
  deleteTiket,
}