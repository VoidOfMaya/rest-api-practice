import { Router } from "express";

const indexRouter = Router();

indexRouter.get('/',(req, res)=>{
    res.send({message: 'Received a GET HTTP method'});
})
indexRouter.post('/',(req, res)=>{
    res.send({message: 'Received a POST HTTP method'});
})
indexRouter.put('/',(req, res)=>{
    res.send({message: 'Received a PUT HTTP method'});
})
indexRouter.delete('/',(req, res)=>{
    res.send({message: 'Received a DELETE HTTP method'});
})

export{
    indexRouter
}