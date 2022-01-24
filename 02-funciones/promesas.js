const empleados = [
  {
    id: 1,
    nombre: "Gabriel",
  },
  {
    id: 2,
    nombre: "Tobias",
  },
  {
    id: 3,
    nombre: "Panchuk",
  },
];

const salarios = [
  {
    id: 1,
    salario: "10,000",
  },
  {
    id: 2,
    salario: "5,000",
  },
];
// resolve => .then y el catch el rejected
// resolve es un callback que lo llamo cuando este todo correctamente se ejecuta
const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    empleado ? resolve(empleado) : reject(`No existe empleado con id ${id}`); // muestra el error , no mando un callback
  });
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((s) => s.id === id)?.salario;
    salario
      ? resolve(salario)
      : reject(
          `El empleado Tiene el id ${id} tiene un salario de : ${salario}`
        );
  });
};

/*getEmpleado(id)
  .then((empeado) => console.log(empeado))
  .catch((err) => console.log(err));

getSalario(id)
  .then((salario) => console.log(salario))
  .catch((err) => console.log(err));*/

const id = 2;
/*
  getEmpleado(id)
  .then(empleado => {
    
    getSalario(id)
    .then(salario => {
      console.log('El empleado:',empleado, 'tiene un salario :',salario)
    })
    .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));*/

// Estas seria un promesas hell no se usa

// si yo le mando el return no necesito
//mandarle el then al lado ,por que el  callback regrea un promesa
//eso te permite concatenar otro then

let nombre;

getEmpleado(id)
  .then((empleado) => {
    nombre = empleado;
    return getSalario(id);
  })
  .then((salario) =>
    console.log("El empleado:", nombre, "tiene un salario :", salario)
  )
  .catch((err) => console.log(err));
