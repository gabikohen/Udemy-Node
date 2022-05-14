const Role = require("../models/role");
const Usuario = require("../models/usuario");
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
