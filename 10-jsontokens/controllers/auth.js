const { response } = require("express");

const Usuario = require("../models/usuario");

/* const  */

const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    // Verificar si el email existe

    const user = await Usuario.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: "User | Pass no son correctos - EMAIL",
      });
    }

    // Si el usuario esta activo
    // Verificar la contrasena
    //Generar el JWT
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
