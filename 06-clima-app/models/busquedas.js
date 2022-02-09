const axios = require("axios").default;

class Busquedas {
  historial = ["Londres", "New york", "Paris", "Buenos aires"];

  constructor() {
    //Leer DB si existe
  }

  get paramsMapBox() {
    return {
      "acces_token":
        "pk.eyJ1IjoiZ2FpYmtvaGVuIiwiYSI6ImNremZ0ZG5rZjBpY3Eyd216ZmoxaDNxMDYifQ.UOI1RQ0quRO-okZ6C65WLg",
     " limit": 5,
      "language": "es",
    };
  }

  async ciudad(lugar = "") {
    // Peticiones Http
    try {
      const intance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params: this.paramsMapBox,
      });
      const resp = await intance.get();

      console.log(resp.data);
      return []; 
    } catch (error) {
      return []; // retornar las ciudades que coincidad con
    }
  }
}

module.exports = Busquedas;
