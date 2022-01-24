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
          `No existe salario con id ${id}`
        );
  });
};

// en una funcion asincrona return es como then
// throw seria como el catch
// el awai tiene que estar en una funcion o un metedo asincrono
// cuando pongo el async es para que me regrese una promesa
//async tranforma mi funciona a un funcion asincrona la promsea va ser devuelta

const getInfoUsuario = async () => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El salario del empelado: ${empleado} es de ${salario}`;
  } catch (err) {
    throw err;
  }
};

const id = 3;

getInfoUsuario()
  .then((msg) => {
    console.log("Todo Bien");
    console.log(msg);
  })
  .catch((err) => {
    console.log("Todo mal");
    console.log(err);
  });
