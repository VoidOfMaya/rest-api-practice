import { Router } from "express";
import { authToken } from "./authrout.js";
import  jwt  from 'jsonwebtoken';

const postRouter = Router();

postRouter.get('/', (req, res) => {
  return res.json({Posts: "all posts shown here"});
});

postRouter.post('/', authToken,(req, res) => {
  jwt.verify(req.token, process.env.JWT_KEY, (err, authData)=>{
    if(err)return res.status(403);
    else{
      return res.json({
        message: "Post created...",
        authData
      });      
    }
  })

}); 


export{
    postRouter
}
//must be stored in local storage  and sent with the request
//practice token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NzE1MDMyMTB9.2Y7ZJmkRd3ZrbNmYTcMOLo_XsptnY1f3qMV_BBAhQD8