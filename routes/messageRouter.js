import { Router, text } from "express";
import { messages } from "../mockData.js";
import {v4 as uuidv4 } from 'uuid';
const messageRouter = Router();

messageRouter.get('/', (req, res) => {
    return res.send(Object.values(messages));
});
messageRouter.get('/:id', (req, res) => {
    return res.send(Object.values(messages[req.params.id]));
});
messageRouter.post('/', (req, res) => {
        const id = uuidv4();
    const message ={
        id,
        text: req.body.text,
    };
    messages[id]= message;
    return res.send(message);
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