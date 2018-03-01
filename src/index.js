var express = require('express')
var apis = require('./apis.js')
var apisUser = require('./apisUser.js')
var app = express()

const port = 8001

app.use(express.static('public'))
app.use(apis)
app.use(apisUser)

app.listen(port, function() {
  console.log('Server is started at http://localhost:' + port)
})

