const jwt = require("jsonwebtoken");

// uid Identificador de usuario

const generateJWT = (uid = "") => {
  return new Promise((resolve, reject) => {
    const payload = { uid };

    jwt.sign(payload,process.env.SECRETORPRIVATEKEY,{
      expiresIn:'4h'
    },(err,token)=>{
      if(err){
        console.log(err);
        reject('No puedo generar el token')
      } else{
        resolve(token);
      }
    });
  });
};

module.exports = {
  generateJWT,
};
