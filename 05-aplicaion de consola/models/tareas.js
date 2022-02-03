
const Tarea = require("./tarea");
require("colors");

class Tareas {
  _listado = {};



  get listadoArray() {

    const listado = [];
  
    Object.keys(this._listado).forEach( key => {
      const tarea = this._listado[key];
      listado.push(tarea);
    })
    return listado
  }
  constructor() {
    this._listado = {};
  }


  borrarTarea(id =''){
      if(this_lista(id)) {
        delete this._listado(id)
      }
  }

  cargarTareasFromArray (tareas = [] ){
  tareas.forEach(tarea => {
    this._listado[tarea.id] = tarea
  })
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto(){

    console.log();
    this.listadoArray.forEach( (tarea,i) =>{
     
      const idx = `${ i + 1}`.green;
     const {desc,completadoEn} = tarea;
     const estado = (completadoEn)
                    ? 'Completado'.green 
                    :  'Pendiente'.red;

     console.log(`${idx} ${desc} :: ${estado} `);
    
    })

  }
   listadoPendienteCompletadas(completadas = true)  {
    this.listadoArray.forEach( (tarea) =>{
     
      let contador = 0;
     const {desc,completadoEn} = tarea;
     const estado= (completadoEn)
                    ? 'Completado'.green 
                    :  'Pendiente'.red;
        
        if(completadas) {
          if(completadoEn){
            contador += 1;
            console.log(`${contador.toString().green} ${desc} :: ${estado} `);
          }
        }else{
          if(!completadoEn){
            contador += 1;
            console.log(`${contador.toString().green} ${desc} :: ${estado} `);
          }
        }

  
    
    })
   
  }

}

module.exports = Tareas;
