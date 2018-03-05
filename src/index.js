var express = require('express')
var routerN = require('./router/routerN')
var routerY = require('./router/routerY')
var constant = require('./constant')
var app = express()

app.use(express.static('public'))
app.use(routerN)
app.use(routerY)

app.listen(constant.port, function() {
  console.log('Server is started at http://localhost:' + constant.port)
})

