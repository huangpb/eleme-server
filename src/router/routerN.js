/* 给不需要认证的api定义路由 */
var fs = require('fs')
var path = require('path')
var constant = require('../constant.js')
var routerN = require('./router.js')()

var host = constant.host


//首页-获取分类接口
routerN.get(host+'/home/category', function(req, res) {
  fs.readFile(path.join(__dirname, '..', 'resource/homeCategory.json'), 'utf8', function(err, data) {
    res.json(data);
    res.end();
  })
})

//首页-获取商家列表接口
routerN.get(host+'/home/shops', function(req, res) {
  var query = req.query

  fs.readFile(path.join(__dirname, '..', 'resource/shops.json'), 'utf8', function(err, data) {
    res.json(data);
    res.end();
  })
})

module.exports = routerN
