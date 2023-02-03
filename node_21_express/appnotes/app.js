// Making a http webserver one more time
const http      = require('http');
const server    = http.createServer((req,res)=>{
    console.log('user is on the server');
    res.end(`
    <h1>End</h1>

    <a href="#" target="_self">Go home</a>
    `); //Required to say that the response is complete
}) ;

const port = 3000;
server.listen(port); //Port is just communication endpoint
// 443, 80 are used usually when we deploy the webserver
// in development port number doesn't matter that much