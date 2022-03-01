const http = require("http");

http
  .createServer((req, res) => {
    console.log(req);
 // headers de postman
    // aplication /json convieter json 
    // text plain retorna un archivo de texto

    res.setHeader('Content-Disposition','attachment;filename=lista.csv')
    res.writeHead(200,{'Content-type':'plain/text'});

    const persona = {
        id:1,
        nombre:'Fernando'

    }
    res.write(JSON.stringify(persona));
    res.end();
  })

  .listen(8081);

console.log("Escuchando el puerto puerto", 8081);
