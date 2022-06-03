const {Router} = require('express');
const {login} = require('../controllers/auth')
const validarCamp = require('../middlewares/validarCampos')
const {check} = require('express-validator');

const router = Router();

router.post("/login",[check('email','El email es obligatorio').isEmail(),check('password','El password es obligatorio').notEmpty(),validarCamp],login);


module.exports = router;