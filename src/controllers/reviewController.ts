import {
	getReviews,
	getReview,
	creatingReview,
	deleteReview,
	updatingReview,
	gettingReviews,
} from '../services/reviewService'
import {
	validCreateReview,
	validReview,
	validDeleteReview,
	validUpdateReview,
} from '../helper/reviewHelper'

const getAllReviews = (ctx: any) => {
	try {
		const reviews = getReviews()
		ctx.status = 200
		ctx.body = {
			// statuscode: ctx.statuscode,
			reviews,
		}
	} catch (error: any) {
		ctx.body = error
		ctx.status = error.statusCode
		// console.log(error);
	}
}

const getReviewById = (ctx: any) => {
	try {
		const id = ctx.params.id
		const review = getReview(id)
		validReview(review)
		ctx.status = 200
		ctx.body = {
			// statuscode: ctx.statuscode,
			review,
		}
	} catch (error: any) {
		// console.log(error)
		ctx.body = error
		ctx.status = error.statusCode
	}
}

const createReview = (ctx: any) => {
	try {
		const authorId = ctx.state.jwtPayload.userId
		const body = ctx.request.body
		validCreateReview(authorId, body)
		const review = creatingReview(body, authorId)
		ctx.status = 201
		ctx.body = {
			//  statuscode: ctx.statuscode,
			review,
		}
	} catch (error: any) {
		// console.log(error);
		ctx.body = error
		ctx.status = error.statusCode
	}
}

const deleteReviewById = (ctx: any) => {
	try {
		const authorId = ctx.state.jwtPayload.userId
		const reviewId = ctx.params.id
		validDeleteReview(authorId, reviewId)
		const review = deleteReview(reviewId)
		//   console.log(review);

		ctx.status = 201
		ctx.body = {
			//   statuscode: ctx.statuscode,
			review,
		}
	} catch (error: any) {
		ctx.body = error
		ctx.status = error.statusCode
		//  console.log(error);
	}
}

const updateReviewById = (ctx: any) => {
	try {
		const authorId = ctx.state.jwtPayload.userId
		const id = ctx.params.id
		const body = ctx.request.body
		validUpdateReview(body, id, authorId)
		const review = updatingReview(body, id, authorId)
		ctx.status = 201
		ctx.body = {
			//   statuscode: ctx.statuscode,
			review,
		}
	} catch (error: any) {
		// console.log(error);
		ctx.body = error
		ctx.status = error.statusCode
	}
}

const getReviewList = (ctx: any) => {
	try {
		const book_ids: any = ctx.request.body.id
		// console.log('book_ids', book_ids)
		const reviews = gettingReviews(book_ids)
		// console.log('day5',res);
		// let rev = res.map((review: any) => {
		//     review.bind().map
		//   });
		//   console.log(rev);
		ctx.status = 201
		ctx.body = {
			//   statuscode: ctx.statuscode,
			reviews,
		}
	} catch (error: any) {
		ctx.body = error
		ctx.status = error.statusCode
	}
}

export {
	getAllReviews,
	getReviewById,
	createReview,
	deleteReviewById,
	updateReviewById,
	getReviewList,
}
