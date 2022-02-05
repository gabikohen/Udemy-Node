require("colors");


const {
  inquererMenu,leerInput,pausa
  
} = require("./helpers/inquerer");
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
            break;
    
        default:
            break;
    }
    console.log({opt});
    
   if(opt !== 0 ) await pausa();
  } while (opt !== 0);
};

main();