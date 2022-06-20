import { ValidationError, AuthorizationError, ServerNotFoundError,ForbiddenError } from '../utilities/error'
import { books } from '../services/bookService'
import { users } from '../services/userService'

const validUserId = (id: any) => {
	let user = users.find((user: any) => user.authorId == id)
	if (!user) {
		throw new ServerNotFoundError('The give user id is not present', 404)
	} else {
		return user
	}
}

const validUser = (body: any) => {
	const { email, password } = body
	const user = users.find((user: any) => user.email == email)
	if (!user) {
		throw new AuthorizationError('The user is not authorized', 401)
	}
	if(user.password!=password){
		throw new ForbiddenError('The email or password does not match',403 )
	}
	return user
}

const validatePostUser = (body: any) => {
	if (body.name == ''|| body.email == '' || body.password == '') {
		throw new ValidationError('name and id required', 400)
	}
}

const checkBookExists = (authorId: any) => {
	const book = books.filter((book: any) => book.authorId == authorId)
	// console.log('book',book);
	
	if (book.length) {
		// console.log('user cannot be deleted');
		throw new ValidationError('The user has a book cannot be deleted', 400)
	}
}



export { validUserId, validatePostUser, validUser, checkBookExists }
