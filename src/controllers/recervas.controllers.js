const { RecervasServices } = require("../services");


const readRecerva = async(req, res, next) => {
  try {
    const { id } = req.params;
    const result = await RecervasServices.getRecerva(id);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
}
const createRecerva = async(req, res, next) => {
  try {
    const body = req.body;
    const result = await RecervasServices.postRecerva(body);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
}
const updateRecerva = async(req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await RecervasServices.updateRecerva(id, body);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
}
const deleteRecerva = async(req, res, next) => {
  try {
    const { id } = req.params;
    await RecervasServices.deleteRecerva(id);
    res.json({message: "Recerva eliminada exitosamente"});
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
}

module.exports = {
  readRecerva,
  createRecerva,
  updateRecerva,
  deleteRecerva,
}