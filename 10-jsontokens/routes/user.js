/* const express = require("express");
const router = express.Router();

const {check} =require('express-validator');


// Controlador
const usersControllers = require("../controllers/usersControllers");

// Middleware
const validateCampo = require("../middlewares/validarCampos");

const validateForm = require("../middlewares/validateform");

const validateID = require('../middlewares/validatorID');
const validandoId = require('../helpers/db-validator');

const{ generarJWT} = require('../middlewares/validar-jwt')


//Rutas
router.get("/", usersControllers.getAll);

router.post("/",validateForm,validateCampo, usersControllers.createAll);

router.put("/:id",validateID,validateCampo, usersControllers.editAll);

router.patch("/", usersControllers.editFew);

router.delete("/:id",[generarJWT,check('id','No es un Id valido').isMongoId(),check('id').custom(validandoId),validateCampo] , usersControllers.deleteAll);

module.exports = router;
 */