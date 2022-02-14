const axios = require("axios").default;

class Busquedas {
  historial = ["Londres", "New york", "Paris", "Buenos aires"];

  constructor() {
    //Leer DB si existe
  }

  get MapboxClient() {
    return {
      "acces_token":process.env.MAPBOX_KEY ,
     " limit": 5,
      "language": "es",
    };
  }

  async ciudad(termino = "") {
    // Peticiones Http
    try {
      const intance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${termino}.json`,
     
        params: this.MapboxClient,
      });
      const resp = await intance.get();
      const place=resp.data.features;

        return place.map(lugar =>({

       id:lugar.id,
       nombre:lugar.place_name,
       lng:lugar.center[0], 
       lat:lugar.center[1],
       
      }));
      
    
    } catch (error) {
      return []; // retornar las ciudades que coincidad con
    }
  }
}

module.exports = Busquedas;
