const { Tarifas } = require("../models")


class TarifasServices {

  static async getTarifa(id) {
    try {
      const tarifa = await Tarifas.findOne({
        where: { id }
      })
      return tarifa;
    } catch (error) {
      throw(error)
    }
  }
  static async postTarifa(body) {
    try {
      const tarifa = await Tarifas.create(body);
      return tarifa;
    } catch (error) {
      throw(error)
    }
  }
  static async updateTarifa(id, body) {
    try {
      const tarifa = await Tarifas.findOne({
        where: { id }
      })
      const result = await tarifa.update(body);
      return result;
    } catch (error) {
      throw(error)
    }
  }
  static async deleteTarifa(id) {
    try {
      const tarifa = await Tarifas.findOne({
        where: { id }
      });
      tarifa.destroy();
    } catch (error) {
      throw(error)
    }
  }
}

module.exports = TarifasServices;