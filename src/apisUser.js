var apisUser = require('./router.js').router

apisUser.get('/a', function(req, res) {
  res.send('apisUser')
})

module.exports = apisUser
