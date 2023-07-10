import mysql from "mysql2";
import {Router} from "express";

const productosStorage = Router();
let connection;

productosStorage.use((req, res, next)=>{
    const config = JSON.parse(process.env.MY_CONNECT)
    connection = mysql.createPool(config);
    next();
})

productosStorage.get("/",(req, res)=>{
    connection.query('SELECT p.id, p.nombre, SUM(i.cantidad) AS Total FROM productos p JOIN inventarios i ON p.id = i.id GROUP BY p.id, p.nombre ORDER BY Total DESC',(err, result,fil)=>{
        res.end(JSON.stringify(result));
    })
})

export default productosStorage;