

require("colors");
const inquirer = require('inquirer')


const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "Que desea hacer?",
    choices: [
      {
        value: "1",
        name: `${"1".red}.Crear Tarea`,
      },
      {
        value: "2",
        name: `${"2".red}.Listar Tarea`,
      },

      {
        value: "3",
        name: `${"3".red}.Lista de Tareas Completas`,
      },
      {
        value: "4",
        name: `${"4".red}.Tareas pendientes`,
      },

      {
        value: "5",
        name: `${"5".red}.Completar tarea(s)`,
      },
      {
        value: "6",
        name: `${"6".red}.Borrar una tarea`,
      },
      {
        value: "0",
        name: `${"0".red}.Salir`,
      },
    ],
  },
];

const inquererMenu = async () => {
  /* console.clear(); */
  console.log("=======================".red);
  console.log("Seleccione una opcion".blue);
  console.log("=======================\n".white);

  const { opcion } = await inquirer.prompt(preguntas);

  return opcion;
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${"ENTER".green} para continuar`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(question);
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Ingrese un valor";
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

const listadoTareasBorrar = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}`.green;
    return {
      value: "tarea.id",
      name: `${idx} ${tarea.desc}`,
    };
  });

  choices.unshift({
    value:'0',
    name:'0.'.green  + 'Cancelar'
  })

  const preguntas = [
    {
      type: "list",
      name: "id",
      message: "Borrar",
      choices,
    },
  ];

  const { id } = await inquirer.prompt(preguntas);
  return id;
  /*   {
    value: "tarea.id",
    name: `${'1'.red}.Crear Tarea`,
  }, */
};

const confirmar = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];
  const { ok } = await inquirer.prompt(question);
  return ok;
}


const mostrarladoChecklist = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}`.green;
    return {
      value: "tarea.id",
      name: `${idx} ${tarea.desc}`,
      checked:(tarea.completadaEn) ? true : false
    };
  });

  
  const pregunta = [
    {
      type: "checkbox",
      name: "ids",
      message: "Seleccione",
      choices,
    },
  ];

  const { ids } = await inquirer.prompt(pregunta);
  return ids
}

module.exports = {
  inquererMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,mostrarladoChecklist
};
