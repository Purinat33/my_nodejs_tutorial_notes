// HTTP intro
// used with Server stuff

const http = require('http');

/*
    create server takes a callback function as argument
    and said callback function requires 2 objects
        1. req: incoming request
        2. res: outgoing respond
*/

const server = http.createServer((req, res)=>{
    // console.log(req); //Notice that log doesnt show up righr away
    //We need to refresh
    
    //--------------------
    //Getting URL
    if(req.url == '/'){ /* Signify home page*/
        res.write('This is index page');
    }
    if(req.url == '/about'){
        res.write('Here is the about page');
    }
    res.end(`
        <h1>This page does not exists</h1>
        <p>Please go back</p>
        <a href="/">Click here</a>
    `);

    res.write("Welcome to my homepage!!!");
    res.end();
});

//We also need to tell which port the server is listening to
const port = 3000;
server.listen(port);


// TO RUN:
// 1. Execute this file with node app.js
// 2. Notice how the output just blink and not stopping
// 3. Enter web browser and type localhost:port
// (In this case port is 3000 so localhost:3000)
// 4. To stop the output console (and by extension the server)
// Ctrl-C


//Note that the blinking (the program runs indefinitely)
// means that its waiting for requests

//We want the web server to always be up
