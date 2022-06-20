import { getFeeds } from '../services/feedService'
import { validFeedId } from '../helper/feedHelper'

const getAllFeeds = (ctx: any) => {
	try {
		const feeds = getFeeds()
		ctx.status = 200
		ctx.body = {
			// statuscode: ctx.statuscode,
			feeds,
		}
	} catch (error: any) {
		ctx.body = error
		ctx.status = error.statusCode
		// console.log(error)
	}
}

const getFeedById = async (ctx: any) => {
	try {
		const id = ctx.params.id
		const feed = validFeedId(id)
		// console.log(feed)

		ctx.status = 200
		ctx.body = {
			// statuscode: ctx.statuscode,
			feed,
		}
	} catch (error: any) {
		ctx.body = error
		ctx.status = error.statusCode
		// console.log(error);
	}
}

export { getAllFeeds, getFeedById }
