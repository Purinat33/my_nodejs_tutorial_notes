// If you undersstand API well
// Then you won't have much problem with templates/SSR

const express = require('express');
const app = express();
const port = 3000;

const {products, user} = require('./data')

//Main idea of API
//Our server provides DATA
//The front-end apps will perform http requests for data
//Data are sent in JSON (application/json) (api)
//Anywhere can request/access the JSON and built something using it

/*  Content here */
//We're sending just some random arrays for now
//We'll use database for it later
app.get('/', (req, res)=>{
    res.json(products); //not to be confused with express.json()
    //Now that we got the data, we can use it to build a web app
}); //For now we'll handle all request at root FOR NOW






/////////////////////////////////
// 404 Error
app.all('*', (req,res)=>{
    res.status(404).send(`
        <h1>Error, Page not found</h1>
    `);
});

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}...`);
});