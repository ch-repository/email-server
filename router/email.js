const Router = require('koa-router');
const home = new Router();
const sender = require('../utils/sender')
const validator = require('../utils/validator');

home.post('/email', async (ctx, next) => {
    console.log('调用接口')
    await next();
    const params = ctx.request.body
    if(validator(ctx, params)){
        const sendResult = await sender(params)
        ctx.body = sendResult
    }
})

module.exports = home;