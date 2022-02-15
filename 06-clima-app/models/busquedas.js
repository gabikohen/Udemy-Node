const fs = require('fs');
const axios = require("axios");

class Busquedas {
  historial = [];
  dbPath = './db/database.json'
  constructor() {
    this.leerDB();
  }

  get  paramsMapbox() {
    return {
      "acces_token":process.env.MAPBOX_KEY ,
     " limit": 5,
      "language": "es",
    };
  }

  async ciudad(lugar = "") {
    // Peticiones Http
    try {
      const intance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
     
        params:this.paramsMapbox,
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
