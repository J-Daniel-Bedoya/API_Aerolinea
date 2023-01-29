const express = require("express");
const router = express.Router();
const { 
  readPersonas,
  readPersona,
  createPersona,
  updatePersona,
  deletePersona,
} = require("../controllers");

router.get("/persona", readPersonas);
router.get("/persona/:id", readPersona);
router.post("/persona", createPersona);
router.put("/persona/:id", updatePersona);
router.delete("/persona/:id", deletePersona);


module.exports = router;