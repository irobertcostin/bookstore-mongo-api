import { MongoClient } from "mongodb";
import config from "../../config";


const { db_host, db_name } = config;
const mongoURI = `mongodb://${db_host}/${db_name}`;



export default mongoURI;

