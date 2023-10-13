import dotenv from "dotenv";

dotenv.config()


export default {
    db_host: process.env.DB_HOST,
    db_name: process.env.DB_NAME
}