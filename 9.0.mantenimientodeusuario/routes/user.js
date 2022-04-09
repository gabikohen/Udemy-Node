

const express = require('express')
const router = express.Router()

// Controlador
const usersControllers = require("../controllers/usersControllers");

 // Middleware
 const validateCampo = require('../middlewares/validarCampos');
 
 const validateForm = require('../middlewares/validateform')



//Rutas 
router.get("/", usersControllers.getAll);

router.post( "/",validateForm,validateCampo,usersControllers.createAll);

router.put("/:id", usersControllers.editAll);

router.patch("/", usersControllers.editFew);

router.delete("/:id", usersControllers.deleteAll);

module.exports = router;
