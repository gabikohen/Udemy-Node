

require('dotenv').config()
const { inquererMenu, leerInput, pausa } = require("./helpers/inquerer");
const Busquedas = require("./models/busquedas");

// Viriables de entorno
console.log(process.env.MAPBOX_KEY)


const main = async () => {
  const busquedas = new Busquedas();

  let opt;

  do {
    //Imprimir el menu
    opt = await inquererMenu();

    switch (opt) {
      case 1:
        // Mostrar mensaje

        const termino = await leerInput('Ciudad:')
      const lugares =  await busquedas.ciudad(termino)
      console.log(lugares)
        // Buscar el lugar
        // Selectcionar el lugar

        //clima

        //resultado

        console.log("\nInformacion de la ciudad\n");
        console.log("Ciudad:");
        console.log("Lat:");
        console.log("Lng:");
        console.log("Temperatura:",);
        console.log("Minima:",);
        console.log("Maxima:",);
        break;

      default:
        break;
    }
    console.log({ opt });

    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

 main();
 