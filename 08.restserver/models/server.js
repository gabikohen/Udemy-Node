const express = require("express");
const cors = require("cors");
class Server {
  constructor() {
    this.app = express();
    this.usersRouter = "/api/user";
    // Middlewares

    this.middlewares();

    // Rutas Aplicacion
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Parseo y lectura del body

    this.app.use(express.json());

    // Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersRouter, require("../routes/user"));
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log("Servidor corriendo en el puerto", process.env.PORT);
    });
  }
}

module.exports = Server;
