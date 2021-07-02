let http =require('http');
 let server=http.createServer();
 server.on('request',function (request,response) {
     // 在服务端默认发送的数据，其实是 utf8 编码的内容
     // 但是浏览器不知道你是 utf8 编码的内容
     // 浏览器在不知道服务器响应内容的编码的情况下会按照当前操作系统的默认编码去解析
     // 中文操作系统默认是 gbk
     // 解决方法就是正确的告诉浏览器我给你发送的内容是什么编码的
     // 在 http 协议中，Content-Type 就是用来告知对方我给你发送的数据内容是什么类型
     // res.setHeader('Content-Type', 'text/plain; charset=utf-8')
     // res.end('hello 世界')
            let url =request.url;
            if(url==='/index'){
               response.setHeader('Content-Type', 'text/plain; charset=utf-8')
               response.end('hello 世界')
            }else if(url==='/login'){
                 response.setHeader('Content-Type', 'text/html; charset=utf-8')
               response.end('<p>hello 世界</p><a href="#">点我</a>')
            }


 })
server.listen('5000',function () {
    console.log('5000端口已开启')
})