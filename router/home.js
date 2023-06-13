// 模块拆分，这里放关于home模块的所有接口

const Router = require('koa-router');
const home = new Router();

// 在使用router.use使用这个模块的时候，第一个参数已经写了'/home'了，所以这里只需要写'/'即可，不用写'/home'，
// 如果需要写一个'/home/list'接口的话，只需要写'/list'即可。
home.get('/', async (ctx, next) => {
    ctx.body = 'home';
    await next();
})

module.exports = home;