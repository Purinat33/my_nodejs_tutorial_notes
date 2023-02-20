const express = require('express')
const app = express()

const people = require('./routes/people'); //People routers
const auth = require('./routes/auth')

app.use(express.urlencoded({extended:false}));
app.use(express.json());


//Router
//We already have the base routes setup
//Time for MVC controllers
app.use('/api/people', people);
app.use('/login', auth);

//We still have the requests
//But the functions we separate into a different file
//For MVC

app.listen(3000, (req,res)=>{
    console.log('Server is listening on port 3000...');
});