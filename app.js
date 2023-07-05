import mysql from "mysql2";
import { Router } from "express";

const connection = mysql.createConnection({
    host:"localhost",
    user:"campus",
    database:"db_prueba_backend_sql",
    password:"campus2023", 
    port:3306
});

connection.connect((error)=>{
    if(error){
        console.error("Error al conectar con la base de datos")
    } else {
        console.log("Conectada a la base de datos");
    }
})
