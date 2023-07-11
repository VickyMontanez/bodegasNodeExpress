import mysql from "mysql2";
import {Router} from "express";

const prueba = Router();
let connection;

prueba.use((req, res, next)=>{
    const config = JSON.parse(process.env.MY_CONNECT)
    connection = mysql.createPool(config);
    next();
})

prueba.get("/",(req, res)=>{
    connection.query('SELECT cantidad FROM inventarios WHERE id = 50',(err, result, fil)=>{
        /* let json = JSON.stringify(result); */
        /* let cantidad = json.cantidad */
        res.end(console.log(Object.values(result)))
   
        
    })
})

export default prueba;