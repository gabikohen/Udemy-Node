const { response, request } = require("express");

const jwt = require("jsonwebtoken");

const validJWT = (req = request, res = response, next) => {
  const token = req.header("x-token");
 
  
  if(!token) {
    return res.status(401).json({
      msg:"No hay token en la peticion"
    })
  }

  try {
    jwt.verify(token,process.env.SECRETORPRIVATEKEY)
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg:"Token no valid"
    })
  }
  console.log(token);
  

}
  


module.exports = {
  validJWT,
};
