const http = require('http')

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>This is Imaad</h1>')

})

server.listen(port, ()=>{console.log(`Sever is listening at ${port}`)})
