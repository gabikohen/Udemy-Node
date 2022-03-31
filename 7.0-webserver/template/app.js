require('dotenv').config();
const express = require('express');
const app = express();
const hbs = require('hbs') 

const port = process.env.PORT  || 3000;


// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Servir contenido estatico
app.use(express.static('public'));




app.get('/',(req,res)=>{
    res.render('home',{
        nombre:'Fernando',
        titulo:'Curso de Node'
    });
});



app.get('/generic',(req,res)=>{
    res.render('generic',{
        nombre:'Fernando',
        titulo:'Curso de Node'
    });
});

app.get('/elements',(req,res)=>{
    res.render('elements',{
        nombre:'Fernando',
        titulo:'Curso de Node'
    });
});

app.get('*',(req,res)=> {
    res.sendFile(__dirname + '/public/404.html')
});

app.listen( port , () => {
 console.log(`Example app listening at http://localhost:${port}`)
})