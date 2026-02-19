import { Router } from "express";

const indexRoutrer = Router();

indexRoutrer.get('/',(req, res)=>{
    res.json({message: 'rout reached successfully!'});
})

export{
    indexRoutrer
}