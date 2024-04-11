const express = require("express"); // para montar servidor
const cors = require("cors");    // para conectar clientes con el servidor


const app = express();

app.use(cors()); //para recibir datos de distintas a localhost 

app.use(express.json()); //permite leer datos json


app.listen(3000,()=>console.log("Servidor creado en el puerto 3000"));


/* 
*GET    LEER
*POST   ESCRIBIR
*PATCH  MODIFICAR UN ATRIBUTO
*PUT    MODIFICAR REGISTRO
*DELETE ELIMINAR
*/

app.get("/",(req,res)=>{
    res.send("<h1>Hola desde Node</h1>");
});
app.get("/json",(req,res)=>{
    res.json({mensaje:"Hola con JSON"});
})
app.get("/suma/:numero1/:numero2",(req,res)=>{

    var numero1;
    var numero2;
    try{
        var numero1 = parseFloat(req.params.numero1);
        var numero2 = parseFloat(req.params.numero2); 
        if(isNaN(numero1)|| isNaN(numero2)){
            res.status(500).send("Los datos ingresados no son validos");   

        }
    }catch(error){
        res.status(500).send("Los datos ingresados no son validos");
    }
    res.send(`La suma de ${numero1} + ${numero2} = ${(numero1+numero2)}`);
    
})
app.get("/datos/:nombre/:edad",(req,res)=>{
    var {nombre,edad} = req.params;
    const datosHtml = `
    <div>
     <h1>Hola ${nombre}</h1>
     <br>
     <p>Tu edad es: ${edad}</p>
    </div>
    `; 
    res.send(datosHtml);
})

//app.post();
//app.patch();
//app.put();
//app.delete();npm run dev
