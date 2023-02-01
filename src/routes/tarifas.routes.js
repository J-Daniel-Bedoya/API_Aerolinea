const express = require("express");
const router = express.Router();
const { 
  readTarifa,
  createTarifa,
  updateTarifa,
  deleteTarifa,
} = require("../controllers");

router.get("/tarifa", readTarifa);
router.post("/tarifa", createTarifa);
router.put("/tarifa", updateTarifa);
router.delete("/tarifa", deleteTarifa);


module.exports = router;