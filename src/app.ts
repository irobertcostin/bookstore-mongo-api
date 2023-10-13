import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose";
import db from "./config/db";



dotenv.config();

let app = express();

app.use(cors());
app.use(express.json());



db.then((() => {

    app.listen(3939, async () => {

        console.log("Listening...");

    })

})).catch(e => { console.log(e.message); })


