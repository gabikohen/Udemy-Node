const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuario");

const usersControllers = {
  getAll: async (req = request, res = response) => {
    const { limit = 5, desde = 0 } = req.query;
    
    const query = {estado:true};
    
    const todosUser = await Usuario.find(query)
      .skip(Number(desde))
      .limit(Number(limit));

    const total = await Usuario.count(query);

    res.status(200).json({
      todosUser,total
    });
  },

<<<<<<< HEAD
   createAll: async (req, res = response) => {

    const { nombre, email, password, rol } = req.body;
    const usuario = new Usuario({ nombre, email, password, rol });
    
   
 // Encriptar la contraseña
=======
  createAll: async (req, res = response) => {
    const { nombre, email, password, rol } = req.body;
    const usuario = new Usuario({ nombre, email, password, rol });

    // Encriptar la contraseña
>>>>>>> 52efd0e9a09f3dac8068865b4f85b23742edf785
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);
 
    await usuario.save();
<<<<<<< HEAD
    res.status(200).json({
      usuario,
    });
  }, 
=======
    res.status(200).json(usuario);
  },
>>>>>>> 52efd0e9a09f3dac8068865b4f85b23742edf785

  // EDITAR TODOS

  editAll: async (req, res = response) => {
    const id = req.params.id;
<<<<<<< HEAD
    const {_id,password,google,email,...resto} = req.body
  
=======
    const { _id, password, google, email, ...resto } = req.body;

>>>>>>> 52efd0e9a09f3dac8068865b4f85b23742edf785
    // Validar contra basedatos

    if (password) {
      const salt = bcryptjs.genSaltSync();
      resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.status(200).json({
<<<<<<< HEAD
      msg: " edit API controlador",
      id,usuario
=======
      usuario,
>>>>>>> 52efd0e9a09f3dac8068865b4f85b23742edf785
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
