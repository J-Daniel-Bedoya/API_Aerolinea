const { Recervas } = require("../models")


class RecervasServices {

  static async getRecerva(id) {
    try {
      const recerva = await Recervas.findOne({
        where: { id }
      })
      return recerva;
    } catch (error) {
      throw(error)
    }
  }
  static async postRecerva(body) {
    try {
      const recerva = await Recervas.create(body);
      return recerva;
    } catch (error) {
      throw(error)
    }
  }
  static async updateRecerva(id, body) {
    try {
      const recerva = await Recervas.findOne({
        where: { id }
      })
      const result = await recerva.update(body);
      return result;
    } catch (error) {
      throw(error)
    }
  }
  static async deleteRecerva(id) {
    try {
      const recerva = await Recervas.findOne({
        where: { id }
      });
      recerva.destroy();
    } catch (error) {
      throw(error)
    }
  }
}

module.exports = RecervasServices;