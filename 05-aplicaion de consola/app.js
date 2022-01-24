require("colors");
const { guardarDB,leerDB } = require("./helpers/guardarArchivo");
const { inquererMenu, pausa, leerInput } = require("./helpers/inquerer");

const Tareas = require("./models/tareas");

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if(tareasDB){
    //Establecer tareas
       
  }
  await pausa();
  do {
    //Imprimir el menu
    opt = await inquererMenu();
    switch (opt) {
      case "1":
        const desc = await leerInput("description: ");
        tareas.crearTarea(desc);

        break;
      case "2":
        console.log(tareas.listadoArray);
        break;
    }

    guardarDB(tareas.listadoArray);

    await pausa();
  } while (opt !== "0");
};

main();
