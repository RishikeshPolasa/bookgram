import {  getBook, addingBook, deleteBook, updateBook,findBooks } from '../services/bookService'
import {
	validBook,
	validDeleteUser,
	checkValidBody,
	validUpdateUser,
	validBooksLength
} from '../helper/bookHelper'
const getAllBooks = (ctx: any) => {
	try {
		const page = parseInt(ctx.query?.page)
		const limit = parseInt(ctx.query?.limit)
		const query = ctx.query?.query
		// console.log(page,limit,query)	
		const books=findBooks(page,limit,query)
		// console.log(books);
		
		validBooksLength(books)
		ctx.body=books
		ctx.status=200
	} catch (error: any) {
		// console.log(error)
		ctx.status=error.statusCode
		ctx.body=error
	}
}

const getBookById = (ctx: any) => {
	try {
		const id = ctx.params.id
		const book = getBook(id)
		validBook(book)
		// console.log(validateBook);
		ctx.status = 200
		ctx.body = {
			//    statuscode:ctx.statuscode,
			book,
		}
	} catch (error: any) {
		// console.log(error)
		ctx.status = error.statusCode
		ctx.body = error
		// ctx.status=404
	}
}

const createBook = (ctx: any) => {
	
	try {
		const body = ctx.request.body

		const authorId = ctx.state.jwtPayload.userId
		// console.log(body);

		const user = checkValidBody(body) 
		// console.log(user);
		
		// await validatePostUser(user) // user exists or not
		const book = addingBook(body,authorId)
		// console.log(book);
		ctx.status = 201
		ctx.body =book
	} catch (error: any) {
		ctx.status = error.statusCode
		ctx.body = error
	}
}
const deleteBookById = (ctx: any) => {
	try {
		// console.log('as');

		const authorId = ctx.state.jwtPayload.userId
		// console.log(authorId,body.);
		// const id = ctx.params.id
		const book = validDeleteUser(authorId)
		// console.log('book', book)

		deleteBook(book)
		ctx.status = 200
		ctx.body = {
			// statuscode:ctx.statuscode,
			book,
		}
	} catch (error: any) {
		ctx.status = error.statusCode
		ctx.body = error
	}
}

const updateBookById = (ctx: any) => {
	try {
		const id = ctx.params.id
		const data = ctx.request.body
		const authorId = ctx.state.jwtPayload.userId
		validUpdateUser(authorId, id, data)
		const book = updateBook(data, id,authorId)

		ctx.status = 200
		ctx.body = {
			// statuscode:ctx.statuscode,
			book,
		}
	} catch (error: any) {
		ctx.status = error.statusCode
		ctx.body = error
	}
}

export { getAllBooks, getBookById, createBook, deleteBookById, updateBookById }
