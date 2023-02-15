const express = require('express')
const app = express()
const {people} = require('./data')

app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.get('/api/people', (req,res)=>{
    res.status(200).json({success:true, data:people});
})

app.post('/api/people/', (req,res)=>{
    const { name } = req.body;
    if(!name){
        return res.status(401).json({success:false});
    }

    res.status(201).json({success:true, data: [...people, name]});

});

app.put('api/people/', (req,res)=>{
    
})

app.listen(3000, (req,res)=>{
    console.log('Server is listening on port 3000...');
});