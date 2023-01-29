const express = require("express");
const router = express.Router();
const { 
  readPais,
  createPais,
  deletePais,
} = require("../controllers");

router.get("/pais", readPais);
router.post("/pais", createPais);
router.delete("/pais/:id", deletePais)

module.exports = router;