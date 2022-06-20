import { validUserId, validUser, validatePostUser, checkBookExists } from '../helper/userHelper'
import {
	generateToken,
	getUsers,
	getUser,
	creatingUser,
	deleteUser,
	updateUser,
	getUsersInfo,
} from '../services/userService'
// import { books } from './bookController'

const getAllUsers = (ctx: any) => {
	try {
		const users = getUsers()
		// console.log(users);
		ctx.status = 200
		ctx.body = {
			users,
		}
	} catch (error: any) {
		// console.log(error)
		ctx.body=error
		ctx.status=error.statusCode
	}
}

const getUserById = (ctx: any) => {
	try {
		const id = ctx.params.id
		validUserId(id)
		const user = getUser(id)
		ctx.status = 200
		ctx.body = {
			user,
		}
	} catch (err: any) {
		ctx.status = err.statusCode
		ctx.body = {
			err,
		}
	}
}

const authorization = (ctx: any) => {
	try {
		// console.log('as');

		const body = ctx.request.body
		const user = validUser(body)
		console.log('user', user)

		const token = generateToken(user)
		// console.log(token)
		ctx.status = 201
		ctx.body = { Email:body.email,Name:user.name,token: token.token }
	} catch (error: any) {
		ctx.body = error
		ctx.status = error.statusCode
	}
}

const createUser = (ctx: any) => {
	// if (!router.post('/')) {
	//     return (ctx.body = 'The Given URL For Book Id Is Not Present')
	// }
	try {
		const body = ctx.request.body

		//Todo checking for user exists already?
		validatePostUser(body)
		const user = creatingUser(body)
		ctx.status = 201
		ctx.body = {
			user,
		}
	} catch (error: any) {
		// console.log(e)
		ctx.body = error
		ctx.status = error.statusCode
	}
}

const deleteUserById = (ctx: any) => {
	try {
		const authorId = ctx.state.jwtPayload.userId
		checkBookExists(authorId)
		const user = deleteUser(authorId)

		ctx.status = 200
		ctx.body = {
			user,
		}
	} catch (error: any) {
		ctx.body = error
		ctx.status = error.statusCode
		// console.log(error)
	}
}

const updateUserById = (ctx: any) => {
	try {
		const authorId = ctx.state.jwtPayload.userId
		// console.log('authorid', authorId)

		const body = ctx.request.body
		validatePostUser(body)
		const user = updateUser(body, authorId)
		//    console.log(user);

		ctx.status = 200
		ctx.body = {
			user,
		}
	} catch (error: any) {
		ctx.body = error
		ctx.status = error.statusCode
		// console.log(error);
	}
}

const getUserInfo = (ctx: any) => {
	try {
		const user_ids: any = ctx.request.body.id
		const usersInfo = getUsersInfo(user_ids)
		ctx.status = 200
		ctx.body = {
			usersInfo,
		}
	} catch (error: any) {
		// console.log(error)
		ctx.body = error
		ctx.status = error.statusCode
	}
}

export {
	getAllUsers,
	getUserById,
	createUser,
	deleteUserById,
	updateUserById,
	getUserInfo,
	authorization,
}
