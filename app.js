import express from "express";
import dotenv from "dotenv";
import bodegasStorage from "./routers/bodegas.js";
import productosStorage from "./routers/productos.js";
import storageInventarios from "./routers/inventarios.js";

const appExpress = express();
dotenv.config();

appExpress.use(express.json());
appExpress.use('/bodegas', bodegasStorage);
appExpress.use('/productos', productosStorage);
appExpress.use('/inventarios', storageInventarios);

/* Se levanta el servidor */
const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});


