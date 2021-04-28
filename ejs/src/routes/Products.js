import express from 'express'
const router = express.Router()
import product from '../controllers/Product.js'

router.get("/productos/", (req, res) => {
    const products= product.get()
    res.render("listado",{
      products:products
    })
  // if (!products) {
  //   return res.status(404).json({
  //     error: "no hay productos cargados",
  //   });
  // }

  
  // res.json(products);
});

router.post("/productos/", (req, res) => {
  const data = req.body;
  console.log("dataaa post>",req.body)
  if (product.add(data)){
    if(data.form === "1") return res.redirect('http://localhost:8080/web');
    // res.status(201).json(data);
    console.log("hola")
    res.redirect('http://localhost:8080/web');  }
  
    res.status(400).send()

});

router.put("/productos/actualizar/:id/", (req, res) => {
  const data = req.body;
  const {id} = req.params

  let updateProd=product.update(id,data)
  console.log("pur lik",updateProd)

  if (updateProd){
    res.status(201).json(data);
  }
  
  res.status(400).send()
});

router.get("/productos/:id", (req, res) => {
  const { id } = req.params;
  const currentproduct=product.getById(id)
  if (currentproduct) {
    return res.json(currentproduct);
  }
  res.status(404).json({
    error: "producto no encontrado",
  });
});

router.delete("/productos/borrar/:id", (req, res) => {
  const { id } = req.params;
  const eliminado= product.remove(id)
  res.json(eliminado);
});

export default router