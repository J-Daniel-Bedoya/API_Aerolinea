const { Paises } = require("../models")


class PaisesServices {

  static async getPais() {
    try {
      const pais = await Paises.findAll()
      return pais;
    } catch (error) {
      throw(error)
    }
  }
  static async postPais(body) {
    try {
      const pais = await Paises.create(body);
      return pais;
    } catch (error) {
      throw(error)
    }
  }
  static async deletePais(id) {
    try {
      const pais = await Paises.findOne({
        where: { id }
      });
      pais.destroy();
    } catch (error) {
      throw(error)
    }
  }
}

module.exports = PaisesServices;