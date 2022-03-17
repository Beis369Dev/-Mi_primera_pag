const express= require('express');

const app= express();
const path=require('path')// modulo para requeriri directorios 
const body_parser=require('body-parser');


//settings
app.set('port',3000);
app.set('views', path.join(__dirname,'views')); // para conf. la donde esta carpeta 'views'
app.engine('html', require('ejs').renderFile);// para utilizar files. html 
app.set('view engine', 'ejs'); // indica el motor de plantillas que vamos a usar 

//middlewares


//routes


app.use(body_parser.urlencoded({extended:false}));

app.use(require('./routes/index')); // para usaraslas 


//static files

app.use(express.static(path.join(__dirname,'public'))); // para q la carpeta pueda ser accedida desde el navegador 





//listening the server
app.listen(app.get('port'),(req,res)=>{
    console.log("Server on Port", app.get('port'))
});