import uuid = require('uuid')
import { authorId1, authorId2, authorId3, authorId4 } from '../services/userService'
import { bookId1, bookId2, bookId3, bookId4 } from '../services/bookService'

interface Review {
	id: string
	authorId: string
	bookId: string | undefined //getting uncompatible error
	bookName: string | undefined
	reviewBy: string
	review: string
}

let reviews: Review[] = [
	{
		id: uuid.v4(),
		authorId: authorId1,
		bookId: bookId1,
		bookName: 'introduction to C',
		reviewBy: 'Chris Sam',
		review:
			'Since story is king in the world of fiction, it probably won’t come as any surprise to learn that a book review for a novel will concentrate on how well the story was told.',
	},
	{
		id: uuid.v4(),
		authorId: authorId1,
		bookId: bookId2,
		bookName: 'introduction to C++',
		reviewBy: 'Ajay Jade',
		review:
			'That said, book reviews in all genres follow the same basic formula that we discussed earlier. In these examples, you’ll be able to see how book reviewers on different platforms expertly intertwine the plot summary and their personal opinions of the book to produce a clear, informative, and concise review.',
	},
	{
		id: uuid.v4(),
		authorId: authorId2,
		bookId: bookId3,
		bookName: 'introduction to PYTHON',
		reviewBy: 'Vikas Vikky',
		review:
			'YOU. ARE. THE. DEAD. Oh my God. I got the chills so many times toward the end of this book. It completely blew my mind. It managed to surpass my high expectations AND be nothing at all like I expected. Or in Newspeak Double Plus Good. Let me preface this with an apology. If I sound stunningly inarticulate at times in this review, ',
	},
	{
		id: uuid.v4(),
		authorId: authorId2,
		bookId: bookId4,
		bookName: 'introduction to C++',
		reviewBy: 'Priyank Patel',
		review:
			'YOU. ARE. THE. DEAD. Oh my God. I got the chills so many times toward the end of this book. It completely blew my mind. It managed to surpass my high expectations AND be nothing at all like I expected. Or in Newspeak Double stunningly inarticulate at times in this review, ',
	},
	{
		id: uuid.v4(),
		authorId: authorId3,
		bookId: bookId1,
		bookName: 'introduction to PYTHON',
		reviewBy: 'Sam Mani',
		review:
			'YOU. ARE. THE. DEAD. Oh my God. I got the chills so many times toward the end of this book. It completely blew my mind. It managed to surpass my high expectations AND be nothing at all like I expected. Or in Newspeak Double Plus Good. in this review, ',
	},
	{
		id: uuid.v4(),
		authorId: authorId4,
		bookId: bookId4,
		bookName: 'introduction to JAVASCRIPT',
		reviewBy: 'Abhi Kumar',
		review:
			'YOU. ARE. THE. DEAD. Oh my God. I got the chills so many times toward the end of this book. It completely blew my mind. It managed to surpass my high expectations AND be nothing at all like I expected. Or in Newspeak Double Plus Good. Let me preface this with an apology. ',
	},
	//for testing
	{
		id: '1',
		authorId: '1',
		bookId: '1',
		bookName: 'jest testing',
		reviewBy: 'tester',
		review: 'Testing works well',
	},
]

const getReviews = () => {
	return reviews
}

const getReview = (id: any) => {
	const review = reviews.filter((review) => review.bookId == id)
	return review
}

const creatingReview = (body: any, authorId: any) => {
	const id = uuid.v4()
	const { bookId, bookName, reviewBy, review } = body
	const newreview = { id, authorId, bookId, bookName, reviewBy, review }
	reviews.push(newreview)
	return newreview
}

const deleteReview = (reviewId: any) => {
	const review = reviews.find((review: any) => review.id == reviewId)
	reviews = removeReview(reviews, review)
	return review
}

function removeReview(reviews: any, val: any) {
	return reviews.filter(function (review: any) {
		return review != val
	})
}

const updatingReview = (body: any, id: any, authorId: any) => {
	const updatingReview = reviews.find((review: any) => review.id == id)
	// console.log(updatingReview);
	const bookName = updatingReview?.bookName
	const bookId = updatingReview?.bookId
	const { reviewBy, review } = body
	const newReview = {
		id,
		authorId,
		bookId,
		bookName,
		reviewBy,
		review,
	}
	const index = reviews.findIndex((review: any) => review.id == id)
	// console.log(reviews[index])

	reviews[index] = newReview
	return newReview
}

const gettingReviews = (bookIds: any) => {
	const reviews = bookIds.map((id: any) => {
		return reviews.filter((review: any) => review.bookId == id)
	})
	return reviews
}

export {
	reviews,
	getReviews,
	getReview,
	creatingReview,
	deleteReview,
	updatingReview,
	gettingReviews,
}
