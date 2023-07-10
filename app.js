import express from "express";
import dotenv from "dotenv";
import bodegasStorage from "./routers/bodegas.js";
import productosStorage from "./routers/productos.js";

const appExpress = express();
dotenv.config();

appExpress.use(express.json());
appExpress.use('/bodegas', bodegasStorage);
appExpress.use('/productos', productosStorage);

/* Se levanta el servidor */
const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});


