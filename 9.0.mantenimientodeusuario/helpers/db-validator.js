const Role = require("../models/role");
<<<<<<< HEAD
const Usuario  = require('../models/usuario')


=======
const Usuario = require("../models/usuario");
>>>>>>> 52efd0e9a09f3dac8068865b4f85b23742edf785
const esRolValido = async (rol = "") => {
  const existRole = await Role.findOne({ rol });
  if (!existRole) {
    throw new Error(`El rol ${rol} no esta registrado`);
  }
};

const valadarEmail = async (email = "") => {
  const existeEmail = await Usuario.findOne({ email });
  if (existeEmail) {
    throw new Error(`El email ya existe ${email}`);
  }
};

<<<<<<< HEAD
const valadarEmail = async (email = '') => {
  
   const existeEmail = await Usuario.findOne({email});
   if(existeEmail) {
     throw new Error(`El email ya existe ${email}`)
   } 

}

const validacionUserID = async (id = '') => {
  
  const userID= await Usuario.findById({id});
  if(!userID) {
    throw new Error(`El ID no existe ${id}`)
  } 

}




module.exports = {
    esRolValido,
    valadarEmail,
    validacionUserID

}
=======
const existeUserID = async (id) => {
  const existeUser = await Usuario.findById(id);
  if (existeUser) {
    throw new Error("El ID  no  existe ");
  }
};

module.exports = {
  esRolValido,
  valadarEmail,
  existeUserID,
};
>>>>>>> 52efd0e9a09f3dac8068865b4f85b23742edf785
