import express from 'express'
import productRouter from './src/routes/Products.js'
import frontRoutes from './src/routes/front.js'


const app=express()

app.set('views','./views')

app.set('view engine','pug');


// app.get('/datos',(req,res)=>{
//     res.render('nivel',req.query)

// })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

app.use("/api", productRouter)

app.use("/web",frontRoutes)




//  Server escuchando 

const PORT=8080

const server = app.listen (PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en servidor ${error}`))
