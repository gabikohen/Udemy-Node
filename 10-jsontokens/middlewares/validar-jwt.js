const { response, request } = require("express");

const jwt = require("jsonwebtoken");

const Usuario = require("../models/usuario");

const validJWT = async (req = request, res = response, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      msg: "No hay token en la peticion",
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
    req.uid = uid;

    // leer el suario que corresponde al uid
    const usuario = await Usuario.findById(uid);


 if(!usuario){
  return res.status(401).json({
    msg:'Token no es valido - usuario NO existente'
  })
 }
     
    // Verificar si el uid tiene estado true

    if(!state.true){
        return res.status(401).json({
          msg:'Token no es valido - usuario con estado en FALSO'
        })
    }
    req.Usuario = usuario;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Token no valid",
    });
  }
  console.log(token);
};

module.exports = {
  validJWT,
};
