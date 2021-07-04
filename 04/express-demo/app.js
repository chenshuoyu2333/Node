const express = require('express')
const app = express()
app.get('/',function (req,res) {

    res.send('hello express')
})
app.get('/login',function (req,res) {

    // res.send('login')
    res.send(`
    <!DOCTYPE html>
     <html lang="en">
        <head>
          <meta charset="UTF-8">
        
        </head>
        <body>
          <h1>hello login</h1>
        </body>
    </html>       
    `)
})

app.listen(3000,function () {
    console.log('server is running')
})