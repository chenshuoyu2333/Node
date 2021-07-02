let Http =require('http');
 let  server= Http.createServer();
 server.on('request',function () {

     console.log('收到客户端的请求了');
 })
server.listen('3000',function () {
    console.log('服务启动成功，端口号3000')
})