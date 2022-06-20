import {
	getAllBooks,
	getBookById,
	createBook,
	deleteBookById,
	updateBookById,
} from '../controllers/bookController'
import { verifyToken } from '../services/userService'
import  Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
const bookRouter = new Router()
// const bodyParser = require('koa-bodyparser')
bookRouter.prefix('/book')

bookRouter.get('/', getAllBooks)
bookRouter.get('/:id', getBookById)
bookRouter.post('/', verifyToken, bodyParser(), createBook)
bookRouter.delete('/', verifyToken, deleteBookById)
bookRouter.put('/:id', verifyToken, bodyParser(), updateBookById)

export { bookRouter }
