const http = require('http');

const server = http.createServer((req, res)=>{
    const url = req.url;
    if(url == '/'){
        console.log(req.url);
        res.writeHead(200, {'content-type':'text/html'});
        res.write(`<h2>HOME</h2>`);
        res.end();
    }
    else if(url == '/about'){
        console.log(req.url);
        res.writeHead(200, {'content-type':'text/html'});
        res.write(`<h2>About Us</h2>`);
        res.end();
    }
    else{
        console.log(req.url);
        res.writeHead(404, {'content-type': 'text/html'});
        res.write(`
        <h1>Resource not found!!!</h1>
        <img src="/img/hello.png" alt="John">
        `);
        res.end();
    }

    //More meaningful server
});

server.listen(3000);