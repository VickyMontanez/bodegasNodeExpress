import express from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {inventarios} from '../controllerDto/inventarios.js';
import {validate} from "class-validator";

const proxyInventarios = express();
proxyInventarios.use(async(req, res, next)=>{
    try {
        let data = plainToClass(inventarios, req.body, {excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        console.log(err);
        res.send();
    }
})

export default proxyInventarios;