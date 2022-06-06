const { response, request } = require("express");

const jwt = require("jsonwebtoken");

const validJWT = (req = request, res = response, next) => {
  const token = req.header("x-token");
  console.log(token);

  next();

}
  


module.exports = {
  validJWT,
};
