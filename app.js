// app.js 整个koa项目的入口文件

const Koa = require('koa2'); // 引入koa
const app = new Koa(); // 创建一个koa实例
const port = 9000; // 项目的启动端口
const router = require('./router');
const errorHandler = require('./utils/error-handler');

/**
 * use()就是调用koa-router中间件
 * router.routes() 启动路由
 * router.allowedMethods() 允许任何请求(get,post,put,delete等等)
*/
app.use(router.routes(), router.allowedMethods());
errorHandler(app); // 报错统一处理

// 用koa的中间件
// app.use(async (ctx, next) => {
//     // 返回数据 ctx.response.body = 'hello world'  ctx.response.body等价ctx.body
//     ctx.response.body = 'hello world';
//     await next(); // 等下一个中间件运行完成之后
// })

// 监听
app.listen(port, () => {
    console.log(`服务启动成功，运行在 localhost:${port}`);
});