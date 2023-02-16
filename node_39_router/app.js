const express = require('express')
const app = express()
const {people} = require('./data')

app.use(express.urlencoded({extended:false}));
app.use(express.json());


//We can see that the workspace is starting to get crowded
//So we will use routers
//Router to group routes together
//And use with controllers
//MVC controller

//Notice we have 2 distinct groups
//1. login route
app.post('/login', (req,res)=>{

})


//2. api/people routes
app.get('/api/people', (req,res)=>{
    res.status(200).json({success:true, data:people});
})

app.post('/api/people/', (req,res)=>{
    const { name, id } = req.body;
    if(!name || !id){
        return res.status(401).json({success:false});
    }

    res.status(201).json({success:true, data: [...people, {"id":id,"name":name}]});

});

app.put('/api/people/:id', (req,res)=>{
    const {id} = req.params; //Use to look for the specific item
    const {name} = req.body; //To update when we found the ID
    console.log(id, name);

    const person = people.find((person)=>
        person.id === Number(id)
    )

    if(!person){
        return res
        .status(401)
        .json({success:false, msg:`No person with id ${id}`});
    }

    const newPeople= people.map(
        (person)=>{
            if(person.id===Number(id)){
                person.name = name;
            }
            return person;
        }
    );
    res.status(200).json({success:true, data: newPeople})
})

app.delete('/api/people/:id', (req,res)=>{
    //Look for the person 
    const person = people.find((person)=>
        person.id === Number(req.params.id)
    )

    if(!person){
        return res
        .status(404)
        .json({success:false, msg:`No person with id ${req.params.id}`});
    }

    const newPeople = people.filter(
        (person)=> person.id !== Number(req.params.id)
    )
    return res.status(200).json({success:true, data:newPeople})

}); //Setup is very familiar with PUT()



app.listen(3000, (req,res)=>{
    console.log('Server is listening on port 3000...');
});