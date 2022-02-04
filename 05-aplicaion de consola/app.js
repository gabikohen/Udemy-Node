require("colors");

const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const {
  inquererMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,mostrarladoChecklist
} = require("./helpers/inquerer");

const Tareas = require("./models/tareas");

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();

  //Leer las tareas
  if (tareasDB) {
    tareas.cargarTareasFromArray(tareasDB);
  }

  do {
    //Imprimir el menu
    opt = await inquererMenu();
    switch (opt) {
      case "1":
        const desc = await leerInput("description: ");
        tareas.crearTarea(desc);

        break;
      case "2":
        tareas.listadoCompleto();
        break;
      case "3": //listar completadas
        tareas.listadoPendienteCompletadas(true);
        break;
      case "4": //Listar pendientes
        tareas.listadoPendienteCompletadas(false);
        break;
        case "5": //completado pendiente
      const ids = await mostrarladoChecklist(tareas.listadoArray);
      tareas.toggleCompletadas( ids); 
      break;
     

      case "6": // Borrar
        const id = await listadoTareasBorrar(tareas.listadoArray);
       if(id !== '0') {
        const ok = await confirmar("Esta seguro?");
        if (ok) {
          tareas.borrarTarea(id);
          console.log("Tarea Borrada");
        }
       }
        
        break;
    }

    guardarDB(tareas.listadoArray);

    await pausa();
  } while (opt !== "0");
};

main();
