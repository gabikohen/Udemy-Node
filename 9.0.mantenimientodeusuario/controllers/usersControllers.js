const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuario");

const usersControllers = {
  getAll: (req = request, res = response) => {
    const { q, nombre = "no name", apikey } = req.query;
    res.status(200).json({
      msg: " get API controlador",
      q,
      nombre,
      apikey,
    });
  },

   createAll: async (req, res = response) => {

    const { nombre, email, password, rol } = req.body;
    const usuario = new Usuario({ nombre, email, password, rol });
    
   
 // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);
 
    await usuario.save();
    res.status(200).json({
      usuario,
    });
  }, 

  // EDITAR TODOS 

  editAll:async (req, res = response) => {
    const id = req.params.id;
    const {_id,password,google,email,...resto} = req.body
  
    // Validar contra basedatos

    if(password) {
      const salt = bcryptjs.genSaltSync();
      resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario  = await Usuario.findByIdAndUpdate(id,resto)

    res.status(200).json({
      msg: " edit API controlador",
      id,usuario
    });
  },

  editFew: (req, res = response) => {
    res.status(200).json({
      msg: " editFew API controlador",
    });
  },

  deleteAll: (req, res = response) => {
    res.status(200).json({
      msg: " deleted API controlador",
    });
  },
};

module.exports = usersControllers;
