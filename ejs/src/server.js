import express from 'express';
import path from 'path';
import frontRoutes from './routes/front.js';
import productRouter from './routes/Products.js'

const __dirname = path.resolve(path.dirname('')); 

const app= express();

app.set('views', '../views');
app.set('view engine', 'ejs');


// app.get('/datos',(req,res)=>{
//     res.render('nivel',req.query)

// })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use("/api", productRouter)

app.use("/web",frontRoutes)

// Servidor escuchando 

const PORT=8080

const server = app.listen (PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en servidor ${error}`))
