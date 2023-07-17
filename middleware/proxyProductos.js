import express from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {productos} from '../controllerDto/productos.js';
import {validate} from "class-validator";

const proxyProducts = express();
proxyProducts.use(async(req, res, next)=>{
    try {
        let data = plainToClass(productos, req.body, {excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        console.log(err);
        res.send();
    }
})

export default proxyProducts;