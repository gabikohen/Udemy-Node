const { response, request } = require('express');

const Usuario = require('../models/Usuario');


const usersControllers = {
  getAll: (req = request , res = response ) => {
    const {q,nombre= "no name",apikey} = req.query;
    res.status(200).json({
      msg: " get API controlador",
      q,nombre,apikey
      
    });
  },
  editAll: (req, res = response) => {
    const id = req.params.id;
    res.status(200).json({
      msg: " edit API controlador",
      id
    });
  },

  createAll: async (req, res = response ) => {
    const body = req.body;
    const usuario = new Usuario(body);
     await usuario.save()
    res.status(200).json({
      usuario
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
