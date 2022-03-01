const express = require("express");
const app = express();
const PORT = 8000;

// Para servir contenido estatico tengo que utilizar un middleware

app.use(express.static("public"));


app.get("/hola-mundo", (req, res) => {
  res.send("Panchuk le gusta el pescado");
});

// Cuando pongo otra vista que no existe
app.get("*", (req, res) => {
  res.sendFile( __dirname + '/public/404.html');
});

app.listen(PORT, () => {
  console.log(`Puerto funcionando en puerto ${PORT}`);
});
