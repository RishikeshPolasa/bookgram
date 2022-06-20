import request from 'supertest'
import createServer from '../../utilities/server'
import { books, users, query } from './book.test.data'
const app = createServer()
describe('books Api ', () => {
	let createUsers: any = []
	let loggedInUsers: any = []
	let createBooks: any = []
	beforeAll(async () => {
		createUsers = await Promise.all(
			users.map(async (user: any) => {
				const response = await request(app.callback())
					.post('/user')
					.set('Content-Type', 'application/json')
					.send(user)
				return response.body
			}),
		)

		loggedInUsers = await Promise.all(
			users.map(async (user: any) => {
				const { email, password } = user
				const response = await request(app.callback())
					.post('/user/login')
					.set('Content-Type', 'application/json')
					.send({ email, password })
				return response.body
			}),
		)
	})

	beforeAll(async () => {
		createBooks = await Promise.all(
			books.map(async (book: any) => {
				const response = await request(app.callback())
					.post('/book')
					.set('Content-Type', 'application/json')
					.set('token', 'bearer ' + loggedInUsers[0].token)
					.send(book)
				return response.body
			}),
		)
	})

	describe('Get api', () => {
		it('should return all books', async () => {
			const { statusCode, body } = await request(app.callback()).get(`/book?page=1&limit=7`)

			expect(statusCode).toBe(200)
		})
		it('should return book matching bookid', async () => {
			const bookId = createBooks[0].bookId

			const { statusCode, body } = await request(app.callback()).get(`/book/${bookId}`)

			expect(statusCode).toBe(200)
			expect(body.book.bookId).toBe(bookId)
			expect(body.book).toEqual(createBooks[0])
		})
		it('should return query matching books', async () => {
			const { statusCode, body } = await request(app.callback()).get(
				`/book?query=${query}&page=1&limit=5`,
			)
			expect(statusCode).toBe(200)
		})
		it('should be 404', async () => {
			const bookId = '123'
			const { statusCode, body } = await request(app.callback()).get(`/book/${bookId}`)

			expect(statusCode).toBe(404)
		})
	})

	describe('POST Api', () => {
		let bookId: any
		it('should return created book', async () => {
			const { statusCode, body } = await request(app.callback())
				.post('/book')
				.set('token', 'Bearer ' + loggedInUsers[1].token)
				.send(createBooks[0].title)
			bookId = body.bookId
			expect(statusCode).toBe(201)
		})
		it('should should matching bookId', async () => {
			const { statusCode, body } = await request(app.callback()).get(`/book/${bookId}`)
			// console.log(body)

			expect(statusCode).toBe(200)
			expect(body.book.bookId).toBe(bookId)
		})
		it('should return unauthorized', async () => {
			const response = await request(app.callback())
				.post('/book')
				.set('token', '')
				.send(createBooks[0].title)
			expect(response.statusCode).toBe(401)
		})

		it('should return validationError 400', async () => {
			const data = {
				title: '',
			}
			const { statusCode, body } = await request(app.callback())
				.post('/book')
				.set('token', 'Bearer ' + loggedInUsers[0].token)
				.send(data)

			expect(statusCode).toBe(400)
		})
	})

	describe('delete book', () => {
		it('should delete the matching bookId', async () => {
			const { statusCode, body } = await request(app.callback())
				.delete('/book')
				.set('token', 'Bearer ' + loggedInUsers[1].token)
			expect(statusCode).toBe(200)
		})
		it('should return unauthorized', async () => {
			const response = await request(app.callback())
				.post('/book')
				.set('token', '')
				.send(createBooks[0].title)
			expect(response.statusCode).toBe(401)
		})
	})

	describe('update book', () => {
		it('should update matching bookId', async () => {
			const bookId = createBooks[0].bookId
			const data = {
				title: 'jest volume6',
			}
			const { statusCode, body } = await request(app.callback())
				.put(`/book/${bookId}`)
				.set('Content-Type', 'application/json')
				.set('token', 'Bearer ' + loggedInUsers[0].token)
				.send(data)

			expect(statusCode).toBe(200)
			expect(body.book.bookId).toBe(bookId)
		})
		it('should return validationError', async () => {
			const bookId = createBooks[0].bookId
			const data = {
				title: '',
			}
			const { statusCode, body } = await request(app.callback())
				.put(`/book/${bookId}`)
				.set('Content-Type', 'application/json')
				.set('token', 'Bearer ' + loggedInUsers[0].token)
				.send(data)

			expect(statusCode).toBe(400)
		})
		it('should return unauthorized', async () => {
			const response = await request(app.callback())
				.post('/book')
				.set('token', '')
				.send(createBooks[0].title)
			expect(response.statusCode).toBe(401)
		})
	})
})
