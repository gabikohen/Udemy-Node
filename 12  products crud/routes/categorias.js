const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();


/* url */
router.get('/',(req,res)=>{
    console.log('Todo OK ')
})

module.exports = router;