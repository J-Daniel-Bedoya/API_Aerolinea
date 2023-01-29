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
  readRecerva,
  createRecerva,
  updateRecerva,
  deleteRecerva,
} = require("./recervas.controllers");


module.exports = {
  readPais,
  createPais,
  deletePais,
  readPersonas,
  readPersona,
  createPersona,
  updatePersona,
  deletePersona,
  readRecerva,
  createRecerva,
  updateRecerva,
  deleteRecerva,
}