interface Book {
	title: string
}

interface User {
	name: string
	password: string
	email: string
}

let users: User[] = [
	{
		name: 'tester1',
		email: 'testing1@gmail.com',
		password: '123',
	},
	{
		name: 'tester2',
		email: 'testing2@gmail.com',
		password: '123',
	},
]
let books: Book[] = [
	{
		title: 'jest volume1',
	},
	{
		title: 'Selenium testing',
	},
]

const query: any = 'jest'

export { books, users, query }
