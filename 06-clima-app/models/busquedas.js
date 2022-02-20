const fs = require('fs');
const axios = require("axios");

class Busquedas {
  historial = [];
  dbPath = './db/database.json'
  
/*   constructor() {
    this.leerDB();
  } */

  get  paramsMapbox() {
    return {
      "acces_token": process.env.MAPBOX_KEY ,
     " limit": 5,
      "language": "es",
    };
  }

 /* ?lat={lat}&lon={lon}&appid={API key} */
 get paramsWether() {
   return {
     "lat":"",
     "long":"",
      "appid":"",

   }
 }

  async ciudad(lugar = "") {
    // Peticiones Http
    try {
      const intance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
     
        params:this.paramsMapbox,
      });
      const resp = await intance.get();
      return resp.data.features.map(lugar =>({

       id:lugar.id,
       nombre:lugar.place_name,
       lng:lugar.center[0], 
       lat:lugar.center[1],
       
      }));
      
      
    } catch (error) {
      return []; // retornar las ciudades que coincidad con
    }
  }


  async climaLugar(lat,lon) {
    try {
      
      const instancia  = axios.create({
        BaseURL2 = `api.openweathermap.org/data/2.5/${weather}.json`,
        params:this.paramsWether
      })
      const resp = await instancia.get();
      return resp.data.features.map(temp =>({
    
       
        desc:'Algo de nubes',
        min:"",
        max:"",
        temp:""
      }));
      
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = Busquedas;
