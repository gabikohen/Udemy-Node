const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");
class Server {
  constructor() {
    this.app = express();
    this.usersRouter = "/api/user";
    this.authPath = "/api/auth";
    // Connectar Base de datos

    this.connectarDB();

    // Middlewares

    this.middlewares();

    // Rutas Aplicacion
    this.routes();
  }

  async connectarDB() {
    await dbConnection();
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
    this.app.use(this.authPath, require("../routes/auth"));
    this.app.use(this.usersRouter, require("../routes/user"));

  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log("Servidor corriendo en el puerto", process.env.PORT);
    });
  }
}

module.exports = Server;
