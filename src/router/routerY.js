/* 给需要认证的api定义路由 */
var routerY = require('./router.js').Router()

routerY.use(function(req, res, next) {
  next()
})

routerY.get('/a', function(req, res) {
  res.send('apisUser')
})

module.exports = routerY
