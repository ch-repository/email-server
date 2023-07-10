const Koa = require('koa2');
const app = new Koa();
const port = 9000;
const router = require('./router');
const cors = require('koa2-cors')
const bodyparser = require('koa-bodyparser');
// const errorHandler = require('./utils/error-handler');

// 跨域请求
app.use(cors({
    origin: '*',
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'application/json'],
}))
app.use(bodyparser())
app.use(router.routes(), router.allowedMethods());
// errorHandler(app);

app.listen(port, () => {
    console.log(`服务启动成功，运行在 localhost:${port}`);
});