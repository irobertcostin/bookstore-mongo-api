import express from "express"
import errorHandler from "../middleware/errorHandler"
import { getBooks, createBook, getBookById, deleteBook, updateBook } from "../controllers/books-controller";


const booksRouter = express.Router();

booksRouter.route("/").get(getBooks, errorHandler)
booksRouter.route("/new").post(createBook, errorHandler)
booksRouter.route("/id=:id").get(getBookById, errorHandler)
booksRouter.route("/delete/id=:id").delete(deleteBook, errorHandler)
booksRouter.route("/edit/id=:id").patch(updateBook, errorHandler)


export default booksRouter;