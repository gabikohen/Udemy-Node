require("dotenv").config();
const { inquererMenu, leerInput, pausa } = require("./helpers/inquerer");
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
        // Mostrar mensaje
        const lugares = await busquedas.ciudad(termino);
        console.log(lugares);

        // Seleccionar el lugar
        const id = await listarLugares(lugares);
        if (id === "0") continue;
        //clima

        //resultado

        // Mostrar resultados
        console.clear();
        console.log("\nInformación de la ciudad\n".green);
        console.log("Ciudad:", lugarSel.nombre.green);
        console.log("Lat:", lugarSel.lat);
        console.log("Lng:", lugarSel.lng);
        console.log("Temperatura:", clima.temp);
        console.log("Mínima:", clima.min);
        console.log("Máxima:", clima.max);
        console.log("Como está el clima:", clima.desc.green);
        break;

      case 2:
        busquedas.historialCapitalizado.forEach((lugar, i) => {
          const idx = `${i + 1}.`.green;
          console.log(`${idx} ${lugar} `);
        });

        break;
    }
    console.log({ opt });

    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
