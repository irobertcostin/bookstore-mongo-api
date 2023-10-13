import { MongoClient } from "mongodb";
import config from "../../config";
import mongoose from "mongoose";



const connectDb = async () => {

    try {

        const { db_host, db_name } = config;

        const mongoURI = `mongodb://${db_host}/${db_name}`;

        const client = new MongoClient(mongoURI)

        let conn = await client.connect();

        let bookstore = conn.db("bookstore")

        console.log('connected to database');
        return bookstore;

    } catch (error: any) {
        throw new Error(error)
    }

}



let db = connectDb();

export default db;




