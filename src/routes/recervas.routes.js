const express = require("express");
const router = express.Router();
const { 
  readRecerva,
  createRecerva,
  updateRecerva,
} = require("../controllers");

// router.get("/recerva", readRecerva);
// router.post("/recerva", createRecerva);
// router.put("/recerva/:id", updateRecerva);


module.exports = router;