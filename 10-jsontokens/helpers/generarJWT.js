const jwt = require("jsonwebtoken");

// uid Identificador de usuario

const generarJWT = (uid = '') => {

    return new Promise((resolve,reject) => {
     
     const payload = {uid}
      
     jwt.sign(payload,)

    } )

};



module.exports = {
  generarJWT,
};
