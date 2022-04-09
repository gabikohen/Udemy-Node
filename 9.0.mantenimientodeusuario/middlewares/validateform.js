const { body } = require("express-validator");
const rolValido = require('../helpers/db-validator')
const validarForm = [
  body("nombre")
    .notEmpty()
    .withMessage("Debe Completar el campo con un Nombre")
    .isLength({ min: 2 }),
  body("email")
    .isEmail()
    .notEmpty()
    .withMessage("Debe Completar el campo con un Email"),
  body("password")
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars long"),
  body("rol").custom(rolValido)
];

module.exports = validarForm;
