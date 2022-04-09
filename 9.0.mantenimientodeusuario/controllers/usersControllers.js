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
    
   
   


   const existeEmail = await Usuario.findOne({email});
   if(existeEmail) {
     return res.status(400).json({
       message:'El correo ya esta registrado'
     })
   }

 // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    await usuario.save();
    res.status(200).json({
      usuario,
    });
  },

  editAll: (req, res = response) => {
    const id = req.params.id;
    res.status(200).json({
      msg: " edit API controlador",
      id,
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
