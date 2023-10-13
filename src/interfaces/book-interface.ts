interface Review {
    name: string
    description: string
}


export default interface BookInterface {

    _id: string
    title: string
    author: string
    pages: number
    rating: number
    genre: string[]
    reviews: Review[]
    createdAt: string
    updatedAt: string
    __v: number

}