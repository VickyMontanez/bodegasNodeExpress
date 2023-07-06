import mysql from "mysql2";
import { Router } from "express";
import dotenv from "dotenv";
dotenv.config();

const connection = mysql.createPool(JSON.parse(process.env.MY_CONNECT));;

connection.getConnection((error)=>{
    if(error){
        console.error("Error al conectar con la base de datos")
    } else {
        console.log("Conectada a la base de datos");
    }
})
