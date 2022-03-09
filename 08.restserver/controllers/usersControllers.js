const { request,response } = require("express");

const usersControllers = {
  getAll: (req = request , res = response) => {
    const {q,nombre= "no name",apikey} = req.query;
    res.status(200).json({
      msg: " get API controlador",
      q,nombre,apikey
      
    });
  },
  editAll: (req, res) => {
    const id = req.params.id;
    res.status(200).json({
      msg: " edit API controlador",
      id
    });
  },

  createAll: (req, res) => {
    const {nombre,edad,id} = req.body;
    res.status(200).json({
      msg: " create API controlador ",
      nombre,edad,id
    });
  },

  editFew: (req, res) => {
    res.status(200).json({
      msg: " editFew API controlador",
    });
  },


  deleteAll: (req, res) => {
    res.status(200).json({
      msg: " deleted API controlador",
    });
  },


};

module.exports = usersControllers;
