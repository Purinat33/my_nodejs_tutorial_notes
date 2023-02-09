const express = require('express')
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');

//Example of chaining multiple middleware functions
app.use([logger,authorize]);
//Note that order matters
//If we put authorize first then it will run before logger function

app.get('/', (req,res)=>{
    res.send('Home')
})

app.get('/about', (req,res)=>{
    res.send('About')
})

app.get('/api/product', (req,res)=>{
    res.send('Product')
})

app.get('/api/items', (req,res)=>{
    console.log(req.user);
    res.send("Items");
})

app.listen(3000, ()=>{
    
})