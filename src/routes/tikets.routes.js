const express = require("express");
const router = express.Router();
const { 
  readTokets,
  createTiket,
  updateTiket,
  deleteTiket,
} = require("../controllers");

// router.get("/tiket", readTokets);
// router.post("/tiket", createTiket);
// router.put("/tiket", updateTiket);
// router.delete("/tiket", deleteTiket);


module.exports = router;