const listapi = require('./mysql');
const bodyParser = require('body-parser');
const express = require('express');
const app = express()
//采用所有设置均可访问的方法解决跨域问题
app.all('*', function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', '*')
  //允许的header类型
  res.header('Access-Control-Allow-Headers', 'content-type')
  //跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT,GET,OPTIONS')
  if (req.method.toLowerCase() == 'options') {
    res.sendStatus(res.statusCode);//让options尝试请求快速结束
  } else {
    next();
  }
})
app.use(bodyParser.json()) //以json格式返回出去
// app.use(bodyParser.urlencoded({ extend: false}))
//后端api路由

app.use('/src/http/mysql', listapi)

app.listen(10200)

console.log("success listen at port: 10200")
