const { Personas } = require("../models")


class PersonasServices {

  static async getPersonas() {
    try {
      const perosnas = await Personas.findAll()
      return perosnas;
    } catch (error) {
      throw(error)
    }
  }
  static async getPersona(id) {
    try {
      const persona = await Personas.findOne({
        where: { id }
      })
      return persona;
    } catch (error) {
      throw(error)
    }
  }
  static async postPersona(body) {
    try {
      const persona = await Personas.create(body);
      return persona;
    } catch (error) {
      throw(error)
    }
  }
  static async updatePersona(id, body) {
    try {
      const persona = await Personas.findOne({
        where: { id }
      })
      const result = await persona.update(body);
      return result;
    } catch (error) {
      throw(error)
    }
  }
  static async deletePersona(id) {
    try {
      const persona = await Personas.findOne({
        where: { id }
      });
      persona.destroy();
    } catch (error) {
      throw(error)
    }
  }
}

module.exports = PersonasServices;