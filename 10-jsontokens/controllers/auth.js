const { response } = require("express");

// Encriptar password
const bcryptjs = require("bcryptjs");

// User model
const Usuario = require("../models/usuario");

const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    // Verificar si el email existe

    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({
        msg: "User | Pass no son correctos - EMAIL",
      });
    }

    // Si el usuario esta activo

    if (!usuario.state) {
      return res.status(400).json({
        msg: "User | Password no son correctos - Estado - False",
      });
    }

    // Verificar la contrasena

    const validPass = bcryptjs.compareSync(password, usuario.password);

    if (!validPass) {
      return res.status(400).json({
        msg: "User | Password no son correctos - passW",
      });
    }

    //Generar el JWT

/*     const token = await generarJWT(); */
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Hable con el ADM",
    });
  }

  res.json({
    msg: "Login ok",
    email,
    password,
  });
};

module.exports = {
  login,
};
