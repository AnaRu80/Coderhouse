import express from 'express'
import exphbs from 'express-handlebars'
import productRouter from './routes/Products.js'
import frontRoutes from './routes/front.js'

const app = express();

app.engine('hbs',exphbs({
    extname:"hbs"
}))

app.set('view engine','hbs')

app.get('/',function(req,res){
    res.render('home',{
        firstName:"Ana",
        lastName:"Ruiz"
    })
})

app.get('/about',function(req,res){
    res.render('about')
})
 
// Ruta de productos y de front
// const productRouter = require('./routes/Products')
// const frontRoutes = require("./routes/front")

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

app.use("/api", productRouter)

app.use("/web",frontRoutes)

app.listen(8080);
