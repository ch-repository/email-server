const Router = require('koa-router');
const router = new Router();
const email = require('./email.js');

router.use('/email', email.routes(), email.allowedMethods());
router.redirect('/', '/email');

module.exports = router;