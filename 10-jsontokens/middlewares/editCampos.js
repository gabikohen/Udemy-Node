/*  const { check } = require("express-validator");
 const {existeUserID,esRolValido }= require('../helpers/db-validator');

const editCampos = [
    check('_id','No es un ID valido').isMongoId(),
    check('_id').custom(existeUserID),
    check('rol').custom(esRolValido)
]


module.exports = editCampos;  */