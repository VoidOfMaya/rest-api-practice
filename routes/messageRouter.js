import { Router } from "express";
import { users, messages } from "../mockData.js";
const messageRouter = Router();

messageRouter.get('/', (req, res) => {
  return res.send(Object.values(messages));
});

messageRouter.post('/', (req, res) => {
  return res.send('POST HTTP method on user resource');
});

messageRouter.put('/:messageId', (req, res) => {
  return res.send(Object.values(messages[req.params.messageId]));
});

messageRouter.delete('/:messageId', (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.messageId} resource`);
});

export{
    messageRouter
}