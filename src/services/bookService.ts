import uuid = require('uuid')
const bookId1 = uuid.v4()
const bookId2 = uuid.v4()
const bookId3 = uuid.v4()
const bookId4 = uuid.v4()
import { authorId1, authorId2, authorId4 } from '../services/userService'
interface Book {
	bookId: string
	title: string
	authorId: string
	createAt: Date | undefined //getting undefined while updating
	updateAt: Date | undefined
}

let books: Book[] = [
]

const getBooks = (page: any, limit: any) => {
	const skip = (page - 1) * limit
	const list = books.slice(skip, skip + limit)
	return list
}

const getBook = (id: any) => {
	// const {id}=data
	// console.log("id");

	const book = books.find((book) => book.bookId == id)
	// console.log(book)

	return book
}

const addingBook = (body: any,authorId:any) => {
	const now = new Date()
	const createTime = new Date(now.toUTCString().slice(0, -4))
	const bookId = uuid.v4()
	// console.log(createTime);
	const { title } = body
	const book = { bookId, title, authorId, createAt: createTime, updateAt: createTime }
	books.push(book)
	return book
}

const deleteBook = (book: any) => {
	// console.log(book);
	// if(!book){
	books = removeBookById(books, book)
	// }
	return book
}

function removeBookById(arr: any, value: any) {
	return arr.filter(function (ele: any) {
		return ele != value
	})
}

const updateBook = (data: any, id: any,authorId:any) => {
	const book = books.find((book: any) => book.bookId == id)
	// console.log('book', book)

	var now = new Date()
	var updateTime = new Date(now.toUTCString().slice(0, -4))
	const { title } = data
	const newBook = {
		bookId:id,
		authorId,
		title,
		createAt: book?.createAt,
		updateAt: updateTime,
	}
	const index = books.findIndex((book) => book.bookId == id)
	books[index] = newBook
	return newBook
}

const findBooks=(page:any,limit:any,query:any)=>{
	// console.log(query);
	// query="jest"
	const updatedBooks=query?books.filter((book:any)=> book.title.includes(query)):books
	// console.log(books[0].title.includes(query));
	
	const skip = (page - 1) * limit
	const list = updatedBooks.slice(skip, skip + limit)
	return list
}

export {
	books,
	getBooks,
	getBook,
	addingBook,
	deleteBook,
	updateBook,
	bookId1,
	bookId2,
	bookId3,
	bookId4,
	findBooks
}
