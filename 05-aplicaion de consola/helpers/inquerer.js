const inquirer = require("inquirer");
const inquerer = require("inquirer");

require("colors");

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "Que desea hacer?",
    choices: [
      {
        value: "1",
        name: `${'1'.red}.Crear Tarea`,
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
        name: `${'4'.red}.Tareas pendientes`,
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
  console.log("=======================".green);
  console.log("Seleccione una opcion".green);
  console.log("=======================\n".green);

  const { opcion } = await inquerer.prompt(preguntas);
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
  await inquerer.prompt(question);
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

  const {desc} = await inquirer.prompt(question)
  return desc;
};

module.exports = {
  inquererMenu,
  pausa,
  leerInput
};
