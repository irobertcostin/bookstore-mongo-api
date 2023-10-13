import { Request, Response, RequestHandler } from "express"
import expressAsyncHandler from "express-async-handler"
import Book from "../models/book"


const getBooks: RequestHandler = expressAsyncHandler((async (req: Request, res: Response) => {

    const books = await Book.find({}).sort({ createdAt: -1 })

    res.status(200).json(books)

}))

const createBook: RequestHandler = expressAsyncHandler((async (req: Request, res: Response) => {

    let newItem = req.body;

    Book.create(newItem)



    res.status(201).send("ok")


}))

export { getBooks, createBook }