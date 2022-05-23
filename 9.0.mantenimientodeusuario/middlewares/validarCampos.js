const {validationResult} = require('express-validator');

const validarCampo = (req,res,next) =>{
    const error = validationResult(req);

    if(!error.isEmpty()){
       return res.status(400).json(error.mapped())
     }


     next();
}


module.exports = 
    validarCampo;