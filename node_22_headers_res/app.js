//Expanding from node_21

//Headers
const http = require('http');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':'text/html'}); //Status code & headers (content/html)
    res.write("<h1>Index</h1>");
    res.end(); 
});


server.listen(3000);

//HTTP response status code
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//No need to remember everything just yet

//MIME Type (What we're sending back to the client)
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
