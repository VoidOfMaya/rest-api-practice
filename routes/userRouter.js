import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => {
  return res.send('GET HTTP method on user resource');
});

userRouter.post('/', (req, res) => {
  return res.send('POST HTTP method on user resource');
});

userRouter.put('/:userId', (req, res) => {
  return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
});

userRouter.delete('/:userId', (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
});

export{
    userRouter
}