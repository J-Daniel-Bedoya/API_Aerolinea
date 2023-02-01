const { Tikets } = require("../models")


class TiketsServices {

  static async getTikets() {
    try {
      const tikets = await Tikets.findAll()
      return tikets;
    } catch (error) {
      throw(error)
    }
  }

  static async getTiket(id) {
    try {
      const tikets = await Tikets.findOne({
        where: { id }
      })
      return tikets;
    } catch (error) {
      throw(error)
    }
  }

  static async postTiket(body) {
    try {
      const tiket = await Tikets.create(body);
      return tiket;
    } catch (error) {
      throw(error)
    }
  }

  static async updateTiket(id, body) {
    try {
      const tiket = await Tikets.findOne({
        where: { id }
      })
      const result = await tiket.update(body);
      return result;
    } catch (error) {
      throw(error)
    }
  }

  static async deleteTiket(id) {
    try {
      const tiket = await Tikets.findOne({
        where: { id }
      });
      tiket.destroy();
    } catch (error) {
      throw(error)
    }
  }
}

module.exports = TiketsServices;