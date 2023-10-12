import express from "express"
import dotenv from "dotenv"
import cors from "cors"


dotenv.config();

let app = express();

app.use(cors());
app.use(express.json());



app.listen(3939, async () => {

    console.log("Listening...");

})
