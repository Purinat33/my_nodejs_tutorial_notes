const express = require('express')
const app = express()

const people = require('./routes/people'); //People routers
const auth = require('./routes/auth')

app.use(express.urlencoded({extended:false}));
app.use(express.json());


//Router
app.use('/api/people', people);
app.use('/login', auth);


//We can see that the workspace is starting to get crowded
//So we will use routers
//Router to group routes together
//And use with controllers
//MVC controller

//Notice we have 2 distinct groups
//1. login route



//2. api/people routes




app.listen(3000, (req,res)=>{
    console.log('Server is listening on port 3000...');
});