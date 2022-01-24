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

const getEmpleado = (id, cb) => {
  const empleado = empleados.find((e) => e.id === id)?.nombre;

  if (empleado) {
    cb(null, empleado);
  } else {
    cb(` Empleado con id ${id} no existe`);
  }
};

const getSalario = (id, cd) => {
  const salario = salarios.find((s) => s.id === id)?.salario;

  if (salario) {
    cd(null, salario);
  } else {
    cd(`Empleado con el id ${id} tiene un salario de: ${salario}`);
  }
};

const id = 3;

getSalario(id, (err, salario) => {
  if (err) {
    
    return console.log(err);
  }
  getEmpleado(id, (err, empleado) => {
    if (err) {
     
      return console.log(err);
    }
    console.log("El Empleado:",empleado,'Tiene un salario de:',salario);
    
  });
});
