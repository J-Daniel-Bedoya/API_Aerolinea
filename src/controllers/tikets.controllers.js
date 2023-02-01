const { TiketsServices } = require("../services");


const readTikets = async(req, res, next) => {
  try {
    const result = await TiketsServices.getTikets();
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
}
const readTiket = async(req, res, next) => {
  try {
    const { id } = req.params;
    const result = await TiketsServices.getTiket(id);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
}
const createTiket = async(req, res, next) => {
  try {
    const body = req.body;
    const result = await TiketsServices.postTiket(body);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
}
const updateTiket = async(req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await TiketsServices.updateTiket(id, body);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
}
const deleteTiket = async(req, res, next) => {
  try {
    const { id } = req.params;
    await TiketsServices.deleteTiket(id);
    res.json({message: "Tikets eliminada exitosamente"});
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
}

module.exports = {
  readTikets,
  readTiket,
  createTiket,
  updateTiket,
  deleteTiket,
}