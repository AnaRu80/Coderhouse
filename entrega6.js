// Ana  Ruiz  

const fs =require("fs");
// const FILEPATH ="./productos.txt";
// const CREATED = new Date();

class Archivo{
    constructor(){
        this.FILEPATH="./productos.txt";
				// this.arrayProd=arrayProd
    }

     async leer(){
        try {

               let data= await fs.promises.readFile(this.FILEPATH, "utf-8");
               console.log("data",data)

							return JSON.parse(data)            
            // if ( fs.existsSync(this.FILEPATH)){
            //   let data= await fs.promises.readFileSync(this.FILEPATH, "utf-8");
			// 				return JSON.parse(data)
			// 				// console.log(data)
            // }else{
			// 				// await  fs.writeFileSync(this.FILEPATH,"[]")
			// 					// console.log([])
            // }
        } catch (err) {
            return []
        }
    }    


    async guardar(arrayNew){
        try {
					let productos= await this.leer()
          console.log("prod",productos)
          const nuevoProducto={
            title:arrayNew.title + productos.length,
            precio:arrayNew.precio *productos.length,
            tumbnail:arrayNew.tumbnail,
            id:productos.length+1
          }
					// arrayNew["id"]=index
					// let readData=   fs.readFileSync(this.FILEPATH, "utf-8");
					// readData= JSON.parse(readData)
				//  this.arrayProd.push(arrayNew)
        productos.push(nuevoProducto)
					// console.log("arraynew",this.arrayProd,"read",readData,"new",arrayNew,index)
            await fs.promises.writeFile(this.FILEPATH,JSON.stringify(	productos,null,2))
            return `Se ha agregado el usuario ${arrayNew.title}`;

						// await fs.appendFileSync(this.FILEPATH, JSON.stringify(this.arrayProd, null,"\n"));
        } catch (err) {
            console.log("error",err)
        }
    }

    async borrar(){
			try {
				await fs.promises.unlink(this.FILEPATH)
				console.log("borrado")
			} catch (err) {
				console.lof("error",err)
			}
    }
}

// let producto = new Archivo ("./productos.txt",[])



(async () => {
    const producto = new Archivo();
    console.log("LEER:", await producto.leer());
    console.log(await producto.guardar(
      {
      		title:"title",precio:10,tumbnail:"https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      	}));
    console.log(await producto.guardar(

      {
        title:"title",precio:10,tumbnail:"https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      }
    ));
    console.log(await producto.guardar(
      {
        title:"title",precio:10,tumbnail:"https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      }
    ));
    console.log("LEER:", await producto.leer());
    // setTimeout(async () => {
    //   await producto.borrar();
    // }, 5000);
    // console.log("LEER:", await producto.leer());
  })();

// producto.leer()
// producto.guardar(
// 	{
// 		title:"title1",precio:10,tumbnail:"https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
// 	}
// )
// producto.guardar(
// 	{
// 		title:"title2",precio:20,tumbnail:"https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
// 	}
// )
// producto.guardar(
// 	{
// 		title:"title3",precio:30,tumbnail:"https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
// 	}
// )