

let PRODUCTS_DB=[
//   {
//     "name": "Jabon",
//     "precio":25,
//     "thumbnail": "https://es.wikipedia.org/wiki/Jab%C3%B3n#/media/Archivo:Tualetsapo.jpg",
//     "id":1
// },
// {
//   "name": "Calcetines",
//   "precio":25,
//   "thumbnail": "https://es.wikipedia.org/wiki/Calcet%C3%ADn#/media/Archivo:Socken_farbig.jpeg",
//   "id": 2
// },
// {
//   "name": "leche",
//     "precio":25,
//     "thumbnail": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Milk_glass.jpg/200px-Milk_glass.jpg",
//     "id": 3
// }

];



class ProductController{
    constructor(){}

    add(data){
      console.log("data",data)
      if(data.name === '' || typeof data.name ==="undefined") return false;
        data.id = PRODUCTS_DB.length + 1;
        PRODUCTS_DB.push({
          
          name: data.name,
          thumbnail: data.thumbnail,
          precio: data.precio,
          id:data.id,
        });
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
        if(product.id === parseInt(id)){
          // console.log("paso",data)
          product.name = data.name
          product.precio = data.precio,
          product.thumbnail = data.thumbnail
        }

        console.log("prod",product)
        return product;
      })


    }

    remove(id){
      const productoEliminado= PRODUCTS_DB.filter((product) => product.id === parseInt(id));
      PRODUCTS_DB = PRODUCTS_DB.filter((product) => product.id !== parseInt(id));

      return productoEliminado
    }


}

export default new ProductController();