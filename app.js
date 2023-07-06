import express from "express";
import dotenv from "dotenv";
import bodegasStorage from "./routers/bodegas.js";

const appExpress = express();
dotenv.config();

appExpress.use(express.json());
appExpress.use('/bodegas', bodegasStorage);

/* Se levanta el servidor */
const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});


