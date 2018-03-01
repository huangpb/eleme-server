var express = require('express')
var router = express.Router()
var app = express()

router.use(function(req, res, next) {
  next()
})

module.exports = {
  app,
  router
}
