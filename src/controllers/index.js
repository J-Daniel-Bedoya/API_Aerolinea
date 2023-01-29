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
module.exports = {
  readPais,
  createPais,
  deletePais,
  readPersonas,
  readPersona,
  createPersona,
  updatePersona,
  deletePersona,
}