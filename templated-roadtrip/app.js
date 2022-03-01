const express = require("express");
const app = express();


const port = process.env.PORT || 5000;



 // Express HBS engine
app.set("view engine", "hbs");



 app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Fernando",
    titulo: 'Curso de Node'
  });
});

app.get('/generic', (req,res) => {
  res.render("generic", {
    nombre: "Fernando",
    titulo: 'Curso de Node'
  });
});
app.get('/elements', (req,res) => {
  res.render("elements", {
    nombre: "Fernando",
    titulo: 'Curso de Node'
  });
});

app.get('/about', (req,res) => {
  res.render("about", {
    nombre: "Fernando",
    titulo: 'Curso de Node'
  });
});

app.get('*',(req,res) => {
  res.sendFile(__dirname + '/public/404.html')
})



app.listen(port, () => {
  console.log(`Puerto funcionando en puerto ${port}`);
});
