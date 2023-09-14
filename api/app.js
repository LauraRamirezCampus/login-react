import dotenv from "dotenv";
import express from "express";
import { login, registrar } from "./helpers/JWT.js";
import cors from 'cors'


dotenv.config();
let app = express();

app.use(express.json());
app.use(cors())
app.post('/login',login);
app.post('/registrar',registrar)

let config = JSON.parse(process.env.MY_SERVER)
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});