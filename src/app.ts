import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose";
import booksRouter from "./routes/books-route";
import mongoURI from "./config/db";

dotenv.config();

let app = express();

app.use(cors());
app.use(express.json());




app.use("/api/v1/books", booksRouter)






mongoose.connect(mongoURI).then(() => {
    app.listen(3939, async () => {

        console.log("Listening...");

    })
}).catch((error) => {
    console.log(error);
})


