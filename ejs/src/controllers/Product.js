
let PRODUCTS_DB=[
    {
      "name": "Jabon",
      "precio":25,
      "thumbnail": "https://cdn4.iconfinder.com/data/icons/stop-virus-outline-iconset/128/ic_soap-256.png",
      "id":1
  },
  {
    "name": "Calcetines",
    "precio":25,
    "thumbnail": "https://cdn4.iconfinder.com/data/icons/free-color-christmas-icons/24/Xmas_Socks-256.png",
    "id": 2
  },
  {
    "name": "leche",
      "precio":25,
      "thumbnail": "https://cdn2.iconfinder.com/data/icons/bakery-kitchen-3/512/milk-drink-bottle-256.png",
      "id": 3
  }
  
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