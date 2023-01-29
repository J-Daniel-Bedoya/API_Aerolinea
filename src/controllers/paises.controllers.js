const { PaisesServices } = require("../services");

const readPais = async(req, res, next) => {
  try {
    const result = await PaisesServices.getPais();
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
}

const createPais = async(req, res, next) => {
  try {
    const body = req.body;
    const result = await PaisesServices.postPais(body);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
}
const deletePais = async(req, res, next) => {
  try {
    const { id } = req.params;
    await PaisesServices.deletePais(id);
    res.json({message: "Pais eliminado satisfactoriamente"});
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
}

module.exports = {
  readPais,
  createPais,
  deletePais,
}