const express = require("express");
const router = express.Router();
const { 
  readRecervas,
  readRecerva,
  createRecerva,
  updateRecerva,
  deleteRecerva,
} = require("../controllers");

router.get("/recerva", readRecervas);
router.get("/recerva/:id", readRecerva);
router.post("/recerva", createRecerva);
router.put("/recerva/:id", updateRecerva);
router.delete("/recerva/:id", deleteRecerva);


module.exports = router;