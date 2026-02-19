import { Router } from "express";
import { users, messages } from "../mockData.js";
const userRouter = Router();

userRouter.get('/', (req, res) => {
  return res.send(Object.values(users));
});

userRouter.post('/', (req, res) => {
  return res.send('POST HTTP method on user resource');
});

userRouter.put('/:userId', (req, res) => {
  return res.send(Object.values(users[req.params.userId]));
});

userRouter.delete('/:userId', (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
});

export{
    userRouter
}