import mysql from "mysql2";
import {Router} from "express";

const bodegasStorage = Router();
let connection;

bodegasStorage.use((req, res, next)=>{
    const config = JSON.parse(process.env.MY_CONNECT)
    connection = mysql.createPool(config);
    next();
})

bodegasStorage.get("/",(req, res)=>{
    connection.query('SELECT * FROM `bodegas` ORDER BY nombre ASC',(err, result,fil)=>{
        res.end(JSON.stringify(result));
    })
})

export default bodegasStorage;