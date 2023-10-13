import express from "express"
import errorHandler from "../middleware/errorHandler"
import { getBooks, createBook } from "../controllers/books-controller";


const booksRouter = express.Router();

booksRouter.route("/").get(getBooks, errorHandler)
booksRouter.route("/new").post(createBook, errorHandler)


export default booksRouter;