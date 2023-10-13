import mongoose from "mongoose";


const Schema = mongoose.Schema

const bookSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    genre: {
        type: Array,
        required: true
    },
    reviews: {
        type: Array,
        required: true
    }


}, {
    timestamps: true
});


const Book = mongoose.model("Book", bookSchema);

export default Book;


