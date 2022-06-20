import {
	deleteUserById,
	getAllUsers,
	getUserById,
	createUser,
	updateUserById,
	getUserInfo,
	authorization,
} from '../controllers/userController'
import { verifyToken } from '../services/userService'
const route = require('koa-router')
const userRouter = new route()
const bodyParser = require('koa-bodyparser')
userRouter.prefix('/user')

userRouter.get('/', getAllUsers)
userRouter.get('/:id', getUserById)
userRouter.post('/login', bodyParser(), authorization)
userRouter.post('/', bodyParser(), createUser)
userRouter.post('/list', bodyParser(), verifyToken, getUserInfo)
userRouter.delete('/', verifyToken, deleteUserById)
userRouter.put('/', bodyParser(), verifyToken, updateUserById)
export { userRouter }
