// Validaciones
const { check } = require("express-validator");

const {validacionUserID} = require('../helpers/db-validator')

const validarID = [
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom(validacionUserID)

];

module.exports = validarID;
