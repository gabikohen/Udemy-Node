const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuario");
const { Promise } = require("mongoose");

const usersControllers = {
  getAll: async (req = request, res = response) => {
    const { limit = 5, desde = 0 } = req.query;

   
   
    /*
      Promesas separadas 
    const todosUser = await Usuario.find(query)
      .skip(Number(desde))
      .limit(Number(limit));

    const total = await Usuario.countDocuments(query);
 
*/
    const query = { state: true };
    /* Promise colection */
    const [total, todosUser] = await Promise.all([
      Usuario.countDocuments(query),
      Usuario.find(query).skip(Number(desde)).limit(Number(limit)),
    ]);

    res.status(200).json({
      total,
      todosUser,
    });
  },

  createAll: async (req, res = response) => {
    const { nombre, email, password, rol } = req.body;
    const usuario = new Usuario({ nombre, email, password, rol });

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync(password, salt);

    await usuario.save();
    res.status(200).json({
      usuario,
    });
  },

  // EDITAR TODOS

  editAll: async (req, res = response) => {
    const id = req.params.id;
    const { _id, password, google, email, ...resto } = req.body;

    // Validar contra basedatos

    if (password) {
      const salt = bcryptjs.genSaltSync();
      resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.status(200).json({
      msg: " edit API controlador",
      id,
      usuario,
    });
  },

  editFew: (req, res = response) => {
    res.status(200).json({
      msg: " editFew API controlador",
    });
  },


 

  deleteAll: async (req, res = response) => {
    const { id } = req.params;


    const user = await Usuario.findByIdAndUpdate(id, { state: false });
  
    res.json(user);
  },
};

module.exports = usersControllers;
