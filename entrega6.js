const fs =require("fs");
// const FILEPATH ="./productos.txt";
const CREATED = new Date();

class Archivo{
    constructor(FILEPATH,arrayProd){
        this.FILEPATH=FILEPATH;
				this.arrayProd=arrayProd
    }

     async leer(){
        try {
            if ( fs.existsSync(this.FILEPATH)){
              const data= await fs.readFileSync(this.FILEPATH, "utf-8");
							console.log(data)
            }else{
							await  fs.writeFileSync(this.FILEPATH)
								console.log([])
            }
        } catch (err) {
            console.log(err)
        }
    }    


    async guardar(arrayNew){
        try {
					const index=this.arrayProd.length+1
					arrayNew["id"]=index
					this.arrayProd.push(arrayNew)
					console.log(this.arrayProd)
            await fs.promises.appendFile(this.FILEPATH,JSON.stringify(arrayNew,null,'\t'))
        } catch (err) {
            console.log(err)
        }
    }

    async borrar(){
			try {
				await fs.promises.unlink(this.FILEPATH)
				console.log("borrado")
			} catch (err) {
				
			}
    }
}

let producto = new Archivo ("./productos.txt",[])
producto.leer()
producto.guardar(
	{
		title:"title1",precio:10,tumbnail:"https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
	}
)
producto.guardar(
	{
		title:"title2",precio:20,tumbnail:"https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
	}
)
producto.guardar(
	{
		title:"title3",precio:30,tumbnail:"https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
	}
)