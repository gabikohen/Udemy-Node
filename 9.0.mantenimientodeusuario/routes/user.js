const express = require("express");
const router = express.Router();

// Controlador
const usersControllers = require("../controllers/usersControllers");

// Middleware
const validateCampo = require("../middlewares/validarCampos");

const validateForm = require("../middlewares/validateform");

const validateID = require('../middlewares/validatorID');

//Rutas
router.get("/", usersControllers.getAll);

router.post("/",  validateCampo,validateForm, usersControllers.createAll);

router.put("/:id",validateID,validateCampo, usersControllers.editAll);

router.patch("/", usersControllers.editFew);

router.delete("/:id",validateCampo,validateID, usersControllers.deleteAll);

module.exports = router;
