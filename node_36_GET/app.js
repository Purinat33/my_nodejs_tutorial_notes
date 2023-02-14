const express = require('express');
const app = express();
let {people} = require('./data');

//static assets
app.use(express.static('./public'));
//parse forms data
//Built-in middleware
app.use(express.urlencoded({extended: false}));

//parse JSON
app.use(express.json());

//Get
app.get('/api/people', (req,res)=>{
    res.status(200).json({success:true, data:people});
})
//Default is GET



//POST
//Insert data
//Use with POSTMAN
//We cannot use POST directly, we use html/js to do it (for now)
//With express static assets
//We'll use postman later
// 1. See index.html -> Cannot POST /login
// Data are added/sent in key-valued pair
// Key = name="" in input
// Value = input

app.post('/login', (req,res)=>{
    console.log('Posting to /login');
    res.send('POST to login');
    //As of now its not 404
    //But we cannot access it YET
    //Via middleware

    //We parse the data and add the values to req.body
    console.log(req.body);
    const {name} = req.body; //Getting name property
    if(name){
        return res.status(200).send(`Welcome ${name}`);
    }
        return res.status(401).send(`No input detected`);
});

app.post('/api/people', (req,res)=>{
    const {name} = req.body;
    if(!name){
        return res
        .status(400).json({success:false, msg:`Message cannot be blank`});
    }
    res.status(201).send({success:true, identity: name})
});

app.post('/api/postman/people', (req,res)=>{
    const {name} = req.body;
    if(!name){
    return res
        .status(400).json({success:false, msg:`Message cannot be blank`});
    }
    res.status(201).send({success:true, data: [...people, name]})
})

app.listen(3000, ()=>{
    console.log(`Server is listening on port 3000...`);
});