const express = require('express')
const app = express()
const {people} = require('./data')

app.get('/api/people', (req,res)=>{
    
})

app.post('/api/people', (req,res)=>{

});

app.listen(3000, (req,res)=>{
    console.log('Server is listening on port 3000...');
});