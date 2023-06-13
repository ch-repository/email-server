const Router = require('koa-router'); // 引入koa-router
const router = new Router(); // 创建一个koa-router实例
const home = require('./home.js'); // 引入home模块
const user = require('./user.js'); // 引入user模块

router.use('/home', home.routes(), home.allowedMethods());
router.use('/user', user.routes(), user.allowedMethods());
router.redirect('/', '/home'); // 路由重定向，如果访问的接口是'/'，则重定向到home模块

module.exports = router;