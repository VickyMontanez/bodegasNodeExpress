import express from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {bodegas} from '../controllerDto/bodegas.js';
import {validate} from "class-validator";

const proxyBodegas = express();
proxyBodegas.use(async(req, res, next)=>{
    try {
        let data = plainToClass(bodegas, req.body, {excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        console.log(err);
        res.send();
    }
})

export default proxyBodegas;