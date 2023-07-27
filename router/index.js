const Router = require('koa-router');
const router = new Router();
const email = require('./email.js');

router.use('/api', email.routes(), email.allowedMethods());
router.redirect('/', '/api/email');

module.exports = router;