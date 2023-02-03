const express = require('express');
const app = express();

const path = require('path');

//Setting up static and middleware
app.use(express.static('./public'));

//For index.html you can either:
//1. app.get and send (not recommended)
/* This is index.html inside navbar-app folder
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
});
*/ 

//2. Dumping everything and all files to public folder (adding to static assets)
//This index.html is the one inside public folder and will becomes a root
//And thus will have access to everything inside the public folder
//The index.html is already include in LINE 7
//And will automatically be served by express when we go to localhost:3000


//3. Server side rendering 

app.all('*', (req, res)=>{
    res.status(404).send(`
        <h2>Error 404 file not found</h2>
    `);
});

app.listen(3000, ()=>{
    console.log('Server listening on port 3000...');
});