const http = require('http');
//http events

// const server = http.createServer((req,res)=>{
//     res.end('Welcome');
// });

// USING EVENT Emitter API
const server = http.createServer();
// Emit 'request' event
//Listen + respond to it

server.on('request', (req,res)=>{
    res.end('Welcome')
});

server.listen(3000);