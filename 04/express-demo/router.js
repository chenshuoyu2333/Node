const express = require('express')
const app = express()
// 路由其实就是一张表
// 这个表里面有具体的映射关系
// xxx 大厦
//    xxx 公司
// 看门的老大爷
//    xxx 公司 15 楼 3 号
//    百度公司 4 楼 5 号
//    。。。
// 经过老大爷，你要去哪个公司

// app
//   .get('/login', 函数)
//   .get('/dsadsa', 函数)
//   .post('/d/sadsa', 函数)
//   .get('dsadsa', 函数)


app.use('/public/',express.static('./public/'))
app.get('/',function (req,res) {

    res.send('hello express')
})


app.listen(3000,function () {
    console.log('server is running')
})