const http = require('http');
const {readFileSync} = require('fs'); //Sync because we are not invoking this all the time

// Get all files in the dir
const index = readFileSync('./02-express-tutorial/navbar-app/index.html');
const index_style = readFileSync('./02-express-tutorial/navbar-app/styles.css');
const index_svg = readFileSync('./02-express-tutorial/navbar-app/logo.svg');
const index_js = readFileSync('./02-express-tutorial/navbar-app/browser-app.js');

const server = http.createServer((req, res)=>{
    const url = req.url;
    console.log(url);
    if(url == '/'){
        res.writeHead(200, {'content-type':'text/html'});
        res.write(index);
        res.end();
    }
    else if(url == '/about'){
        console.log(req.url);
        res.writeHead(200, {'content-type':'text/plain'});
        res.write(index);
        res.end();
    }
    
    //add links to css/js manually as requests are done to /style.css etc
    else if(url == '/styles.css'){
        console.log(req.url);
        res.writeHead(200, {'content-type':'text/css'});
        res.write(index_style);
        res.end();
    }
    else if(url == '/logo.svg'){
        console.log(req.url);
        res.writeHead(200, {'content-type':'image/svg+xml'});
        res.write(index_svg);
        res.end();
    }
    else if(url == '/browser-app.js'){
        console.log(req.url);
        res.writeHead(200, {'content-type':'text/javascript'});
        res.write(index_js);
        res.end();
    }
    //Do this for all the components index.html import
    else{
        res.writeHead(404, {'content-type':'text/html'});
        res.write(`<h1>Error</h1>`);
        res.end();
    }
});

server.listen(3000);

//See that despite loading index.html
//the css, js, svg doesn't come automatically

//We have to add them manually

//We can do everything in http module but its gonna be a lot hard
