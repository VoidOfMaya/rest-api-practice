import { Router } from "express";

const indexRouter = Router();

indexRouter.get('/',(req, res)=>{
    res.json({message: 'indexRout accessed!'});
})


export{
    indexRouter
}