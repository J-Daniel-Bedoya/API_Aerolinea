const express = require("express");
const router = express.Router();
const { 
  readTikets,
  readTiket,
  createTiket,
  updateTiket,
  deleteTiket,
} = require("../controllers");

router.get("/tiket", readTikets);
router.get("/tiket/:id", readTiket);
router.post("/tiket", createTiket);
router.put("/tiket", updateTiket);
router.delete("/tiket", deleteTiket);


module.exports = router;