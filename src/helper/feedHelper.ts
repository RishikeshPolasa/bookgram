import { feeds } from '../services/feedService'
import { books } from '../services/bookService'
import { ServerNotFoundError } from '../utilities/error'

const validFeedId = (id: any) => {
	const feedAuthorId = feeds.filter((review: any) => review.authorInfo.name == id)
	const feedBookId = feeds.filter((review: any) => review.bookId == id)
	const book = books.find((book: any) => book.bookId == id)

	if (feedAuthorId.length) {
		return feedBookId
	}
	if (feedBookId.length && book) {
		return feedBookId
	} else if (!feedBookId.length) {
		if (!feedAuthorId.length) {
			throw new ServerNotFoundError('The Given Feed Id Is Not Present', 404)

			// return ('The Given Id Does Not have Review...')
		}
	}
}

export { validFeedId }
