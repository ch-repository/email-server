const Router = require('koa-router');
const home = new Router();
const sender = require('../utils/sender')
const validator = require('../utils/validator');

home.post('/', async (ctx, next) => {
    await next();
    const params = ctx.request.body
    if(validator(ctx, params)){
        const sendResult = await sender(params)
        ctx.body = sendResult
    }
})

module.exports = home;