const { PersonasServices } = require("../services");

const readPersonas = async(req, res, next) => {
  try {
    const result = await PersonasServices.getPersonas();
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
}

const readPersona = async(req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id)
    const result = await PersonasServices.getPersona(id);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
}
const createPersona = async(req, res, next) => {
  try {
    const body = req.body;
    const result = await PersonasServices.postPersona(body);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
}
const updatePersona = async(req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await PersonasServices.updatePersona(id, body);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
}
const deletePersona = async(req, res, next) => {
  try {
    const { id } = req.params;
    await PersonasServices.deletePersona(id);
    res.json({message: "Persona eliminada exitosamente"});
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
}

module.exports = {
  readPersonas,
  readPersona,
  createPersona,
  updatePersona,
  deletePersona,
}