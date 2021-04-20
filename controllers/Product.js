

let PRODUCTS_DB=[
  {
    "name": "Jabon",
    "precio":25,
    "id": 1
},
{
  "name": "Calcetines",
  "precio":25,
  "id": 1
},
{
  "name": "Cloro",
    "precio":25,
    "id": 1
}

];



class ProductController{
    constructor(){}

    add(data){
      console.log(data)
      if(data.name === '' || typeof data.name ==="undefined") return false;
        data.id = PRODUCTS_DB.length + 1;
        PRODUCTS_DB.push(data);
        return true
    }

    get(){
        if(PRODUCTS_DB.length< 1 ) return false;
        return PRODUCTS_DB;
    }

    getById(id){
      return PRODUCTS_DB.filter((product) => product.id === parseInt(id))[0]
    }


    update(id,data){
      PRODUCTS_DB=PRODUCTS_DB.map(product =>{
        if(product.id=== parseInt(id)){
          product.name = data.name
          product.price = data.price
        }

        return product
      })


    }

    remove(id){
      PRODUCTS_DB = PRODUCTS_DB.filter((product) => product.id !== parseInt(id));
    }


}

module.exports= new ProductController();