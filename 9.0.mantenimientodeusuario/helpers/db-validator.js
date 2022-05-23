const Role = require("../models/role");
const Usuario  = require('../models/usuario')


/* Probar luego con un try y un catch */

const esRolValido = async (rol = "") => {
  const existRole = await Role.find();
  /* console.log(Role) */
  console.log(existRole) 
  if (!existRole) {
    throw new Error(`El rol ${rol} no esta registrado`);
  }
};

const validarEmail = async (email = "") => {
  const existeEmail = await Usuario.findOne({ email });
  if (existeEmail) {
    throw new Error(`El email ya existe ${email}`);
  }
};

const validacionUserID = async (id = '') => {
  
  const userID= await Usuario.findById({id});
  if(!userID) {
    throw new Error(`El ID no existe ${id}`)
  } 

}




module.exports = {
    esRolValido,
    validarEmail,
    validacionUserID

}
