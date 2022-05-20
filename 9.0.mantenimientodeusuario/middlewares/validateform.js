
// Validaciones
const { check } = require("express-validator");

// Importaciones de para validar campos 
const {rolValido,validarEmail} = require('../helpers/db-validator')



const validarForm = [
 
  check("nombre")
    .notEmpty()
    .withMessage("Debe Completar el campo con un Nombre")
    .isLength({ min: 2 }),
    check("email")
    .isEmail()
    .notEmpty()
    .withMessage("Debe Completar el campo con un Email"),
    check("email").custom(validarEmail),
    check("password")
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars long"),
  check("rol").custom(rolValido)
];

module.exports = validarForm;
