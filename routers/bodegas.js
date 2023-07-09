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

bodegasStorage.post("/", (req, res) => {
    let myData = req.body;
    let data = Object.values(myData);
  
    connection.query(
      'INSERT INTO `bodegas`(`id`, `nombre`, `estado`, `created_at`, `updated_at`, `deleted_at`,`id_responsable`, `created_by`, `update_by`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      data,
      (err, result, fields) => {
        if (err) {
          console.error(err);
          return res.status(500).send("Error al insertar en la base de datos");
        }else{
            res.end("Los datos fueron insertados con exito en la base de datos");
        }
    });
  });

export default bodegasStorage;
