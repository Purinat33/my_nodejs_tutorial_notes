const express = require('express');
const app = express();

//Express middleware
//Functions that executes during reqest and has access to req and res 
//Middleware are pretty much used to make up expressjs


/*
    req => Middleware => res
*/
app.get('/', (req,res)=>{
    res.send('Home')
});

app.get('/about', (req,res)=>{
    res.send('about')
})

app.listen(3000,()=>{
    console.log('Server listening on port 3000...');
})