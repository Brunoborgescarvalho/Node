const http = require('http')
const server = http.createServer(function (req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type' , 'text.html')
    res.end('<h1>Hello World!</h1>')
})
server.listen(3000, function () {
    console.log('Servidor node no ar!')
})