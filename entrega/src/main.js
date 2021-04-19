import express  from 'express'
import fs from 'fs'
const app=express()
const productos=["queso","jamon","pan"]

let visitasItems=0
app.get('/items',(req,res)=>{
    visitasItems++
    // res.send('<h1>Hola</h1>')
    // res.json('<h1>Hola</h1>',{items:productos, cantidad:productos.length})
    res.json({items:productos, cantidad:productos.length})
})

let data= JSON.parse( fs.readFileSync("productos.txt", "utf-8"))
let numRandom=Math.floor(Math.random() * data.length) + 1; 
let dataRandom=data[parseInt(numRandom)]

let visitasItemsRandom=0
app.get('/items-random',(req,res)=>{
    visitasItemsRandom++
    console.log(dataRandom,typeof(numRandom),data.length)
    res.json({"item":dataRandom})
})

app.get('/visitas',(req,res)=>{
    const visitasTotal={"visitasItems":visitasItems,"visitasItemsRandom":visitasItemsRandom}
    res.json({"visitas":visitasTotal})
    // res.send('<h1>Hola</h1>')
})

const PORT= 8080

const server= app.listen(PORT,()=>{
    console.log(`servidor http escuchado en el puerto" ${server.address().port}`)
})

server.on('error',(error)=>{console.log(`error:${error.message}`)})