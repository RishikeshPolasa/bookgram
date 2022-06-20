import {
	getAllReviews,
	getReviewById,
	createReview,
	deleteReviewById,
	updateReviewById,
	getReviewList,
} from '../controllers/reviewController'
import { verifyToken } from '../services/userService'
const route = require('koa-router')
const reviewRouter = new route()
const bodyParser = require('koa-bodyparser')
reviewRouter.prefix('/review')

reviewRouter.get('/', getAllReviews)
reviewRouter.get('/:id', getReviewById)
reviewRouter.post('/', bodyParser(), verifyToken, createReview)
reviewRouter.post('/list', bodyParser(), verifyToken, getReviewList)
reviewRouter.delete('/:id', verifyToken, deleteReviewById)
reviewRouter.put('/:id', bodyParser(), verifyToken, updateReviewById)
export { reviewRouter }
