const { TarifasServices } = require("../services");


const readTarifa = async(req, res, next) => {
  try {
    const { id } = req.params;
    const result = await TarifasServices.getTarifa(id);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
}
const createTarifa = async(req, res, next) => {
  try {
    const body = req.body;
    const result = await TarifasServices.postTarifa(body);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
}
const updateTarifa = async(req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await TarifasServices.updateTarifa(id, body);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
}
const deleteTarifa = async(req, res, next) => {
  try {
    const { id } = req.params;
    await TarifasServices.deleteTarifa(id);
    res.json({message: "Tarifa eliminada exitosamente"});
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
}

module.exports = {
  readTarifa,
  createTarifa,
  updateTarifa,
  deleteTarifa,
}