const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('Request Event');
    res.end('Hello world')
});

server.listen(3000, () =>{
  console.log('Server listening on port 3000...');  
}); //Telling the event loop to keep listening to requests

//Listen will stay alive (async). This will waits for all the event loops
