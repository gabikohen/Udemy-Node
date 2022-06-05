const {Router} = require('express');
const {login} = require('../controllers/auth')
const validarCamp = require('../middlewares/validarCampos')
const {body} = require('express-validator');

const router = Router();

router.post("/login",[
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').notEmpty().withMessage('passwords do not match'),validarCamp],login);



 


module.exports = router;