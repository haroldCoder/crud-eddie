import express from "express"
import cors from 'cors'
import {router} from './routes/users.route.js'
import connectDb from "./database/connectsql.js";
import dotenv from 'dotenv'
import bodyParser from "body-parser";

dotenv.config()

const app = express();
app.use(cors());
app.use(router)
app.use(bodyParser.json())

app.listen(8080, ()=>{
    console.log(`Server on port 8080`);
    connectDb();
});