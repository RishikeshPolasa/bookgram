import { getAllFeeds, getFeedById } from '../controllers/feedController'
const route = require('koa-router')
const feedRouter = new route()
feedRouter.prefix('/feed')

feedRouter.get('/', getAllFeeds)
feedRouter.get('/:id', getFeedById)
export { feedRouter }
