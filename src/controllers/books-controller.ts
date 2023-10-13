import { Request, Response, RequestHandler } from "express"
import expressAsyncHandler from "express-async-handler"
import Book from "../models/book"
import mongoose from "mongoose"
import BookInterface from "../interfaces/book-interface"

const getBooks: RequestHandler = expressAsyncHandler((async (req: Request, res: Response) => {

    const books = await Book.find({}).sort({ createdAt: -1 })

    res.status(200).json(books)

}))

const createBook: RequestHandler = expressAsyncHandler((async (req: Request, res: Response) => {

    let newItem = req.body;

    let book = await Book.create(newItem)

    res.status(201).json(book)


}))


const getBookById: RequestHandler = expressAsyncHandler((async (req: Request, res: Response) => {

    let id = req.params.id

    if (mongoose.Types.ObjectId.isValid(id)) {
        let resp = await Book.findById(id)

        if (resp) {
            res.status(200).json(resp)

        } else {
            res.status(404).json({ error: "No such id found" })
        }
    } else {
        res.status(404).json({ error: "Invalid id type" })
    }



}))


const deleteBook: RequestHandler = expressAsyncHandler((async (req: Request, res: Response) => {

    let id = req.params.id


    if (mongoose.Types.ObjectId.isValid(id)) {
        let resp = await Book.findOneAndDelete({ _id: id })

        if (resp) {
            res.status(200).json({ success: "Successfully deleted" })

        } else {
            res.status(404).json({ error: "No such id found" })
        }
    } else {
        res.status(404).json({ error: "Invalid id type" })
    }



}))


const updateBook: RequestHandler = expressAsyncHandler((async (req: Request, res: Response) => {

    let id = req.params.id
    console.log(id);
    console.log(req.body);


    if (mongoose.Types.ObjectId.isValid(id)) {
        let resp = await Book.findOneAndUpdate({ _id: id }, { ...req.body })

        if (resp) {
            res.status(200).json({ success: "Successfully edited" })

        } else {
            res.status(404).json({ error: "No such id found" })
        }
    } else {
        res.status(404).json({ error: "Invalid id type" })
    }



}))






export { getBooks, createBook, getBookById, deleteBook, updateBook }