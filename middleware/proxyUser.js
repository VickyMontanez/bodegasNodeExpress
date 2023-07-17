import express from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {users} from '../controllerDto/users.js';
import {validate} from "class-validator";

const proxyUser = express();
proxyUser.use(async(req, res, next)=>{
    try {
        let data = plainToClass(users, req.body, {excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err) {
        console.log(err);
        res.send();
    }
})

export default proxyUser;
