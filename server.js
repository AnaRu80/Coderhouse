import express from 'express';
import { Server as HttpServer } from 'http';
import { Server as Socket } from 'socket.io';
import handlebars from 'express-handlebars';
import frontRoutes from './routes/Front.js';

const app = express();
const httpServer = new HttpServer(app);
const io = new Socket(httpServer);

let productDB = [];

io.on('connection', (socket) => {
  // single user  Bienvenido, usurio actual
  socket.emit('mensaje', 'Bienvenido Usuario actual');
  socket.emit('products', productDB);

  // socket.emit('product', productDB);

  // Brodcast when a user disconnect- Everybody, except de user
  socket.broadcast.emit('mensaje', 'Un producto se ha añadido');

  // Cuando un usuario se desconecta
  socket.on('disconnect', () => {
    io.emit('mensaje', 'Cliente desconectado');
  });

  // Escuchar a los productos de la Form
  socket.on('productForm', (product) => {
    productDB.push(product);
    console.log('DB', productDB, productDB.length);
    io.emit('products', productDB);
  });

  // Everybody
  // io.emit()
});

app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
  })
);

app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/web', frontRoutes);

const PORT = 8080;
const server = httpServer.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on('error', (error) => console.log(`Error en servidor ${error}`));
