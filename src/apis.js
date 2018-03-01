var fs = require('fs')
var constant = require('./constant.js')
var apis = require('./router.js').app

var host = constant.host
console.log(host)

apis.get(host+'/home/category', function(req, res) {
  fs.readFile(__dirname + '/resource/homeCategory.json', 'utf8', function(err, data) {
    res.json(data);
    res.end();
  })
})

module.exports = apis
