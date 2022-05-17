// Validaciones
const { body } = require("express-validator");

const {validacionUserID} = require('../helpers/db-validator')

const validarID = [
    body("id", "No es un ID valido").isMongoId(),
    body("id").custom(validacionUserID)

];

module.exports = validarID;
