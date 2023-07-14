import express from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {users} from '../controllerDto/users.js';

const proxyUser = express();
proxyUser.use((req, res, next)=>{
    try {
        let data = plainToClass(users, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
    } catch (err) {
        console.log(err);
        res.send()
    }
})

export default proxyUser;