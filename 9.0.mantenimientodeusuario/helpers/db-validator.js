const Role = require("../models/role");

const esRolValido = async (rol = "") => {
  const existRole = await Role.findOne({ rol });
  if (!existRole) {
    throw new Error(`El rol ${rol} no esta registrado`);
  }
};


module.exports = {
    esRolValido

}