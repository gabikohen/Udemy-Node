const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false,hasta = 10) => {
  try {
    let salida = consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
   
      consola+= `${base} ${'x'.yellow} ${i} ${'='.red} ${base * i}\n`; }
    if (listar) console.clear();
    console.log("===============".blue);
    console.log(`TABLA DEL:`.yellow,colors.red (base));
    console.log("=====================".green);
    console.log(consola);

    fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);

    return `Tabla-${base}.txt creado`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
