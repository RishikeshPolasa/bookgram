import { books } from '../services/bookService'
import { AuthorizationError, ServerNotFoundError, ValidationError } from '../utilities/error'
const validBook = (book: any) => {
	if (!book) {
		throw new ServerNotFoundError('The Given Book Id Is Not Present', 404)
	}
}

const validatePostUser = async (user: any) => {
	if (!user) {
		throw new ValidationError('The Given Book Id has No Author. Create Usert', 400)
	}
}

const checkValidBody = (body: any) => {
	const { title } = body

	if (title == '') {
		// console.log('empty');

		throw new ValidationError('title are required', 400)
	}
}

const validDeleteUser = (authorId: any) => {
	const book = books.find((book: any) => book.authorId == authorId)
	// console.log(book);

	if (!book) {
		// console.log('not authorized to delete')/
		throw new AuthorizationError('THe user is not authorized to delete', 401)
		//throw authorization error
	} else {
		return book
	}
}

const validUpdateUser = (authorId: any, id: any, data: any) => {
	const book = books.find((book: any) => book.bookId == id)
	const { title } = data
	if (book?.authorId != authorId) {
		//throw authorization error
		throw new AuthorizationError('THe user is not authorized to delete', 401)
	} else if (id == '' || title == '') {
		throw new ValidationError('bookId and title required', 400)
	}
	// console.log('valid user')
}

const validBooksLength = (books: any) => {
	if (books.length == 0) {
		throw new ValidationError('No more books to be fetched', 404)
	}
}

export {
	validBook,
	validatePostUser,
	validDeleteUser,
	checkValidBody,
	validUpdateUser,
	validBooksLength,
}
