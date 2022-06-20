import {userRouter} from '../routers/userRouter'
import{bookRouter} from '../routers/bookRouter'
import{reviewRouter} from '../routers/reviewRouter'
import{feedRouter} from '../routers/feedRouter'
const koa = require('koa')
// const route = require('koa-router')
function createServer(){
    const app = new koa()
app
	.use(userRouter.routes())
	.use(userRouter.allowedMethods())
	.use(bookRouter.routes())
	.use(bookRouter.allowedMethods())
	.use(reviewRouter.routes())
	.use(reviewRouter.allowedMethods())
	.use(feedRouter.routes())
	.use(feedRouter.allowedMethods())
    
    return app

}

export default createServer