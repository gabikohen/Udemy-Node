
const express = require("express");
const router = express.Router();

const {check} =require('express-validator');


// Controlador
const usersControllers = require("../controllers/usersControllers");
const { validacionUserID,esRoleValido,emailExiste } = require("../helpers/db-validator");

// Middlewares

const validateCampo= require('../middlewares/validarCampos')
const validarJWT = require('../middlewares/validar-jwt')

//Rutas
router.get("/", usersControllers.getAll);


router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
     
    check('id').custom(validacionUserID) ,
    check('rol').custom( esRoleValido ), 
    validateCampo
],usersControllers.editAll );

/* router.put("/:id",validateID,validateCampo, usersControllers.editAll); */



router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6 }),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom( emailExiste ),
    // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom( esRoleValido ), 
    validateCampo
], usersControllers.createAll );


/* router.post("/",validateForm,validateCampo, usersControllers.createAll); */



router.patch("/", usersControllers.editFew);

router.delete("/:id",[validarJWT,check('id','No es un Id valido').isMongoId(),check('id').custom(validacionUserID),validateCampo] , usersControllers.deleteAll);

module.exports = router;








module.exports = router;