const express = require('express');
const path = require('path');
const app = express();


//Importing for js, css etc. (static resources) (Setup static and middleware)
app.use(express.static('./public')); //Path to the resources of css, js (commonly called 'public')
//The cool thing is that this resource are readily avaiable regardless of path/url (contact and home can use the same assets)
//You can have multiple static assets imported (files that server doesn't have to change)
//But really, they are all static you can just throw all the assets into the folder (20k images, 100 js files, 12 css etc.)
//Static - Same display regardless of who visited
//Dynamic - Change depending on factors (hi john)(hi peter)

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './02-express-tutorial/navbar-app/index.html'));
}); //Still not have css, js, svg. But easier to solve than HTTP module
//See line 6

app.all('*', (req, res)=>{
    res.status(404).send(`
        <h1>Resource not found</h1>
        <hr>
    `);
})


const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is listening on port 3000...`);
});