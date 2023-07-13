import express from "express";
import dotenv from "dotenv";
import bodegasStorage from "./routers/bodegas.js";
import productosStorage from "./routers/productos.js";
import storageInventarios from "./routers/inventarios.js";
import historialesStorage from "./routers/historiales.js";
import usersStorage from "./routers/users.js";

import "reflect-metadata";
import {plainToClass} from "class-transformer";
import {bodegas} from "./controllerDto/bodegas.js";

const appExpress = express();
dotenv.config();

appExpress.use(express.json());
appExpress.use('/bodegas', bodegasStorage);
appExpress.use('/productos', productosStorage);
appExpress.use('/inventarios', storageInventarios);
appExpress.use('/historiales', historialesStorage);
appExpress.use('/users', usersStorage);

/* Se levanta el servidor */
const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});

let json = {
    id: 12666,
    nombre: "vickysiitaa",
    id_responsable: 22,
    estado: 1,
    created_by: 3,
    update_by: 5,
    created_at: null,
    updated_at: null,
    deleted_at: null
};

let data = plainToClass(bodegas, json, {excludeExtraneousValues: true});
console.log(data);

