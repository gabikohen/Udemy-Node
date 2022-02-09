require("colors");


const { inquererMenu, leerInput, pausa } = require("./helpers/inquerer");
const Busquedas = require("./models/busquedas");

const main = async () => {
  const busquedas = new Busquedas();

  let opt;

  do {
    //Imprimir el menu
    opt = await inquererMenu();

    switch (opt) {
      case 1:
        // Mostrar mensaje

        const lugar = await leerInput('Ciudad:')
       await busquedas.ciudad(lugar)
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
