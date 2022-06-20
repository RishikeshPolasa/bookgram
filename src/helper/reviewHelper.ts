import { reviews } from '../services/reviewService'
import { books } from '../services/bookService'
import { ServerNotFoundError, ValidationError, AuthorizationError } from '../utilities/error'
const validReview = (review: any) => {
	if (!review) {
		throw new ServerNotFoundError('The Review Does Not Have a Book', 404)
	}
}

const validCreateReview = (authorId: any, body: any) => {
	const { bookId } = body
	//    const aId = books.filter((book) => book.authorId ==authorId)
	const getBook = books.filter((book) => book.bookId == bookId)

	if (!getBook.length) {
		// console.log("The Given Book Id has not present!'");
		throw new ValidationError('The Given Book Id has not present!!', 400)
	}
}

const validDeleteReview = (authorId: any, reviewId: any) => {
	const review = reviews.find((review: any) => review.id == reviewId)
	// console.log(review,reviewId,authorId);

	if (!review) {
		throw new ServerNotFoundError('The Review Does not present', 404)
		// console.log('The give review id is not present. Cannot be delelted!');
	}
	if (review?.authorId != authorId) {
		throw new AuthorizationError('THe user is not authorized to delete', 401)
		// console.log('The user does not have permission to delete the review');
	}
}

const validUpdateReview = (body: any, id: any, authorId: any) => {
	const { reviewBy, review } = body

	const updatingReview = reviews.find((review) => review.id == id)

	const authorizedAuthor = reviews.find((review) => review.authorId == authorId)
	if (!updatingReview) {
		throw new ServerNotFoundError('The Review Does not present', 404)
	} else if (reviewBy == '' || review == '') {
		throw new ValidationError('The review and reviewBy should not be empyty!', 400)
	}
	if (!authorizedAuthor) {
		throw new AuthorizationError('THe user is not authorized to update', 401)
	}
}

export { validReview, validCreateReview, validDeleteReview, validUpdateReview }
