const express = require("express");
const app = express();

// Ruta de productos y de front
const productRouter = require('./routes/Products')
const frontRoutes = require("./routes/front")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

app.use("/api", productRouter)

app.use("/web",frontRoutes)

app.listen(8080);
