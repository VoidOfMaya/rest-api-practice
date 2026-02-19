import express from "express";
import path from 'node:path';
import { fileURLToPath } from "node:url";
import 'dotenv/config'
import cors from 'cors'
import { indexRouter } from "./routes/indexRouter.js";
import { userRouter } from "./routes/userRouter.js";
import { messageRouter } from "./routes/messageRouter.js";

const app = express(()=>{
    console.log('booting server...')
})

// ===>ON CORS(CROSS ORIGIN REQUESTS)<======
// Adds headers: Access-Control-Allow-Origin: * enables all COR
//> app.use(cors())

// Adds headers: Access-Control-Allow-Origin: * enables CORS for a single rout!

//> app.get('/products/:id', cors(), function (req, res, next) {
//>   res.json({msg: 'Hello'})
//> })
//==========================================
//the following 2 lines are esm specific(dirname is only implicit in common.js)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//parse req string to json
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//router setup
app.use('/',indexRouter);
app.use('/users',userRouter);
app.use('/message',messageRouter);

//error handelling routes

app.use((req, res)=>{
    res.status(404).json('404')
})
// global server error
app.use((err, req,res, next)=>{
    console.error(err.stack);
    res.status(500).json('500',{errorMsg: err})
})

//port setup
const PORT = process.env.PORT || 3000;

app.listen(PORT, (err)=>{
    if(err) throw new err ;
    console.log(`Server running on port: ${PORT}`);
})