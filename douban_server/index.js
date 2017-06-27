const express = require('express')
const request = require('request') 
const app = express()

// 实现cors跨域
app.use(function(req,res,next) {
     res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next()
})

//请求电影列表的数据
app.get('/getMovieListData',function(req,res,next){
    // 用 request 模块实现数据请求
// https://api.douban.com/v2/movie/in_theaters?start=3&count=10
const url = 'https://api.douban.com/v2/movie/in_theaters?start=3&count=10'
var request = require('request');
request(url, function (error, response, body) {
  if(!error && response.statusCode == 200){
      res.json(body)
  }
});

})

const server = app.listen('3001',function(){
    console.log('服务已经启动，正在监听3001端口')
})