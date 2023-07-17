import express from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {historiales} from '../controllerDto/historiales.js';
import {validate} from "class-validator";

const proxyHistoriales = express();
proxyHistoriales.use(async(req, res, next)=>{
    try {
        let data = plainToClass(historiales, req.body, {excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        console.log(err);
        res.send();
    }
})

export default proxyHistoriales;