require("colors");

const mostrarMenu = () => {
  console.clear();
  console.log("=======================".red);
  console.log("Seleccione un opcion".yellow);
  console.log("=======================\n".blue);

  console.log(`${'1.'.yellow}.Crear tareas`);
  console.log(`${'2.'.yellow}Listar tareas`);
  console.log(`${'3.'.yellow}.Listar tareas completadas`);
  console.log(`${'4.'.yellow}.Listar tareas pendientes`);
  console.log(`${'5.'.yellow}.Completar tarea(s)`);
  console.log(`${'6.'.yellow}.Borrar tarea`);
  console.log(`${'0.'.yellow}.Salir\n`);


const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

readline.question('Seleccione una opcion:',(opt)=>{
   
    readline.close();
});

};

const pausa = ()=>{
    const readline = require('readline').createInterface({
        input:process.stdin,
        output:process.stdout
    });
    
    readline.question(`\nPRESIONE ${'ENTES'.red} para continuar\n`,(opt)=>{
     
        readline.close();
    });
}

module.exports = {
    mostrarMenu,pausa
}