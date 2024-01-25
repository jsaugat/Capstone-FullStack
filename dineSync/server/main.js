import express from "express";
import dotenv from 'dotenv';
dotenv.config() // can use process.env now
//? Routes
import {test} from './src/routes/test.js'

const app = express();
const port = process.env.PORT || 6900;

//? parse incoming requests with JSON payloads.
app.use(express.json());

app.use("/", (req, res, next) => {
    console.log(`- Request Path -> ${req.url}`)
    console.log(`- Request Method -> ${req.method}`)
    console.log(`- Request Body -> ${req.body}`)
    next();
})
app.get("/", test)

app.listen(port, ()=>{
    console.log(`👁️  WATCHING PORT : http://localhost:${port}`)
})