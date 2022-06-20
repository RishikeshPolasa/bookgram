import uuid = require('uuid')
import { ForbiddenError } from '../utilities/error'
const authorId1 = uuid.v4()
const authorId2 = uuid.v4()
const authorId3 = uuid.v4()
const authorId4 = uuid.v4()
interface User {
	authorId: string
	name: string
	password: string
	email: string
	createAt: Date | undefined
	updateAt: Date | undefined
}

let users: User[] = [
	{
		authorId: authorId1,
		name: 'mike',
		email: 'mike@gmail.com',
		password: '123',
		createAt: new Date(2022, 5, 1, 9),
		updateAt: new Date(2022, 5, 1, 1),
	},
	{
		authorId: authorId2,
		name: 'raju',
		email: 'raju@gmail.com',
		password: '123',
		createAt: new Date(2022, 5, 16, 6),
		updateAt: new Date(2022, 5, 3, 17),
	},
	{
		authorId: authorId3,
		name: 'sanjay',
		email: 'sanjay@gmail.com',
		password: '123',
		createAt: new Date(2022, 5, 4, 10),
		updateAt: new Date(2022, 5, 4, 21),
	},
	{
		authorId: authorId4,
		name: 'jordan',
		email: 'jordan@gmail.com',
		password: '123',
		createAt: new Date(2022, 5, 4, 10),
		updateAt: new Date(2022, 5, 14, 11),
	},
	//for testing
	{
		authorId: '1',
		name: 'testing',
		email: 'testing@gmail.com',
		password: '123',
		createAt: new Date(2022, 5, 4, 10),
		updateAt: new Date(2022, 5, 14, 11),
	},
]

const jwt = require('jsonwebtoken')
const secretKey = process.env.AccessKey || '9090'

const addingUser = (ctx: any) => {
	let data = ctx.request.body
	users.push(data)
}

const generateToken = (user: any) => {
	return {
		token: jwt.sign(
			{ userName: user.name, userEmail: user.email, userId: user.authorId },
			secretKey,
		),
	}
}

async function verifyToken(ctx: any, next: any) {
	// console.log(ctx.header)

	try {
		if (!ctx.header.token) {
			throw new ForbiddenError('Token should not be empty', 401)
		}

		const bearerHeader = ctx.get('token')
		// console.log(bearerHeader)

		const token = ctx.request.header.token.split(' ')[1]
		ctx.state.jwtPayload = jwt.verify(token, secretKey)
		await next()
	} catch (error: any) {
		// console.log(error.statusCode)

		ctx.status = 401
		ctx.body = error
	}
}

const getUsers = () => {
	return users
}

const getUser = (id: any) => {
	const user = users.find((user: any) => user.authorId == id)
	return user
}

const creatingUser = (body: any) => {
	const { name, email, password } = body
	// console.log(name, email, password)

	const authorId = uuid.v4()
	const now = new Date()
	const createTime = new Date(now.toUTCString().slice(0, -4))
	const user = { authorId, name, email, password, createAt: createTime, updateAt: createTime }
	users.push(user)
	// console.log(user);
	return user
}

const deleteUser = (authorId: any) => {
	const user = users.find((user: any) => user.authorId == authorId)
	// console.log('user', user)

	if (user) {
		users = removeUser(users, user)
	}
	return user
}

function removeUser(users: any, val: any) {
	return users.filter(function (user: any) {
		return user != val
	})
}

const updateUser = (body: any, authorId: any) => {
	const user = users.find((user: any) => user.authorId == authorId)
	const createAt = user?.createAt
	// console.log(createAt, authorId)

	var now = new Date()
	var updateTime = new Date(now.toUTCString().slice(0, -4))
	const { name, email, password } = body
	const newUser = {
		authorId,
		name,
		email,
		password,
		createAt,
		updateAt: updateTime,
	}
	const index = users.findIndex((user: any) => user.authorId == authorId)
	users[index] = newUser
	return newUser
}

const getUsersInfo = (user_ids: any) => {
	user_ids = [...new Set(user_ids)]
	// console.log(ctx.request.body);
	const res = user_ids.map((id: any) => {
		return users.find((user) => user.authorId === id)
	})
	return res
}

export {
	users,
	addingUser,
	generateToken,
	verifyToken,
	getUsers,
	getUser,
	creatingUser,
	deleteUser,
	updateUser,
	getUsersInfo,
	authorId1,
	authorId2,
	authorId3,
	authorId4,
}
