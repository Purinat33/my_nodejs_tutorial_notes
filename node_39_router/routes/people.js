//For people api
const express = require('express');
//Instead of going app = express();
//we make router instead

const router = express.Router();


//We will move this one later
const {people} = require('./../data')



//Remove every link
//Since we use this with app.get(/api/people)
//So we remove the api/people parts of everything
//Thus we remove the complexity of it
router.get('/', (req,res)=>{
    res.status(200).json({success:true, data:people});
})

router.post('/', (req,res)=>{
    const { name, id } = req.body;
    if(!name || !id){
        return res.status(401).json({success:false});
    }

    res.status(201).json({success:true, data: [...people, {"id":id,"name":name}]});

});

router.put('/:id', (req,res)=>{
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

router.delete('/:id', (req,res)=>{
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


module.exports = router;