import { Router } from "express";
import jwt from 'jsonwebtoken';
import{ users } from '../mockData.js';
import 'dotenv/config'

const authRouter = Router()

authRouter.post('/',(req,res)=>{
    //jwb async
    
    jwt.sign({user: users[0]},process.env.JWT_KEY, (err, token)=>{
        res.json({
            token
        })
    });
})
//token format:
//Authorization: Bearer <access_token>

//authentication token checker: 
function authToken(req, res, next){
    const bearerHeader = req.headers['authorization']
    if(bearerHeader){
        //splits bearer header at  space
        const bearer = bearerHeader.split(' ');
        //isolatres token from array
        const bearerToken = bearer[1];
        //set token
        req.token = bearerToken;
        next();

    }else{
        res.status(403).send("Forbbiden")
    }

     
}

export{
    authRouter,
    authToken
}