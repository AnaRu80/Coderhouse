import express from 'express'
import {Server as HttpServer} from 'http'
import {Server as Socket} from 'socket.io'
import handlebars from 'express-handlebars'
import frontRoutes from './routes/Front.js'

import productRouter from './routes/Products.js'

const app = express()
const httpServer = new HttpServer(app)
const io = new Socket(httpServer)

io.on('connection', socket => {
  console.log('cliente conectado!')
  socket.emit('productos', productos.slice(0, mostrados))

  socket.on('boton', () => {
    mostrados++
    socket.emit('productos', productos.slice(0, mostrados))
  })
})

app.engine(
    "hbs",
    handlebars({
      extname:".hbs",
      defaultLayout:'index.hbs',
    })
);

app.set("view engine","hbs");
app.set("views", "./views");

app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/web",frontRoutes)


const PORT = 8080
const server = httpServer.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))