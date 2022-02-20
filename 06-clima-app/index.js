require("dotenv").config();
const { inquererMenu, leerInput, pausa, listarLugar } = require("./helpers/inquerer");
const Busquedas = require("./models/busquedas");

// Viriables de entorno
/* console.log(process.env.MAPBOX_KEY); */

const main = async () => {
  const busquedas = new Busquedas();

  let opt;

  do {
    //Imprimir el menu
    opt = await inquererMenu();

    switch (opt) {
      case 1:
        // Mostrar mensaje

        // Mostrar mensaje
        const termino = await leerInput("Ciudad: ");
        // Buscar Lugares
        const lugares = await busquedas.ciudad(termino);
        

        // Seleccionar el lugar
        const id = await  listarLugar(lugares)
       const lugarSel = lugares.find( l => l.id === id)
        //clima
      /* const clima = await busquedas.climaLugar() */
        //resultado

        // Mostrar resultados
        console.clear();
        console.log("\nInformación de la ciudad\n".green);
        console.log('Ciudad:', lugarSel.nombre.green );
        console.log('Lat:', lugarSel.lat );
        console.log('Lng:', lugarSel.lng );
        console.log("Temperatura:",);
        console.log("Mínima:",);
        console.log("Máxima:",);
        console.log("Como está el clima:",);
        break;

      case 2:
        busquedas.historialCapitalizado.forEach((lugar, i) => {
          const idx = `${i + 1}.`.green;
          console.log(`${idx} ${lugar} `);
        });

        break;
    }
  

    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
