import { bookId1, bookId2, bookId4 } from '../services/bookService'
import { authorId1, authorId2, authorId3 } from '../services/userService'
interface feed {
	bookId: string
	book: string
	authorInfo: {
		authorId: string
		name: string
		createAt: Date
		updateAt: Date
	}
	review: [
		{
			reviewInfo: string
			review: string[]
		},
	]
}
let feeds: feed[] = [
	{
		bookId: bookId1,
		book: 'introduction to C',
		authorInfo: {
			authorId: authorId1,
			name: 'mike',
			createAt: new Date(2022, 5, 12, 9),
			updateAt: new Date(2022, 5, 12, 10),
		},
		review: [
			{
				reviewInfo: 'Chris Sam',
				review: [
					'Since story is king in the world of fiction, it probably won’t come as any surprise to learn that a book review for a novel will concentrate on how well the story was told.',
					'YOU. ARE. THE. DEAD. Oh my God. I got the chills so many times toward the end of this book. It completely blew my mind. It managed to surpass my high expectations AND be nothing at all like I expected. Or in Newspeak Double Plus Good. in this review',
				],
			},
		],
	},

	{
		bookId: bookId2,
		book: 'introduction to C++',
		authorInfo: {
			authorId: authorId2,
			name: 'raju',
			createAt: new Date(2022, 5, 12, 9),
			updateAt: new Date(2022, 5, 12, 10),
		},
		review: [
			{
				reviewInfo: 'Sam Mani',
				review: [
					'YOU. ARE. THE. DEAD. Oh my God. I got the chills so many times toward the end of this book. It completely blew my mind. It managed to surpass my high expectations AND be nothing at all like I expected. Or in Newspeak Double Plus Good. Let me preface this with an apology. ',
				],
			},
		],
	},

	{
		bookId: bookId1,
		book: 'introduction to PYTHON',
		authorInfo: {
			authorId: authorId3,
			name: 'Sudheer',
			createAt: new Date(2022, 5, 1, 2),
			updateAt: new Date(2022, 5, 2, 9),
		},
		review: [
			{
				reviewInfo: 'Mayank Kumar',
				review: [
					'YOU. ARE. THE. DEAD. Oh my God. I got the chills so many times toward the end of this book. It completely blew my mind. It managed to surpass my high expectations AND be nothing at all like I expected. Or in Newspeak Double Plus Good. Let me preface this with an apology. ',
				],
			},
		],
	},

	{
		bookId: bookId4,
		book: 'introduction to C++',
		authorInfo: {
			authorId: authorId2,
			name: 'Sanjay',
			createAt: new Date(2022, 5, 12, 9),
			updateAt: new Date(2022, 5, 12, 10),
		},
		review: [
			{
				reviewInfo: 'Harshak kumar',
				review: [
					'YOU. ARE. THE. DEAD. Oh my God. I got the chills so many times toward the end of this book. It completely blew my mind. It managed to surpass my high expectations AND be nothing at all like I expected. Or in Newspeak Double Plus Good. Let me preface this with an apology. ',
				],
			},
		],
	},
	//for testing
	{
		bookId: '1',
		book: 'jest',
		authorInfo: {
			authorId: '1',
			name: 'tester',
			createAt: new Date(2022, 5, 12, 9),
			updateAt: new Date(2022, 5, 12, 10),
		},
		review: [
			{
				reviewInfo: 'Tester',
				review: ['Testing works well'],
			},
		],
	},
]

const getFeeds = () => {
	return feeds
}

export { feeds, getFeeds }
