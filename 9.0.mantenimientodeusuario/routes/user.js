const express = require("express");
const router = express.Router();

// Controlador
const usersControllers = require("../controllers/usersControllers");

<<<<<<< HEAD
// Middleware
const validateCampo = require("../middlewares/validarCampos");

const validateForm = require("../middlewares/validateform");
=======
 // Middleware
 const validateCampo = require('../middlewares/validarCampos');
 const validateForm = require('../middlewares/validateform')

 const editCampo = require('../middlewares/editCampos');
>>>>>>> 52efd0e9a09f3dac8068865b4f85b23742edf785

const validateID = require('../middlewares/validatorID');

//Rutas
router.get("/", usersControllers.getAll);

router.post("/", validateForm, validateCampo, usersControllers.createAll);

<<<<<<< HEAD
router.put("/:id",validateID,validateCampo, usersControllers.editAll);
=======
router.put("/:id", editCampo,usersControllers.editAll);
>>>>>>> 52efd0e9a09f3dac8068865b4f85b23742edf785

router.patch("/", usersControllers.editFew);

router.delete("/:id", usersControllers.deleteAll);

module.exports = router;
