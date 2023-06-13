// 模块拆分，这里放关于user模块的所有接口

const Router = require('koa-router');
const user = new Router();

// 在使用router.use使用这个模块的时候，第一个参数已经写了'/user'了，所以这里只需要写'/'即可，不用写'/user'，
// 如果需要写一个'/user/list'接口的话，只需要写'/list'即可。
user.get('/', async (ctx, next) => {
    ctx.body = 'user';
    await next();
})

module.exports = user;